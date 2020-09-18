import * as React from "react";
import {
  Message,
  NavigatableWidget,
  // NavigatableWidget,
  // Navigatable,
  ReactWidget,
  // Saveable,
  // SaveableSource,
  // StatefulWidget,
  // ReactRenderer,
} from "@theia/core/lib/browser";
import { injectable } from "inversify";
import URI from "@theia/core/lib/common/uri";
import { SelectionService } from "@theia/core";
import { FileService } from "@theia/filesystem/lib/browser/file-service";

import Icon from "./components/icon";

@injectable()
export class H1stNotebookWidget extends ReactWidget
  implements NavigatableWidget {
  static readonly ID = "h1st:notebook:widget";

  constructor(
    readonly uri: URI,
    protected readonly selectionService: SelectionService,
    protected readonly fileService: FileService
  ) {
    super();
  }

  // get onDispose(): Event<void> {
  //   return this.toDispose.onDispose;
  // }

  // get saveable(): Saveable {
  //   return this.editor.document;
  // }

  // storeState(): object {
  //   return {};
  // }

  // restoreState(oldState: object): void {
  //   console.log("restoring state", oldState);
  // }

  getResourceUri(): URI | undefined {
    return this.uri;
  }
  createMoveToUri(resourceUri: URI): URI | undefined {
    return new URI("test2");
  }

  protected async onAfterAttach(msg: Message): Promise<void> {
    const content = await this.fileService.readFile(this.uri);
    console.log(content.value);

    this.update();
    super.onAfterAttach(msg);
  }

  protected onActivateRequest(msg: Message) {
    console.log("activated", msg, this.uri);
    super.onActivateRequest(msg);
  }

  protected renderToolbar(): React.ReactNode {
    return (
      <div className="notebook-toolbar">
        <ul>
          <li>
            <Icon icon="fast-forward" width={16} height={16} />
          </li>
        </ul>
      </div>
    );
  }

  protected render(): React.ReactNode {
    return (
      <React.Fragment>
        {this.renderToolbar()}
        <div>Notebook goes here {this.uri.toString()}</div>
      </React.Fragment>
    );
  }
}
