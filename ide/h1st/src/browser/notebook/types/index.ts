import { ThemeType } from "@theia/core/lib/browser/theming";
import { NotebookManager } from "../notebook-manager";

export interface ICell {}

export interface Theme {
  readonly id: string;
  readonly type: ThemeType;
  readonly label: string;
  readonly description?: string;
  readonly editorTheme?: string;
}

export interface IDeletedCell {
  index: number;
  cell: ICellModel;
}

export interface INotebookOptions {
  showLineNumber: boolean;
}

export interface INotebook {
  cells: ICellModel[];
  deletedCells: IDeletedCell[];
  selectedCell: string | null;
  selectedCells: string[];
  activeCell: string | null;
  activeTheme: Theme | null;
  executionQueue: string[];
  focusedCell: string | null;
  clipboard: {
    context: "copy" | "cut" | null;
    cells: ICellModel[];
  };
  pivotCell: ICellModel | null; // the cell to pivot selection to select multiple cell
  options: INotebookOptions;
  freeze: boolean;
}

export interface INotebookWidget {
  width: number | null;
  height: number | null;
}

export type IKernelStatus = "idle" | "busy" | "disconnected";

export enum KERNEL_STATUS {
  IDLE = "idle",
  BUSY = "busy",
  DISC = "disconnected",
}

export interface IKernel {
  currentKernel: any | undefined;
  connectionStatus: string;
  status: IKernelStatus;
}

export interface IStore {
  kernel: IKernel;
  notebook: INotebook;
  widget: INotebookWidget;
}

export interface ICellOutputError {
  output_type: string;
  ename: string;
  evalue: string;
  traceback: string[];
}

export type ICellType = "markdown" | "code" | "raw";

export interface ICellModel {
  source: string[];
  cell_type: ICellType;
  metadata: any;
  id: string;
  outputs: any[];
  execution_count?: number;
}

export interface ICellOutputProps {
  model: ICellModel;
}

export enum CELL_TYPE {
  MD = "markdown",
  CODE = "code",
  RAW = "raw",
}

export interface INotebookContext {
  saveNotebook: Function;
  manager: NotebookManager | null;
  width: number;
  height: number;
}
