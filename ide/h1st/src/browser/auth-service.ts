import { FrontendApplicationContribution } from "@theia/core/lib/browser";
import { injectable } from "inversify";
import { KeycloakInstance } from "keycloak-js";

const Keycloak = require("keycloak-js");

@injectable()
export class H1stAuthService implements FrontendApplicationContribution {
  private keycloak: KeycloakInstance;

  constructor() {
    // TODO load from settings
    this.keycloak = new Keycloak({
      url: "https://login.h1st.ai/auth",
      realm: "h1st",
      clientId: "h1st-workbench-web",
    });
  }

  get authenticator(): KeycloakInstance {
    return this.keycloak;
  }

  async initialize(): Promise<void> {
    await this.keycloak.init({
      onLoad: "login-required",
      checkLoginIframe: true,
      responseMode: "query",
    });

    console.log("auth service initialized", this.keycloak);
  }
}
