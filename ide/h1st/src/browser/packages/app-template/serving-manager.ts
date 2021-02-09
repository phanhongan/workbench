// import { ExperimentWidgetFactory } from './experiment-widget-factory';
import { FrontendApplication, WidgetManager } from '@theia/core/lib/browser';
import { OpenerService, open } from '@theia/core/lib/browser/opener-service';
import { AppTemplateUris } from './experiment-uris';

// import { ExperimentWidget } from './expriment-widget';
// import { WidgetManager } from '@theia/core/lib/browser';

const uniqid = require('uniqid');

interface ITuningManagerOptions {
  app: FrontendApplication;
  widgetManager: WidgetManager;
  openerService: OpenerService;
}

export class ServingManager {
  private readonly app: FrontendApplication;
  private readonly widgetManager: WidgetManager;
  private readonly openerService: OpenerService;

  // @inject(ExperimentWidgetFactory)
  // private expWidgetFactory: ExperimentWidgetFactory;

  constructor({ app, widgetManager, openerService }: ITuningManagerOptions) {
    this.app = app;
    this.widgetManager = widgetManager;
    this.openerService = openerService;

    console.log(this.app, this.widgetManager, this.openerService);
  }

  async createNewExperiment() {
    const id = uniqid();
    const name = 'serving';

    open(this.openerService, AppTemplateUris.encode(id, name), {
      mode: 'activate',
      name,
      id,
    });
  }
}
