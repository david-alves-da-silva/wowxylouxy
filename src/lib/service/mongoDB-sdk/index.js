import * as Realm from "realm-web";

const REALM_APP_ID = "application-ecomerce-gyaby"; // e.g. myapp-abcde
const app = new Realm.App({ id: REALM_APP_ID });

export { app }