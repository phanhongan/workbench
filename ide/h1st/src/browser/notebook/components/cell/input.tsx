import * as React from "react";
// import Editor from "@monaco-editor/react";
import Editor from "./monaco-editor";
import { useDispatch, useSelector } from "react-redux";
import { CELL_TYPE, IStore } from "../../types";
import { notebookActions } from "../../reducers/notebook";
// import { editor } from "monaco-editor";

const LINE_HEIGHT = 18;

export default function CellInput({ model, width, height }: any) {
  const { useRef, useEffect } = React;
  let editorHeight: number;

  const dispatch = useDispatch();
  const { setActiveCell } = notebookActions;
  const { activeCell } = useSelector((store: IStore) => store.notebook);
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeCell === model.id && model.cell_type == CELL_TYPE.MD) {
      const editor = editorRef.current;
      if (editor) {
        editor.focus();
      }
    }
  });

  // update input width when the widget size change
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.layout();
    }
  }, [width]);

  // Monaco editor is ready to use
  function handleEditorDidMount(_: any, monacoEditor: any) {
    console.log(`${model.id} editor did mount`, monacoEditor);
    editorRef.current = monacoEditor;
    // setEditor(monacoEditor);
    // editor = monacoEditor;

    setTimeout(() => {
      updateEditorHeight();
      // updateEditorWidth();
    }, 0);

    monacoEditor.onDidChangeModelContent((ev: any) => {
      updateEditorHeight();
    });

    monacoEditor.onDidBlurEditorText((ev: any) => {
      dispatch(setActiveCell({ id: null }));
    });

    monacoEditor.onDidFocusEditorText((ev: any) => {
      if (model.cell_type === CELL_TYPE.CODE) {
        dispatch(setActiveCell({ id: model.id }));
      }
    });
  }

  // function updateEditorWidth() {
  //   if (!width) return;

  //   const editor = editorRef.current;

  //   console.log(
  //     "should width updated",
  //     wrapperRef.current,
  //     width,
  //     editorWidth,
  //     editor
  //   );
  //   if (wrapperRef.current) {
  //     // real width of input = width minus other component width
  //     const inputWidth = Math.max(100, width - 42 - 8 - 32 - 20);
  //     const wrapper = wrapperRef.current;

  //     wrapper.style.width = `${inputWidth}px`;

  //     if (editor && editorWidth !== inputWidth) {
  //       console.log(
  //         `${model.id}: width changed detected. Updating width from`,
  //         inputWidth,
  //         width
  //       );
  //       // alert("width change");
  //       setTimeout(() => {
  //         // editor.layout({ height: editorHeight, width: inputWidth });
  //         // editor.layout();
  //         editorWidth = inputWidth;
  //       }, 0);
  //     }
  //   }
  // }

  function updateEditorHeight() {
    const editor = editorRef.current;
    if (!editor) return;

    const editorDomNode = editor.getDomNode();

    if (!editorDomNode) return;

    // const container = editorDomNode.getElementsByClassName(
    //   "view-lines"
    // )[0] as HTMLElement;

    // const currLineCount = container.childElementCount;
    // if (currentLineCount === currLineCount) {
    //   return;
    // }

    // const lineHeight = computeLineHeight(editor);
    // const contentHeight = editor.getModel().getLineCount() * lineHeight;
    const contentHeight = editor.getContentHeight();
    const height = Math.max(LINE_HEIGHT, contentHeight);

    // do nothing if the height has not change
    if (height === editorHeight) return;

    console.log(
      `${model.id} editor height change detected from ${editorHeight} to ${height}. Updating editor height`,
      editor
    );

    if (wrapperRef.current) {
      editorHeight = height;

      wrapperRef.current.style.height = `${height}px`;
      // editor.layout({ width, height });
      editor.layout();
    }

    // if (container.childElementCount !== currLineCount) {
    //   updateEditorHeight();
    // } else {
    //   setCurrentLineCount(currLineCount);
    // }
  }

  function renderMarkdownInput() {
    if (activeCell === model.id) {
      return (
        <div className="cell-input-spacing">
          <div className="cell-editor-wrapper" ref={wrapperRef}>
            <Editor
              language="markdown"
              value={model.source.join("")}
              editorDidMount={handleEditorDidMount}
            />
          </div>
        </div>
      );
    }

    return null;
  }

  function renderCodeInput() {
    return (
      <Editor
        language="python"
        value={model.source.join("")}
        options={{
          glyphMargin: true,
          wordWrap: "on",
          scrollBeyondLastLine: false,
          lightbulb: { enabled: true },
          fixedOverflowWidgets: true,
          automaticLayout: true,
          minimap: {
            enabled: false,
          },
          lineNumbers: "off",
          scrollbar: {
            vertical: "hidden",
            horizontal: "hidden",
            verticalScrollbarSize: 0,
            horizontalScrollbarSize: 0,
            alwaysConsumeMouseWheel: false,
          },
          renderLineHighlight: "none",
          highlightActiveIndentGuide: false,
          renderIndentGuides: false,
          overviewRulerBorder: false,
          overviewRulerLanes: 0,
          hideCursorInOverviewRuler: true,
          folding: false,
          occurrencesHighlight: false,
          selectionHighlight: false,
          lineDecorationsWidth: 0,
          contextmenu: false,
          matchBrackets: "always",
        }}
        editorDidMount={handleEditorDidMount}
      />
    );
  }

  function renderInput() {
    switch (model.cell_type) {
      case "markdown":
        return renderMarkdownInput();

      case "code":
        return (
          <div className="cell-input-spacing">
            <div className="cell-editor-wrapper" ref={wrapperRef}>
              {renderCodeInput()}
            </div>
          </div>
        );

      default:
        return <p>{model.source.join("")}</p>;
    }
  }

  // update editor size
  // updateEditorWidth();

  return renderInput();
}
