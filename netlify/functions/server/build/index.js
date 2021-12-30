var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toModule(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require("remix"));
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/Quentin/Documents/Projects/Web/Remix/sheikah-diary/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var React2 = __toModule(require("react"));
var import_remix3 = __toModule(require("remix"));

// app/styles/global.css
var global_default = "/build/_assets/global-7ZEKWTPA.css";

// app/styles/basic.css
var basic_default = "/build/_assets/basic-GNEGZGIT.css";

// app/components/error-page.tsx
var import_remix2 = __toModule(require("remix"));
function ErrorPage({
  message = "There was an error..."
}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-black text-white w-screen h-screen flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "font-title text-6xl text-center transform scale-x-75"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-8xl"
  }, "G"), "AME ", /* @__PURE__ */ React.createElement("span", {
    className: "text-8xl"
  }, "O"), "VER"), /* @__PURE__ */ React.createElement("p", {
    className: "mx-auto mt-2 mb-5"
  }, message), /* @__PURE__ */ React.createElement(import_remix2.Link, {
    className: "ui button",
    to: "/app/entries"
  }, "Back to the entries")));
}

// route-module:/Users/Quentin/Documents/Projects/Web/Remix/sheikah-diary/app/root.tsx
var links = () => {
  return [
    { rel: "stylesheet", href: global_default },
    { rel: "stylesheet", href: basic_default },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;600&family=Spectral:wght@800&display=swap",
      crossOrigin: "anonymous"
    },
    { rel: "icon", href: "/favicon.png" },
    { rel: "icon", href: "/favicon.ico" },
    { rel: "icon", href: "/favicon.svg" },
    {
      rel: "icon",
      href: "/favicon-dark.png",
      media: "prefers-color-scheme: dark"
    },
    {
      rel: "icon",
      href: "/favicon-dark.ico",
      media: "prefers-color-scheme: dark"
    },
    {
      rel: "icon",
      href: "/favicon-dark.svg",
      media: "prefers-color-scheme: dark"
    },
    { rel: "manifest", href: "/manifest.json" }
  ];
};
var meta = () => {
  return {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "application-name": "Sheika Diary",
    "apple-mobile-web-app-title": "Sheika Diary",
    "theme-color": "#50463b",
    "msapplication-navbutton-color": "#50463b",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "msapplication-starturl": "/",
    viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"
  };
};
function App() {
  return /* @__PURE__ */ React2.createElement(Document, null, /* @__PURE__ */ React2.createElement(Layout, null, /* @__PURE__ */ React2.createElement(import_remix3.Outlet, null)));
}
function Document({
  children,
  title
}) {
  return /* @__PURE__ */ React2.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React2.createElement("head", null, /* @__PURE__ */ React2.createElement("meta", {
    charSet: "utf-8"
  }), title ? /* @__PURE__ */ React2.createElement("title", null, title) : null, /* @__PURE__ */ React2.createElement(import_remix3.Meta, null), /* @__PURE__ */ React2.createElement(import_remix3.Links, null)), /* @__PURE__ */ React2.createElement("body", {
    style: { backgroundColor: "#50463b" }
  }, children, /* @__PURE__ */ React2.createElement(RouteChangeAnnouncement, null), /* @__PURE__ */ React2.createElement(import_remix3.Scripts, null), process.env.NODE_ENV === "development" && /* @__PURE__ */ React2.createElement(import_remix3.LiveReload, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ React2.createElement("div", {
    className: "fixed w-full h-full text-base bg-primary-800 flex flex-col"
  }, children);
}
function CatchBoundary() {
  let caught = (0, import_remix3.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = "You don't have acces to this page";
      break;
    case 404:
      message = "This page does not exist";
      break;
    default:
      throw caught;
  }
  return /* @__PURE__ */ React2.createElement(Document, {
    title: caught.statusText
  }, /* @__PURE__ */ React2.createElement(ErrorPage, {
    message
  }));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React2.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React2.createElement(ErrorPage, null));
}
var RouteChangeAnnouncement = React2.memo(() => {
  let [hydrated, setHydrated] = React2.useState(false);
  let [innerHtml, setInnerHtml] = React2.useState("");
  let location = (0, import_remix3.useLocation)();
  React2.useEffect(() => {
    setHydrated(true);
  }, []);
  let firstRenderRef = React2.useRef(true);
  React2.useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    let pageTitle = location.pathname === "/" ? "Home page" : document.title;
    setInnerHtml(`Navigated to ${pageTitle}`);
  }, [location.pathname]);
  if (!hydrated) {
    return null;
  }
  return /* @__PURE__ */ React2.createElement("div", {
    "aria-live": "assertive",
    "aria-atomic": true,
    id: "route-change-region",
    style: {
      border: "0",
      clipPath: "inset(100%)",
      clip: "rect(0 0 0 0)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: "0",
      position: "absolute",
      width: "1px",
      whiteSpace: "nowrap",
      wordWrap: "normal"
    }
  }, innerHtml);
});

// route-module:/Users/Quentin/Documents/Projects/Web/Remix/sheikah-diary/app/routes/logout.ts
var logout_exports = {};
__export(logout_exports, {
  action: () => action,
  loader: () => loader
});
var import_remix5 = __toModule(require("remix"));

// app/utils/session.server.ts
var import_bcrypt = __toModule(require("bcrypt"));
var import_remix4 = __toModule(require("remix"));

// app/utils/db.server.ts
var import_client = __toModule(require("@prisma/client"));
var db;
if (process.env.NODE_ENV === "production") {
  db = new import_client.PrismaClient();
  db.$connect();
} else {
  if (!global.__db) {
    global.__db = new import_client.PrismaClient();
    global.__db.$connect();
  }
  db = global.__db;
}

// app/utils/session.server.ts
async function register({ username, password }) {
  console.log("Request to register with username", username);
  let passwordHash = await import_bcrypt.default.hash(password, 10);
  return db.user.create({
    data: { username, passwordHash }
  });
}
async function login({ username, password }) {
  console.log("Request to login with username", username);
  let user = await db.user.findUnique({
    where: { username }
  });
  if (!user) {
    console.log("User does not exists");
    return null;
  }
  let isCorrectPassword = await import_bcrypt.default.compare(password, user.passwordHash);
  if (!isCorrectPassword) {
    console.log("Incorrect password");
    return null;
  }
  return user;
}
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}
var storage = (0, import_remix4.createCookieSessionStorage)({
  cookie: {
    name: "RJ_session",
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true
  }
});
function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function getUserId(request) {
  let session = await getUserSession(request);
  let userId = session.get("userId");
  if (!userId || typeof userId !== "string")
    return null;
  return userId;
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  console.log("Request to get user id from session");
  let session = await getUserSession(request);
  let userId = session.get("userId");
  if (!userId || typeof userId !== "string") {
    console.log("Unable to retrieve user id from session, redirecting to login page with redirect_to = ", redirectTo);
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_remix4.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
async function getUser(request, include) {
  let userId = await getUserId(request);
  if (typeof userId !== "string") {
    console.log("Unable to get user");
    return null;
  }
  try {
    let user = await db.user.findUnique({
      where: { id: userId },
      include
    });
    return user;
  } catch {
    throw logout(request);
  }
}
async function logout(request) {
  var _a;
  console.log("Request to logout");
  let redirectTo = ((_a = (await request.formData()).get("redirectTo")) == null ? void 0 : _a.toString()) ?? "/login";
  let session = await storage.getSession(request.headers.get("Cookie"));
  return (0, import_remix4.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}
async function createUserSession(userId, redirectTo) {
  console.log("Request to create a user session for user with id", userId, "and to redirect to", redirectTo);
  let session = await storage.getSession();
  session.set("userId", userId);
  return (0, import_remix4.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}

// route-module:/Users/Quentin/Documents/Projects/Web/Remix/sheikah-diary/app/routes/logout.ts
var action = async ({ request }) => {
  return logout(request);
};
var loader = async () => {
  return (0, import_remix5.redirect)("/");
};

// route-module:/Users/Quentin/Documents/Projects/Web/Remix/sheikah-diary/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => IndexPage,
  meta: () => meta2
});
var import_remix6 = __toModule(require("remix"));

// package.json
var name = "sheikah-diary";
var description = "Open Source app for picture sharing, based on Breath of the Wild UI";
var author = {
  name: "Quentin Widlocher",
  email: "quentin@widlocher.com",
  url: "https://quentin.widlocher.com"
};
var license = "GPL-3.0-or-later";
var version = "1.0.2";
var repository = {
  url: "https://github.com/QuentinWidlocher/sheikah-diary"
};
var prisma = {
  seed: "node --require esbuild-register prisma/seed.ts"
};
var scripts = {
  "build:css": "postcss ./styles/* --dir ./app/styles",
  "build:remix": "remix build",
  build: "yarn build:css && prisma migrate deploy && prisma generate && remix build",
  "dev:css": "postcss ./styles/* --dir ./app/styles --watch",
  "dev:remix": "remix dev --host 0.0.0.0",
  dev: "cross-env NODE_ENV=development netlify dev",
  postinstall: "remix setup node",
  prisma: "npx prisma"
};
var dependencies = {
  "@prisma/client": "^3.6.0",
  "@remix-run/node": "1.0.6",
  "@remix-run/react": "1.0.6",
  "@remix-run/serve": "1.0.6",
  "@remix-run/netlify": "1.0.6",
  "@netlify/functions": "^0.10.0",
  "@supabase/supabase-js": "^1.28.2",
  bcrypt: "^5.0.1",
  react: "^17.0.2",
  "react-dom": "^17.0.2",
  "react-icons": "^4.3.1",
  "react-loading": "^2.0.3",
  remix: "1.0.6",
  sharp: "^0.29.3",
  superjson: "^1.8.0",
  zod: "^3.11.6"
};
var devDependencies = {
  "@remix-run/dev": "1.0.6",
  "@types/bcrypt": "^5.0.0",
  "@types/react": "^17.0.24",
  "@types/react-dom": "^17.0.9",
  "@types/sharp": "^0.29.4",
  autoprefixer: "^10.4.0",
  "esbuild-register": "^3.2.0",
  concurrently: "^6.5.0",
  pm2: "^5.1.2",
  postcss: "^8.3.11",
  "postcss-cli": "^9.0.2",
  "postcss-import": "^14.0.2",
  prisma: "^3.6.0",
  tailwindcss: "3.0.7",
  typescript: "^4.1.2"
};
var engines = {
  node: ">=14"
};
var sideEffects = false;
var package_default = {
  name,
  description,
  author,
  license,
  version,
  repository,
  prisma,
  scripts,
  dependencies,
  devDependencies,
  engines,
  sideEffects
};

// route-module:/Users/Quentin/Documents/Projects/Web/Remix/sheikah-diary/app/routes/index.tsx
var meta2 = () => {
  return {
    title: "Sheikah Diary"
  };
};
function IndexPage() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-full bg-[url('/assets/main-bg.jpg')] bg-top"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-full flex bg-gradient-to-l from-black/60"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col ml-auto py-10 px-5 md:px-10 lg:px-20 w-full md:w-2/3 lg:w-1/2 xl:w-1/3"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "font-title text-6xl whitespace-nowrap"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-8xl tracking-[-2rem]"
  }, "S"), /* @__PURE__ */ React.createElement("span", {
    className: "inline-block scale-x-75"
  }, "HEIKAH"), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", {
    className: "text-8xl tracking-[-1.1rem]"
  }, "D"), /* @__PURE__ */ React.createElement("span", {
    className: "inline-block scale-x-75"
  }, "IARY")), /* @__PURE__ */ React.createElement("h2", null, "Open Source app to share picture from ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("strong", null, "The Legend of Zelda : Breath of the Wild")), /* @__PURE__ */ React.createElement("nav", {
    className: "my-auto"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "flex flex-col space-y-5 text-xl items-end"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: "/app",
    className: "opacity-60 hover:before:content-['>'] hover:opacity-100"
  }, "Open the app")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: "opacity-60 hover:before:content-['>'] hover:opacity-100",
    href: "https://github.com/QuentinWidlocher/sheikah-diary"
  }, "See on GitHub")))), /* @__PURE__ */ React.createElement("div", {
    className: "text-right"
  }, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", {
    className: "opacity-60"
  }, "Ver. ", package_default.version), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: "opacity-60 hover:opacity-100",
    href: package_default.repository.url
  }, "See on GitHub")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", {
    className: "opacity-60"
  }, new Date().getFullYear(), " - "), /* @__PURE__ */ React.createElement("a", {
    className: "opacity-60 hover:opacity-100",
    href: package_default.author.url
  }, package_default.author.name)))))));
}

// route-module:/Users/Quentin/Documents/Projects/Web/Remix/sheikah-diary/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => Login,
  links: () => links2,
  meta: () => meta3
});
var import_react = __toModule(require("react"));
var import_fi = __toModule(require("react-icons/fi"));
var import_remix7 = __toModule(require("remix"));

// app/components/error-message.tsx
function ErrorMessage({
  error,
  className = "",
  onlyFirst = true
}) {
  var _a;
  return ((_a = error == null ? void 0 : error._errors) == null ? void 0 : _a.length) ? /* @__PURE__ */ React.createElement("small", {
    className: "text-sm text-danger-500 " + className
  }, onlyFirst ? error._errors[0] : error._errors.map((e, i, l) => /* @__PURE__ */ React.createElement("span", {
    key: e
  }, e, " ", i <= l.length ? /* @__PURE__ */ React.createElement("br", null) : null))) : null;
}

// app/features/login/api.ts
var import_zod2 = __toModule(require("zod"));

// app/utils/formdata.utils.server.ts
var import_zod = __toModule(require("zod"));
function getObjectFromFormData(request) {
  return request.formData().then((fd) => Object.fromEntries(fd.entries()));
}
function transformField(val) {
  switch (val) {
    case "true":
      return true;
    case "false":
      return false;
    default:
      return val;
  }
}
function transformFields(obj) {
  return Object.keys(obj).reduce((acc, k) => __spreadProps(__spreadValues({}, acc), {
    [k]: transformField(obj[k])
  }), {});
}
function transformFormData(validator2) {
  return import_zod.z.preprocess((obj) => typeof obj == "object" ? transformFields(obj) : obj, validator2);
}
async function safeParseFormData(request, validator2) {
  return getObjectFromFormData(request).then((x) => transformFormData(validator2).safeParse(x));
}
async function parseFormData(request, validator2) {
  return getObjectFromFormData(request).then((x) => transformFormData(validator2).parse(x));
}

// app/features/login/api.ts
var formValidator = import_zod2.z.object({
  username: import_zod2.z.string().min(1, { message: "The username is required" }),
  password: import_zod2.z.string().min(6, { message: "The password must be at least 6 characters" }),
  redirectTo: import_zod2.z.string().optional(),
  loginType: import_zod2.z.literal("login").or(import_zod2.z.literal("register"))
});
var loginAction = async ({
  request
}) => {
  let parsedFormData = await safeParseFormData(request, formValidator);
  if (!parsedFormData.success) {
    return parsedFormData.error.format();
  }
  let {
    loginType,
    password,
    username,
    redirectTo = "/app/entries"
  } = parsedFormData.data;
  switch (loginType) {
    case "login": {
      let user = await login({ username, password });
      if (!user) {
        return {
          _errors: ["Username/Password combination is incorrect"]
        };
      }
      return createUserSession(user.id, redirectTo);
    }
    case "register": {
      let userExists = await db.user.findFirst({
        select: { id: true },
        where: { username }
      });
      if (userExists) {
        return {
          username: {
            _errors: [`User with username ${username} already exists`]
          },
          _errors: []
        };
      }
      let user = await register({ username, password });
      if (!user) {
        return {
          _errors: ["Something went wrong trying to create a new user."]
        };
      }
      return createUserSession(user.id, redirectTo);
    }
    default: {
      return { _errors: ["Login type invalid"] };
    }
  }
};

// app/utils/functional.utils.ts
function invert(x) {
  return !x;
}

// app/styles/login.css
var login_default = "/build/_assets/login-RYVEJWG4.css";

// route-module:/Users/Quentin/Documents/Projects/Web/Remix/sheikah-diary/app/routes/login.tsx
var links2 = () => {
  return [{ rel: "stylesheet", href: login_default }];
};
var meta3 = () => {
  return {
    title: "Login | Sheikah Diary"
  };
};
var action2 = loginAction;
function Login() {
  let errors = (0, import_remix7.useActionData)();
  let [searchParams] = (0, import_remix7.useSearchParams)();
  const [showPassword, setShowPassword] = (0, import_react.useState)(false);
  return /* @__PURE__ */ React.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("h1", null, "Login"), /* @__PURE__ */ React.createElement(import_remix7.Form, {
    method: "post",
    "aria-describedby": (errors == null ? void 0 : errors._errors) ? "form-error-message" : void 0
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "redirectTo",
    value: searchParams.get("redirectTo") ?? void 0
  }), /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("legend", {
    className: "sr-only"
  }, "Login or Register?"), /* @__PURE__ */ React.createElement("div", {
    className: "form-group"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "radio"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "loginType",
    value: "login",
    defaultChecked: true
  }), /* @__PURE__ */ React.createElement("div", null, "Login")), /* @__PURE__ */ React.createElement("label", {
    className: "radio"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "loginType",
    value: "register"
  }), /* @__PURE__ */ React.createElement("div", null, "Register")))), /* @__PURE__ */ React.createElement("div", {
    className: "form-group"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "username-input"
  }, "Username"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    tabIndex: 1,
    id: "username-input",
    name: "username",
    "aria-invalid": Boolean(errors == null ? void 0 : errors.username),
    "aria-describedby": (errors == null ? void 0 : errors.username) ? "username-error" : void 0
  }), /* @__PURE__ */ React.createElement("div", {
    className: "w-full",
    role: "separator"
  }), /* @__PURE__ */ React.createElement(ErrorMessage, {
    className: "ml-auto mr-2",
    error: errors == null ? void 0 : errors.username
  })), /* @__PURE__ */ React.createElement("div", {
    className: "form-group"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "flex justify-between",
    htmlFor: "password-input"
  }, /* @__PURE__ */ React.createElement("span", null, "Password"), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: () => setShowPassword(invert)
  }, showPassword ? /* @__PURE__ */ React.createElement(import_fi.FiEyeOff, null) : /* @__PURE__ */ React.createElement(import_fi.FiEye, null))), /* @__PURE__ */ React.createElement("input", {
    id: "password-input",
    name: "password",
    tabIndex: 1,
    type: showPassword ? "text" : "password",
    "aria-invalid": Boolean(errors == null ? void 0 : errors.password) || void 0,
    "aria-describedby": (errors == null ? void 0 : errors.password) ? "password-error" : void 0
  }), /* @__PURE__ */ React.createElement("div", {
    className: "w-full",
    role: "separator"
  }), /* @__PURE__ */ React.createElement(ErrorMessage, {
    className: "ml-auto mr-2",
    error: errors == null ? void 0 : errors.password
  })), /* @__PURE__ */ React.createElement("div", {
    id: "form-error-message"
  }, /* @__PURE__ */ React.createElement(ErrorMessage, {
    error: errors,
    onlyFirst: false
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "button"
  }, "Submit"))), /* @__PURE__ */ React.createElement("nav", {
    className: "absolute bottom-0 right-0 p-5 font-bold"
  }, /* @__PURE__ */ React.createElement(import_remix7.Link, {
    className: "filter hover:drop-shadow-base focus:drop-shadow-base",
    to: "/app/entries"
  }, "See the entries")));
}

// route-module:/Users/Quentin/Documents/Projects/Web/Remix/sheikah-diary/app/routes/app.tsx
var app_exports = {};
__export(app_exports, {
  default: () => AppPage,
  links: () => links3,
  loader: () => loader2
});
var import_fi2 = __toModule(require("react-icons/fi"));
var import_remix9 = __toModule(require("remix"));

// app/components/app-layout.tsx
function AppLayout({ header, footer, main }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "entries-layout"
  }, /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("div", {
    className: "bg-picture"
  }), /* @__PURE__ */ React.createElement("nav", {
    className: "flex"
  }, header)), /* @__PURE__ */ React.createElement("main", null, main, /* @__PURE__ */ React.createElement("div", {
    className: "bg-picture"
  })), /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("div", {
    className: "bg-picture"
  }), /* @__PURE__ */ React.createElement("nav", {
    className: "flex"
  }, footer)));
}

// app/hooks/useCurrentRoute.ts
var import_remix8 = __toModule(require("remix"));
function useCurrentRoute() {
  var _a;
  let matches = (0, import_remix8.useMatches)();
  return (_a = matches[matches.length - 1]) == null ? void 0 : _a.pathname;
}

// app/styles/entries.css
var entries_default = "/build/_assets/entries-LLP6KOWD.css";

// route-module:/Users/Quentin/Documents/Projects/Web/Remix/sheikah-diary/app/routes/app.tsx
var links3 = () => [
  { rel: "stylesheet", href: entries_default }
];
var loader2 = async ({ request, context }) => {
  if (request.url.endsWith("/app") || request.url.endsWith("/app/")) {
    return (0, import_remix9.redirect)("/app/entries");
  }
  let currentUser = await getUser(request, {
    notifications: true
  });
  if (!currentUser) {
    return null;
  }
  let newNotif = currentUser.notifications.some((n) => !n.seenAt);
  return {
    currentUser,
    newNotif
  };
};
function AppPage() {
  let loader11 = (0, import_remix9.useLoaderData)();
  let currentRoute = useCurrentRoute();
  return /* @__PURE__ */ React.createElement(AppLayout, {
    header: /* @__PURE__ */ React.createElement(React.Fragment, null, currentRoute != "/app/entries" ? /* @__PURE__ */ React.createElement(import_remix9.Link, {
      to: "/app/entries",
      className: "sheika button mr-auto"
    }, /* @__PURE__ */ React.createElement(import_fi2.FiArrowLeft, {
      size: "1.5rem"
    }), /* @__PURE__ */ React.createElement("span", null, "Back to the entries")) : /* @__PURE__ */ React.createElement(import_remix9.Link, {
      to: "/",
      className: "sheika button mr-auto"
    }, /* @__PURE__ */ React.createElement(import_fi2.FiMenu, {
      size: "1.5rem"
    }), /* @__PURE__ */ React.createElement("span", null, "Main menu")), (loader11 == null ? void 0 : loader11.currentUser) ? /* @__PURE__ */ React.createElement(import_remix9.Link, {
      className: "sheika button ml-auto relative",
      to: `/app/users/${loader11.currentUser.username}/notifications`
    }, loader11.currentUser.username, loader11.newNotif ? /* @__PURE__ */ React.createElement("div", {
      className: "absolute bottom-3 right-2 rounded-full bg-danger-500 w-2 h-2"
    }) : null) : /* @__PURE__ */ React.createElement(import_remix9.Link, {
      className: "sheika button ml-auto",
      to: `/login?redirectTo=${currentRoute}`
    }, "Login")),
    main: /* @__PURE__ */ React.createElement(import_remix9.Outlet, null),
    footer: !(loader11 == null ? void 0 : loader11.currentUser) ? null : /* @__PURE__ */ React.createElement(import_remix9.Link, {
      to: "/app/entries/new",
      className: "sheika button ml-auto"
    }, /* @__PURE__ */ React.createElement(import_fi2.FiPlus, {
      size: "1.5rem"
    }), /* @__PURE__ */ React.createElement("span", null, "Add an entry"))
  });
}

// route-module:/Users/Quentin/Documents/Projects/Web/Remix/sheikah-diary/app/routes/app/entries/$slug/create-comment.ts
var create_comment_exports = {};
__export(create_comment_exports, {
  action: () => action3
});

// app/features/entries/api/create-comment.server.ts
var import_client2 = __toModule(require("@prisma/client"));
var import_remix10 = __toModule(require("remix"));
var import_zod3 = __toModule(require("zod"));
var formValidator2 = import_zod3.z.object({
  body: import_zod3.z.string().nonempty({ message: "You cannot send an empty comment" })
});
var createCommentAction = async ({
  request,
  params
}) => {
  let currentPage = new URL(request.url).pathname;
  let user = await getUser(request);
  if (!user) {
    return (0, import_remix10.redirect)(`/login?redirectTo=${currentPage}`);
  }
  let foundEntry = await db.entry.findFirst({
    where: {
      slug: params.slug
    },
    select: {
      id: true,
      title: true
    }
  });
  if (!foundEntry || !params.slug) {
    return (0, import_remix10.redirect)("/app/entries");
  }
  let parsedForm = await safeParseFormData(request, formValidator2);
  if (!parsedForm.success) {
    return parsedForm.error.format();
  }
  createNotifications(user, {
    id: foundEntry.id,
    title: foundEntry.title,
    slug: params.slug
  }, parsedForm.data.body);
  return db.comment.create({
    data: {
      body: parsedForm.data.body,
      entryId: foundEntry.id,
      userId: user.id
    }
  });
};
async function createNotifications(from, entry2, comment) {
  let usersWatchingThisEntry = await db.user.findMany({
    select: {
      id: true
    },
    where: {
      watches: {
        some: {
          id: entry2.id
        }
      },
      username: {
        not: {
          equals: from.username
        }
      }
    }
  });
  console.log("Creating a notification on entry", entry2.slug, "for users", usersWatchingThisEntry.map((e) => e.id));
  await db.notification.createMany({
    data: usersWatchingThisEntry.map((user) => ({
      userId: user.id,
      title: `${from.username} commented on ${entry2.title}`,
      content: comment,
      link: `/app/entries/${entry2.slug}`,
      type: import_client2.NotificationType.COMMENT
    }))
  });
  await db.user.update({
    where: {
      username: from.username
    },
    data: {
      watches: {
        connect: {
          id: entry2.id
        }
      }
    }
  });
}

// route-module:/Users/Quentin/Documents/Projects/Web/Remix/sheikah-diary/app/routes/app/entries/$slug/create-comment.ts
var action3 = (args) => createCommentAction(args);

// route-module:/Users/Quentin/Documents/Projects/Web/Remix/sheikah-diary/app/routes/app/entries/$slug/update.tsx
var update_exports = {};
__export(update_exports, {
  action: () => action4,
  default: () => EntryUpdateBySlug,
  links: () => links4,
  loader: () => loader3
});
var import_remix13 = __toModule(require("remix"));
var import_superjson = __toModule(require("superjson"));
var import_zod5 = __toModule(require("zod"));

// app/features/entries/api/update.server.ts
var import_remix11 = __toModule(require("remix"));
var import_zod4 = __toModule(require("zod"));

// app/utils/file.utils.server.ts
var import_promises = __toModule(require("fs/promises"));
var import_path = __toModule(require("path"));
var import_sharp = __toModule(require("sharp"));

// app/utils/storage.server.ts
var import_supabase_js = __toModule(require("@supabase/supabase-js"));
var supabaseUrl = process.env.SUPABASE_URL;
var supabaseKey = process.env.SUPABASE_ANON_KEY;
var supabase = (0, import_supabase_js.createClient)(supabaseUrl, supabaseKey);
var storage2 = supabase.storage;
var pictures = storage2.from("pictures");

// app/utils/file.utils.server.ts
var base64ImageValidTypeRegex = /^data:image\/(\w*);base64,/;
var base64GetExtRegex = /^data:image\/(.*);base64,/;
var imagePath = "/tmp";
function getFileInfos(base64, baseName) {
  var _a;
  let base64Data = base64.split(";base64,").pop() ?? "";
  let fileExt = (_a = base64GetExtRegex.exec(base64)) == null ? void 0 : _a[1];
  return [
    base64Data,
    `${baseName}.${fileExt}`,
    `${baseName}-preview.${fileExt}`,
    `${baseName}-thumbnail.${fileExt}`,
    fileExt ?? "jpg"
  ];
}
async function saveImage(base64, entryId) {
  console.log("Saving image for entry", entryId);
  let [base64Data, fileName, previewFileName, thumbnailFileName, ext] = getFileInfos(base64, entryId);
  if (base64Data && fileName) {
    let fullPath = import_path.default.join(imagePath, fileName);
    let fullPreviewPath = import_path.default.join(imagePath, previewFileName);
    let fullThumbailPath = import_path.default.join(imagePath, thumbnailFileName);
    await import_promises.default.writeFile(fullPath, base64Data, {
      encoding: "base64"
    });
    console.debug("Temporary file has been created here ", fullPath);
    await Promise.all([
      (0, import_sharp.default)(fullPath).resize(1280).toFile(fullPreviewPath),
      (0, import_sharp.default)(fullPath).resize(500).toFile(fullThumbailPath)
    ]);
    console.debug("The two versions of the files has been created");
    await Promise.all([
      pictures.upload(fileName, await import_promises.default.readFile(fullPath), {
        contentType: `image/${ext}`
      }),
      pictures.upload(previewFileName, await import_promises.default.readFile(fullPreviewPath), {
        contentType: `image/${ext}`
      }),
      pictures.upload(thumbnailFileName, await import_promises.default.readFile(fullThumbailPath), {
        contentType: `image/${ext}`
      })
    ]);
    console.debug("All 3 versions of the file has been uploaded");
    return db.picture.create({
      data: {
        file: fileName,
        preview: previewFileName,
        thumbnail: thumbnailFileName,
        entryId
      }
    });
  }
  throw new Error("Unable to save the picture");
}

// app/utils/string.utils.ts
function slugify(text) {
  return text.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
}

// app/features/entries/api/update.server.ts
var formValidator3 = import_zod4.z.object({
  title: import_zod4.z.string().nonempty({ message: "The title is required" }),
  originalSlug: import_zod4.z.string().optional(),
  content: import_zod4.z.string().optional().default(""),
  mainPicture: import_zod4.z.literal("").or(import_zod4.z.string().regex(base64ImageValidTypeRegex, {
    message: "Not a valid image format"
  }))
});
async function getUniqueSlug(title) {
  let originalSlug = slugify(title);
  let entriesExistingWithSlug = await db.entry.count({
    where: {
      slug: {
        startsWith: originalSlug
      }
    }
  });
  let result = originalSlug;
  if (entriesExistingWithSlug > 0) {
    result = `${originalSlug}-${entriesExistingWithSlug + 1}`;
    console.log(`Slug was going to be "${originalSlug}" but is instead "${result}"`);
  }
  return result;
}
var baseUpdateAction = async (request, action9) => {
  let userId = await requireUserId(request);
  console.debug("Parsing form data");
  let formData = new URLSearchParams(await request.text());
  console.debug("Parsed form data : ", formData.keys());
  let parsedForm = formValidator3.safeParse(Object.fromEntries(formData.entries()));
  if (!parsedForm.success) {
    return parsedForm.error.format();
  }
  try {
    let slug = await action9(__spreadProps(__spreadValues({}, parsedForm.data), { userId }));
    return (0, import_remix11.redirect)(`/app/entries/${slug}`);
  } catch {
    return null;
  }
};
var createAction = async ({ request }) => {
  console.log("Request to create entry");
  return baseUpdateAction(request, async (form) => {
    let data = {
      title: form.title,
      content: form.content,
      slug: await getUniqueSlug(form.title),
      user: {
        connect: {
          id: form.userId
        }
      },
      likedBy: {
        connect: {
          id: form.userId
        }
      },
      watchedBy: {
        connect: {
          id: form.userId
        }
      }
    };
    let createdEntry = await db.entry.create({ data });
    if (form.mainPicture) {
      saveImage(form.mainPicture, createdEntry.id).then(() => console.log("File has been saved"));
    }
    return createdEntry.slug;
  });
};
var updateAction = async ({ request }) => {
  console.log("Request to update entry");
  return baseUpdateAction(request, async (form) => {
    if (!form.originalSlug) {
      throw Error("Cannot update entry without its original slug");
    }
    let data = {
      title: form.title,
      content: form.content,
      slug: await getUniqueSlug(form.title),
      userId: form.userId
    };
    let updatedEntry = await db.entry.update({
      data,
      where: {
        slug: form.originalSlug
      }
    });
    if (form.mainPicture) {
      await saveImage(form.mainPicture, updatedEntry.id);
    }
    return updatedEntry.slug;
  });
};

// app/features/entries/components/entry-form.tsx
var import_react3 = __toModule(require("react"));
var import_react_loading2 = __toModule(require("react-loading"));
var import_remix12 = __toModule(require("remix"));

// app/components/form-field.tsx
function FormField({ label, error, children }) {
  return /* @__PURE__ */ React.createElement("label", {
    className: "form-field"
  }, label && /* @__PURE__ */ React.createElement("span", null, label), children, /* @__PURE__ */ React.createElement(ErrorMessage, {
    error,
    className: "ml-2"
  }));
}

// app/features/entries/components/image-selector.tsx
var import_react2 = __toModule(require("react"));
var import_fi3 = __toModule(require("react-icons/fi"));
var import_react_loading = __toModule(require("react-loading"));
async function getCanvasImageSizeInBytes(canvas) {
  return new Promise((r) => {
    canvas.toBlob((b) => r((b == null ? void 0 : b.size) ?? 0));
  });
}
function loadImageToCanvas(canvas, image, width = image.width, height = image.height) {
  var _a;
  canvas.width = width;
  canvas.height = height;
  (_a = canvas.getContext("2d")) == null ? void 0 : _a.drawImage(image, 0, 0, width, height);
}
function getCappedDimensions(capSize, width, height) {
  let newWidth = width;
  let newHeight = height;
  if (width > capSize || capSize && height) {
    if (width > height) {
      newHeight = height * (capSize / width);
      newWidth = capSize;
    } else {
      newWidth = width * (capSize / height);
      newHeight = capSize;
    }
  }
  return [newWidth, newHeight];
}
async function getBase64FromFile(file, canvas) {
  return new Promise(async (resolve, reject) => {
    let image = new Image();
    image.src = URL.createObjectURL(file);
    image.onload = async () => {
      loadImageToCanvas(canvas, image);
      let imageSizeInBytes = await getCanvasImageSizeInBytes(canvas);
      let [width, height] = [image.width, image.height];
      while (imageSizeInBytes >= 3e6) {
        ;
        [width, height] = getCappedDimensions(width * 0.8, image.width, image.height);
        console.log("Image too big (", imageSizeInBytes, "B), trying with a smaller version (", width, "x", height, ")");
        loadImageToCanvas(canvas, image, width, height);
        imageSizeInBytes = await getCanvasImageSizeInBytes(canvas);
      }
      resolve(canvas.toDataURL(file.type));
    };
    image.onerror = reject;
  });
}
function ImageSelector({
  onImageLoaded,
  onImageLoading,
  loadedImage
}) {
  const [imageIsProcessing, setImageIsProcessing] = (0, import_react2.useState)(false);
  const canvasRef = (0, import_react2.useRef)(null);
  const imageInputRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    onImageLoading(imageIsProcessing);
  }, [imageIsProcessing]);
  async function dataToByteArray(files) {
    if (!canvasRef.current) {
      return;
    }
    if (files == null ? void 0 : files[0]) {
      setImageIsProcessing(true);
      let b64 = await getBase64FromFile(files[0], canvasRef.current);
      onImageLoaded({
        b64,
        name: files[0].name
      });
      setImageIsProcessing(false);
    } else {
      canvasRef.current.width = 0;
      canvasRef.current.height = 0;
      onImageLoaded(void 0);
    }
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("canvas", {
    className: `w-full mb-5 ${loadedImage && !imageIsProcessing ? "" : "hidden"}`,
    ref: canvasRef
  }), /* @__PURE__ */ React.createElement("input", {
    ref: imageInputRef,
    hidden: true,
    type: "file",
    accept: "image/*",
    onChange: (e) => dataToByteArray(e.target.files)
  }), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "sheika button flex justify-center mb-5",
    onClick: () => {
      var _a;
      return (_a = imageInputRef.current) == null ? void 0 : _a.click();
    }
  }, imageIsProcessing ? /* @__PURE__ */ React.createElement(import_react_loading.default, {
    type: "spinningBubbles",
    className: "mr-3",
    color: "var(--primary-500)",
    height: "1.5rem",
    width: "1.5rem"
  }) : /* @__PURE__ */ React.createElement(import_fi3.FiImage, {
    size: "1.5rem",
    className: "mr-3"
  }), (loadedImage == null ? void 0 : loadedImage.name) ?? "Change picture"));
}

// app/features/entries/components/entry-form.tsx
function EntryForm({
  errors,
  transition,
  submitLabel,
  action: action9,
  defaultValues,
  ButtonsSlot
}) {
  const [mainPicture, setMainPicture] = (0, import_react3.useState)(void 0);
  const [imageIsLoading, setImageIsLoading] = (0, import_react3.useState)(true);
  return /* @__PURE__ */ React.createElement("div", {
    className: "mt-16 px-3 md:mx-auto w-full md:w-3/4 lg:w-1/2"
  }, /* @__PURE__ */ React.createElement(import_remix12.Form, {
    method: "post",
    action: action9
  }, /* @__PURE__ */ React.createElement("div", {
    className: "-mx-3"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "originalSlug",
    readOnly: true,
    value: defaultValues == null ? void 0 : defaultValues.slug
  }), /* @__PURE__ */ React.createElement(FormField, {
    error: errors == null ? void 0 : errors.mainPicture
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "mainPicture",
    readOnly: true,
    value: mainPicture == null ? void 0 : mainPicture.b64
  }), /* @__PURE__ */ React.createElement(ImageSelector, {
    loadedImage: mainPicture,
    onImageLoaded: setMainPicture,
    onImageLoading: setImageIsLoading
  })), /* @__PURE__ */ React.createElement(FormField, {
    label: "Title",
    error: errors == null ? void 0 : errors.title
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title",
    defaultValue: defaultValues == null ? void 0 : defaultValues.title
  })), /* @__PURE__ */ React.createElement(FormField, {
    label: "Content",
    error: errors == null ? void 0 : errors.content
  }, /* @__PURE__ */ React.createElement("textarea", {
    name: "content",
    defaultValue: defaultValues == null ? void 0 : defaultValues.content,
    rows: 8
  }))), /* @__PURE__ */ React.createElement("div", {
    role: "separator"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-end"
  }, ButtonsSlot ? /* @__PURE__ */ React.createElement(ButtonsSlot, null) : null, /* @__PURE__ */ React.createElement("button", {
    className: "sheika button",
    type: "submit",
    disabled: !!transition.submission || imageIsLoading
  }, transition.submission ? /* @__PURE__ */ React.createElement("div", {
    className: "flex space-x-3"
  }, /* @__PURE__ */ React.createElement(import_react_loading2.default, {
    type: "spinningBubbles",
    color: "var(--primary-500)",
    height: "1.5rem",
    width: "1.5rem"
  }), /* @__PURE__ */ React.createElement("span", null, submitLabel.sending)) : submitLabel.default))));
}

// app/features/entries/types/entry-in-update.ts
var import_client3 = __toModule(require("@prisma/client"));
function getPrismaSelectEntryInUpdate() {
  return import_client3.Prisma.validator()({
    slug: true,
    title: true,
    content: true
  });
}

// app/styles/forms.css
var forms_default = "/build/_assets/forms-BIZUAK6A.css";

// route-module:/Users/Quentin/Documents/Projects/Web/Remix/sheikah-diary/app/routes/app/entries/$slug/update.tsx
var links4 = () => [
  { rel: "stylesheet", href: forms_default }
];
var loader3 = async ({ params }) => {
  let slug = import_zod5.z.string().parse(params == null ? void 0 : params.slug);
  let entry2 = await db.entry.findFirst({
    select: getPrismaSelectEntryInUpdate(),
    where: {
      slug
    }
  });
  if (!entry2) {
    return (0, import_remix13.redirect)("/app/entries");
  }
  return (0, import_superjson.serialize)(entry2);
};
var action4 = updateAction;
function EntryUpdateBySlug() {
  let defaultValues = (0, import_superjson.deserialize)((0, import_remix13.useLoaderData)());
  let transition = (0, import_remix13.useTransition)();
  return /* @__PURE__ */ React.createElement(EntryForm, {
    transition,
    submitLabel: { default: "Update entry", sending: "Updating entry" },
    defaultValues,
    action: "/app/entries/" + defaultValues.slug + "/update",
    ButtonsSlot: () => /* @__PURE__ */ React.createElement(import_remix13.Link, {
      className: "sheika button mr-3",
      to: "/app/entries/" + defaultValues.slug
    }, "Cancel")
  });
}

// route-module:/Users/Quentin/Documents/Projects/Web/Remix/sheikah-diary/app/routes/app/entries/$slug/index.tsx
var slug_exports = {};
__export(slug_exports, {
  action: () => action5,
  default: () => EntriesByIdPage,
  links: () => links5,
  loader: () => loader4,
  meta: () => meta4,
  unstable_shouldReload: () => unstable_shouldReload
});
var import_react8 = __toModule(require("react"));
var import_fi4 = __toModule(require("react-icons/fi"));
var import_remix19 = __toModule(require("remix"));
var import_superjson2 = __toModule(require("superjson"));
var import_zod8 = __toModule(require("zod"));

// app/features/entries/api/delete.server.ts
var import_remix14 = __toModule(require("remix"));
var import_zod6 = __toModule(require("zod"));
var formValidator4 = import_zod6.z.object({
  id: import_zod6.z.string().uuid().nonempty()
});
var deleteAction = async ({ request }) => {
  if (request.method != "DELETE") {
    return null;
  }
  let form = await parseFormData(request, formValidator4);
  console.log("Request to delete entry", form.id);
  let linkedPictures = await db.picture.findMany({
    where: {
      entryId: form.id
    }
  });
  pictures.remove(linkedPictures.flatMap((pic) => [pic.file, pic.preview, pic.thumbnail]));
  await db.picture.deleteMany({
    where: {
      entryId: form.id
    }
  });
  await db.entry.delete({
    where: {
      id: form.id
    }
  });
  return (0, import_remix14.redirect)("/app/entries");
};

// app/features/entries/components/comment-text-area.tsx
var import_react4 = __toModule(require("react"));
var import_remix15 = __toModule(require("remix"));
var import_react_loading3 = __toModule(require("react-loading"));
function CommentTextArea({ slug }) {
  var _a, _b;
  const fetcher = (0, import_remix15.useFetcher)();
  const textAreaRef = (0, import_react4.useRef)(null);
  (0, import_react4.useEffect)(() => {
    if (fetcher.state == "idle" && textAreaRef.current) {
      textAreaRef.current.value = "";
    }
  }, [fetcher.state]);
  return /* @__PURE__ */ React.createElement(fetcher.Form, {
    method: "post",
    action: `/app/entries/${slug}/create-comment`
  }, /* @__PURE__ */ React.createElement(FormField, {
    label: "Add a comment"
  }, /* @__PURE__ */ React.createElement("textarea", {
    ref: textAreaRef,
    name: "body",
    rows: 5
  })), /* @__PURE__ */ React.createElement("span", {
    className: "text-danger-500 ml-5"
  }, ((_a = fetcher.data) == null ? void 0 : _a.body) ? (_b = fetcher.data.body) == null ? void 0 : _b._errors : null), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "sheika button float-right flex mr-3 space-x-3"
  }, fetcher.submission ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react_loading3.default, {
    type: "spinningBubbles",
    color: "var(--primary-500)",
    height: "1.5rem",
    width: "1.5rem"
  }), " ", /* @__PURE__ */ React.createElement("span", null, "Sending...")) : "Send your comment"));
}

// app/utils/date.utils.ts
var import_zod7 = __toModule(require("zod"));
function displayDate(date) {
  let d = import_zod7.z.date().parse(date);
  return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
}
function displayTime(date, displaySeconds = false) {
  let d = import_zod7.z.date().parse(date);
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}` + (displaySeconds ? `:${d.getSeconds()}` : "");
}
function displayDateTime(date, displaySeconds = false) {
  let d = import_zod7.z.date().parse(date);
  return `${displayDate(d)} at ${displayTime(d, displaySeconds)}`;
}

// app/features/entries/components/comments.tsx
function Comments({ entry: entry2 }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("ul", {
    className: "mb-5"
  }, entry2.comments.map((comment) => {
    var _a;
    return /* @__PURE__ */ React.createElement("li", {
      className: "p-5",
      key: comment.id
    }, /* @__PURE__ */ React.createElement("strong", null, (_a = comment.user) == null ? void 0 : _a.username, /* @__PURE__ */ React.createElement("span", {
      className: "text-sm"
    }, comment.createdAt ? ` (${displayDateTime(comment.createdAt)})` : null)), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", {
      className: "mt-2 ml-5"
    }, comment.body));
  })));
}

// app/features/entries/components/entry-delete-modal.tsx
var import_react5 = __toModule(require("react"));
var import_remix16 = __toModule(require("remix"));
var import_react_loading4 = __toModule(require("react-loading"));
function EntryDeleteModal({
  entryId,
  show = false,
  transition,
  onCancel,
  onDelete
}) {
  const [opacity, setOpacity] = (0, import_react5.useState)(show ? "opacity-100" : "opacity-0");
  const [display, setDisplay] = (0, import_react5.useState)(show ? "flex" : "hidden");
  (0, import_react5.useEffect)(() => {
    if (show) {
      setDisplay("flex");
      setTimeout(() => setOpacity("opacity-100"));
    } else {
      setOpacity("opacity-0");
      setTimeout(() => setDisplay("hidden"), 200);
    }
  }, [show]);
  return /* @__PURE__ */ React.createElement("div", {
    onClick: () => onCancel == null ? void 0 : onCancel(),
    className: `backdrop absolute bg-black bg-opacity-30 top-0 left-0 w-full h-full transition-opacity ${display} ${opacity}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mt-auto mb-20 mx-5 md:mx-auto w-full flex flex-wrap-reverse justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full md:w-1/2 h-36 bg-black bg-opacity-60 text-white rounded-full px-12 flex justify-center items-center font-bold text-xl"
  }, /* @__PURE__ */ React.createElement("span", null, "Are you sure you want to delete this entry ? ", /* @__PURE__ */ React.createElement("br", null), "This is ", /* @__PURE__ */ React.createElement("em", null, " permanent !"))), /* @__PURE__ */ React.createElement("aside", {
    className: "w-44 ml-auto mb-5 md:ml-5 md:my-auto space-y-5"
  }, /* @__PURE__ */ React.createElement(import_remix16.Form, {
    method: "delete"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "id",
    value: entryId,
    readOnly: true
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    onClick: (e) => {
      e.stopPropagation();
      onDelete == null ? void 0 : onDelete();
    },
    className: "w-full h-16 bg-black bg-opacity-60 text-white rounded-full flex justify-center items-center font-bold text-xl"
  }, transition.submission ? /* @__PURE__ */ React.createElement(import_react_loading4.default, {
    type: "spinningBubbles",
    color: "white",
    height: "1.5rem",
    width: "1.5rem"
  }) : "Delete.")), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: (e) => {
      e.stopPropagation();
      onCancel == null ? void 0 : onCancel();
    },
    className: "w-full h-16 bg-black bg-opacity-60 text-white rounded-full flex justify-center items-center font-bold text-xl"
  }, "Don't delete."))));
}

// app/features/entries/components/heart-button.tsx
var import_react6 = __toModule(require("react"));
var import_remix17 = __toModule(require("remix"));

// app/components/heart-icon.tsx
function HeartIcon({
  className = "w-full h-full"
}) {
  return /* @__PURE__ */ React.createElement("svg", {
    className,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 78.76"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M93.86,49A21,21,0,1,0,64.12,19.26L50,33.38,79.75,63.13Z",
    transform: "translate(0 -13.13)",
    fill: "currentColor"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M35.88,19.26a21.09,21.09,0,0,0-29.74,0h0A21.08,21.08,0,0,0,6.14,49L20.25,63.13,50,33.38Z",
    transform: "translate(0 -13.13)",
    fill: "currentColor"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M50,33.38,16.68,59.55,48.32,91.19a2.37,2.37,0,0,0,3.36,0L82.45,60.42Z",
    transform: "translate(0 -13.13)",
    fill: "currentColor"
  }));
}

// app/features/entries/components/heart-button.tsx
function HeartButton({
  slug,
  originalUserHasLiked,
  originalLikes,
  readonly = true
}) {
  let fetcher = (0, import_remix17.useFetcher)();
  const [userHasLiked, setUserHasLiked] = (0, import_react6.useState)(originalUserHasLiked);
  const [likes, setLikes] = (0, import_react6.useState)(originalUserHasLiked ? originalLikes + 1 : originalLikes);
  (0, import_react6.useEffect)(() => {
    setLikes(userHasLiked ? originalLikes + 1 : originalLikes);
  }, [userHasLiked]);
  (0, import_react6.useEffect)(() => {
    if (userHasLiked != void 0 && fetcher.data && userHasLiked != fetcher.data) {
      setUserHasLiked(fetcher.data);
    }
  }, [fetcher.data]);
  (0, import_react6.useEffect)(() => {
    if (userHasLiked != void 0 && fetcher.state == "submitting") {
      setUserHasLiked(!userHasLiked);
    }
  }, [fetcher.state]);
  if (readonly) {
    return /* @__PURE__ */ React.createElement("div", {
      className: "flex flex-col items-center"
    }, /* @__PURE__ */ React.createElement(HeartIcon, {
      className: "w-10 h-10 filter text-danger-500 drop-shadow-danger"
    }), /* @__PURE__ */ React.createElement("span", {
      className: "text-lg"
    }, likes));
  } else {
    return /* @__PURE__ */ React.createElement(fetcher.Form, {
      method: "put",
      action: `/app/entries/${slug}/like`
    }, /* @__PURE__ */ React.createElement("input", {
      type: "hidden",
      name: "alreadyLiked",
      readOnly: true,
      value: userHasLiked ? "true" : "false"
    }), /* @__PURE__ */ React.createElement("div", {
      className: "flex flex-col items-center"
    }, /* @__PURE__ */ React.createElement("button", {
      type: "submit"
    }, /* @__PURE__ */ React.createElement(HeartIcon, {
      className: `w-10 h-10 filter ${userHasLiked ? "text-danger-500 drop-shadow-danger hover:text-danger-300" : "text-black drop-shadow-primary hover:text-danger-900"}`
    })), /* @__PURE__ */ React.createElement("span", {
      className: "text-lg"
    }, likes)));
  }
}

// app/features/entries/components/image-display.tsx
var import_react7 = __toModule(require("react"));

// app/components/sheika-logo.tsx
function SheikahLogo({
  className = "w-full h-full"
}) {
  return /* @__PURE__ */ React.createElement("svg", {
    className,
    width: "1706.7",
    height: "1706.7",
    enableBackground: "new 0 0 1842.5 1842.5",
    version: "1.1",
    viewBox: "0 0 1706.7 1706.7",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("g", {
    transform: "translate(-89.328 -54.679)"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m993.49 675.2c-2.228-0.27005-4.726-0.54011-7.1565-0.94519-9.2494-1.5528-18.566-2.5655-27.951-3.1731-10.667-0.67514-21.334-0.54011-32.001 0.27005-7.5615 0.54011-15.056 1.5528-22.482 2.8356-2.4305 0.40508-4.861 0.87768-7.359 0.87768-4.726 0-6.2112-1.6203-5.8062-6.3463 0.20254-2.498 0.94519-4.861 1.6203-7.224 3.9158-13.368 8.4392-26.465 14.448-39.09 2.9031-6.1437 5.4686-12.422 8.2367-18.634 4.3884-9.992 9.4519-19.646 14.515-29.233 2.9706-5.6036 5.9412-11.275 9.3169-16.608 0.87767-1.3503 1.7554-2.7005 2.9706-3.7808 2.2955-2.0254 4.5909-2.0929 6.9539-0.13503 0.81016 0.67513 1.5528 1.4853 2.2279 2.2955 4.6584 5.8062 8.5742 12.22 11.612 18.971 4.6584 10.33 8.7092 20.929 12.49 31.529 6.6838 18.701 14.38 36.997 22.279 55.159 1.0802 2.498 1.9579 4.996 2.633 7.629 0.2026 0.74265 0.2701 1.4853 0.3376 2.228 0.067 1.3503-0.60763 2.2279-1.8904 2.7005-0.40508 0.13502-0.81016 0.33756-1.2152 0.40508-1.1477 0.13503-2.2955 0.13503-3.7808 0.27005zm170.94-49.285c-0.2026-3.7132-1.8904-4.9285-5.5361-4.3209-1.1478 0.20254-2.2955 0.54011-3.4432 0.87768-10.06 2.8356-19.444 7.1564-28.221 12.693-12.152 7.629-24.17 15.461-36.187 23.292-8.3042 5.4011-16.541 10.937-24.845 16.406-2.633 1.7554-4.996 3.7808-6.7514 6.4138-1.8903 2.8356-1.8903 4.6584 0.3376 7.2915 2.0929 2.5655 4.7935 4.2534 7.8991 5.4011 3.8483 1.3503 7.6965 2.768 11.477 4.3209 15.866 6.5488 30.314 15.528 43.614 26.33 4.0509 3.2406 7.8991 6.7514 11.815 10.127 1.7554 1.4853 3.4432 2.9031 5.5361 3.9158 3.7808 1.8904 6.3463 1.0127 8.2367-2.768 0.9452-1.8904 1.4853-3.8483 1.7553-5.8737 1.1478-7.1564 2.228-14.313 3.2407-21.469 1.2152-8.5742 2.498-17.081 4.2533-25.52 1.8229-8.6417 3.3082-17.351 4.3209-26.195 0.6076-5.2661 1.1477-10.532 1.6203-15.798 0.4051-4.0508 0.6076-8.1691 0.8777-12.017 0-1.2152 0.067-2.1604 0-3.1056zm-431.07 66.771v14.583c-0.0675 13.84-0.13503 27.613-0.20254 41.453 0 1.4178 0.0675 2.8356 0.13503 4.1858 0.0675 0.74265 0.20254 1.4853 0.47259 2.2279 0.54011 1.4853 1.4853 2.0929 3.0381 1.8229 0.81016-0.13503 1.6878-0.40508 2.4305-0.74265 1.8904-0.87768 3.5107-2.0929 4.996-3.5107 7.0889-6.4813 14.313-12.828 21.739-18.971 12.963-10.735 27.005-19.646 42.466-26.33 3.4432-1.4853 6.8864-3.0381 10.397-4.5234 3.5782-1.5528 7.0214-3.3082 10.397-5.1985 0.5401-0.33757 1.1477-0.67513 1.6203-1.0802 1.2152-1.0127 1.3503-2.0929 0.60762-3.4432-0.74265-1.2152-1.8229-2.0929-2.9706-2.9031-8.6417-6.4138-17.351-12.828-25.993-19.241-3.8483-2.8356-7.764-5.4686-11.41-8.5067-14.515-12.22-30.381-22.347-46.989-31.461-1.8904-1.0127-3.8483-1.9579-5.8737-2.7005-2.2955-0.87768-4.0508 0.13502-4.6584 2.498-0.20254 0.81016-0.27005 1.6878-0.27005 2.5655-0.81017 15.731-0.67514 31.529-0.13503 47.259l0.40508 11.95c-0.13503 0.0675-0.13503 0.0675-0.20254 0.0675zm164.87 521.47c0.40509 5.4011 0.94519 10.735 2.363 16.001 3.5107 12.558 9.7895 23.427 19.646 32.136 4.3209 3.7807 9.1818 6.8189 14.65 8.7768 4.3884 1.5528 8.9793 2.4304 13.638 2.0929 6.4813-0.4726 12.422-2.6331 17.824-6.1438 5.0635-3.2406 9.3169-7.3589 12.963-12.085 5.4686-7.0889 9.3169-14.988 11.95-23.495 1.9579-6.2788 2.9706-12.828 4.0508-19.309 2.0254-12.152 2.228-24.305 0.94519-36.457-1.0802-10.127-2.9706-20.052-5.2661-29.976-4.861-20.659-9.9245-41.318-14.313-62.112-1.4178-6.6839-2.9031-13.3-4.0508-19.984-1.3503-7.9666-2.363-16.001-3.3757-24.035-1.0802-8.6417-2.0929-17.351-3.0381-26.06-0.40508-3.9833-0.60762-7.9666-0.87768-11.95-0.13502-1.6203 0.0675-3.2407 0.54011-4.7935 0.4726-1.5528 1.3503-2.7005 2.9031-3.3081 1.2828-0.4726 2.633-0.8777 4.0508-1.2153l27.546-5.8736c19.916-4.3884 39.023-10.87 57.319-19.849 30.854-15.056 57.049-35.985 79.396-61.842 11.342-13.098 21.334-27.14 30.381-41.926 0.8777-1.3503 1.6203-2.7681 2.8356-3.9158 2.7005-2.5655 5.8061-3.5107 9.5194-2.2955 6.2112 2.0254 12.49 2.1605 18.904 0.9452 17.756-3.3082 32.136-16.473 36.93-33.824 2.498-8.9118 2.3629-17.891 0.27-26.87-1.0127-4.2533-2.5655-8.2366-4.7934-11.95-1.8904-3.1731-4.2534-6.0087-7.224-8.2366-1.8228-1.3503-3.8483-2.4305-6.0087-3.1056-0.8777-0.27006-1.4853 0.20254-1.3503 1.1477 0.1351 1.4178 0.3376 2.768 0.5402 4.1858 0.8101 5.6711 0.9451 11.41 0.27 17.148-0.4726 3.7807-1.4178 7.4265-3.1056 10.87-3.3082 6.8188-8.6418 11.207-16.001 13.098-5.3336 1.4178-10.667 1.2827-16.068 0.27-7.1565-1.3502-13.908-3.9157-20.187-7.6965-5.6711-3.3757-10.937-7.2915-16.068-11.41-6.3463-5.0635-12.625-10.127-19.106-15.056-18.094-13.908-37.132-26.398-57.522-36.66-18.431-9.2494-37.268-17.554-56.981-23.832-18.161-5.7386-36.727-9.5194-55.834-10.532-11.882-0.67513-23.765-0.20254-35.58 1.2828-11.882 1.4853-23.63 3.9158-35.175 7.224-46.044 13.368-87.565 35.107-124.22 66.096-8.6417 7.359-17.756 14.11-27.478 19.984-5.266 3.1731-10.802 5.8737-16.676 7.8316-6.8189 2.2954-13.773 3.5782-20.997 2.363-9.3169-1.5529-15.798-6.5489-19.174-15.393-1.5528-3.9833-2.1604-8.1017-2.2955-12.355-0.20254-5.4011 0.54011-10.802 1.4853-16.068 0.0675-0.54011 0.20254-1.0802 0.27006-1.6203 0.0675-0.67513-0.74265-1.2152-1.3503-1.0127-0.33756 0.13503-0.60762 0.20254-0.87767 0.40508-11.275 6.0087-17.959 15.258-19.646 27.951-0.94519 6.8189-0.27006 13.57 1.0802 20.254 0.67514 3.5107 1.4853 6.9539 3.1731 10.194 2.363 4.591 5.3336 8.6418 9.1818 12.017 8.7092 7.7641 18.971 11.747 30.584 12.558 5.5361 0.405 11.005 0.068 16.338-1.5528 2.4305-0.7427 4.1858 0 5.7386 1.6878 0.74265 0.8102 1.4178 1.6878 1.9579 2.5655 1.0802 1.6203 2.0929 3.2407 3.1056 4.9285 3.9833 6.8189 8.0341 13.57 12.355 20.119 11.68 17.689 25.453 33.554 41.386 47.462 8.8443 7.7641 18.499 14.516 28.221 21.199 7.0889 4.9285 14.583 9.2493 22.347 13.03 15.326 7.494 31.326 13.3 47.732 18.161 12.76 3.7133 25.588 7.0215 38.753 8.7768 1.8904 0.2701 3.8483 0.4726 5.7386 0.8102 4.1183 0.6751 5.9412 2.1604 5.4011 7.3589-1.1477 10.6-1.9579 21.267-2.9031 31.934-0.40509 4.726-0.81017 9.4519-1.4178 14.178-1.1477 9.3169-2.498 18.634-4.3209 27.816-1.7554 9.1143-3.4432 18.229-5.6036 27.275-4.0508 17.081-8.1691 34.162-12.355 51.243-3.0381 12.422-4.6584 25.048-4.5909 37.335 0.4726 8.0341 0.94519 15.528 1.5528 23.09zm154-384.35c-0.068-3.3082-0.6751-6.1438-1.4853-8.9793-1.2828-4.3884-2.9031-8.5743-5.0635-12.625-3.9158-7.3589-8.3042-14.38-13.435-20.929-8.2367-10.532-18.161-19.039-30.044-25.183-4.861-2.498-9.9246-4.7935-14.853-7.1564-0.67514-0.33756-1.3503-0.60762-2.0254-1.0127-0.20254-0.13503-0.33757-0.60762-0.27005-0.81016 0.0675-0.27006 0.40508-0.54011 0.67513-0.60762 0.60762-0.27006 1.2828 0 1.8904 0.13502 13.773 2.5655 26.87 7.0889 39.563 13.03 12.558 5.8737 24.372 12.963 35.782 20.794 12.22 8.3716 24.035 17.283 35.985 25.925 6.5488 4.7259 13.165 9.3843 19.849 13.975 8.3042 5.6711 16.811 10.937 25.79 15.528 2.633 1.3503 2.7681 1.8904 1.6879 4.5909-0.3376 0.8102-0.6752 1.5528-1.1478 2.363-6.4138 11.68-13.233 23.022-21.132 33.689-8.9118 12.085-19.241 22.752-31.056 32.002-5.8737 4.5909-11.747 9.1818-17.756 13.503-6.3463 4.5234-13.098 8.3042-19.916 12.152-19.444 10.87-40.103 18.431-61.91 23.09-0.40508 0.067-0.8777 0.135-1.2828 0.135-0.13502 0-0.33756-0.27-0.40508-0.405-0.0675-0.1351 0-0.4726 0.13503-0.5401 0.40508-0.3376 0.8777-0.6077 1.3503-0.8777 1.7554-0.8777 3.5107-1.6879 5.1985-2.5655 6.0762-3.1057 11.95-6.4138 17.621-10.262 7.7641-5.2661 14.448-11.68 19.849-19.309 1.8904-2.633 3.7132-5.3335 5.4686-8.0341 4.5234-6.9539 7.2915-14.65 8.9118-22.752 0.4051-2.0929 0.8101-4.2534 1.1477-6.3463 0.135-0.7427 0.2026-1.4853 0.2026-2.2279 0-2.228-1.0127-3.6458-2.9706-4.0509-2.228-0.4726-4.2534 0.4051-5.1311 2.363-0.4051 0.8777-0.6076 1.8229-0.8101 2.7681-1.3503 6.9539-4.1184 13.368-7.8316 19.376-3.3082 5.4686-7.2915 10.465-11.747 15.056-11.14 11.545-23.832 20.929-38.415 27.68-5.6711 2.633-11.41 5.131-17.554 6.4813-7.8316 1.7554-15.798 2.2955-23.832 1.7554-6.8864-0.4726-13.773-1.2828-20.457-3.0381-23.495-6.0763-43.344-17.891-58.534-37.065-5.7386-7.2239-10.127-15.258-13.233-23.967-1.0127-2.8355-2.0929-5.6711-3.5107-8.3717-0.60763-1.0802-1.3503-1.9578-2.633-2.0929-1.7554-0.2025-3.1731 0.6076-3.9158 2.228-0.60762 1.2827-0.74265 2.7005-0.54011 4.1183 1.0127 7.5615 2.9031 14.853 6.4138 21.604 4.7935 9.2494 11.005 17.554 17.959 25.25 3.5107 3.8482 7.629 7.0214 11.882 9.9245 5.9412 3.9833 12.22 7.359 18.431 10.735 1.1477 0.6077 2.7681 0.6752 3.0381 2.4305-1.2828 0.6752-2.498 0.067-3.7132-0.135-12.152-2.1604-24.035-5.2661-35.512-9.7895-7.4265-2.9031-14.583-6.4813-21.267-10.87-6.8864-4.4559-13.84-8.8442-20.659-13.368-3.5782-2.363-7.0889-4.861-10.6-7.4265-10.6-7.629-19.916-16.608-27.816-26.938-6.8189-8.9118-13.503-17.959-20.119-27.005-2.8356-3.8483-5.1986-7.8991-7.359-12.152-0.87768-1.7553-1.4178-3.5782-1.8904-5.4686-0.47259-1.8903-0.0675-3.6457 1.0802-5.1985 0.87767-1.0802 1.8229-2.1604 2.8356-3.1056 31.866-29.706 66.636-55.159 106.4-73.522 11.207-5.131 22.617-9.6544 34.499-12.895 2.1604-0.60762 4.3884-1.0802 6.6163-1.4853 0.81016-0.20254 1.6878-0.20254 2.5655-0.20254 0.40508 0 0.87767 0.0675 1.0127 0.54011 0.20254 0.60762-0.13503 1.0127-0.60762 1.3503-1.3503 0.94519-2.8356 1.5528-4.3209 2.228-17.148 7.0214-31.326 18.161-43.006 32.406-9.3169 11.275-15.258 24.237-18.364 38.483-0.60762 2.8356-1.0127 5.7387-0.87767 8.7093 0.13502 1.9579 0.87767 3.4432 2.7005 4.4559 1.7554 0.8777 3.2406 0.27 4.0508-1.3503 0.40508-0.8777 0.67514-1.8229 0.94519-2.768 1.8229-6.1438 3.9833-12.085 6.6163-17.891 5.4011-12.017 12.422-22.955 21.537-32.474 8.5742-8.9793 18.499-16.203 29.841-21.402 4.5909-2.1604 9.1818-4.3209 13.975-5.8737 5.3336-1.7554 10.87-2.7681 16.473-3.1056 4.9285-0.27005 9.9245-0.40508 14.92-0.13502 19.039 0.87767 36.39 6.6163 52.188 17.283 13.908 9.3844 24.98 21.537 33.757 35.782 3.9833 6.4138 7.4265 13.165 10.465 20.119 0.4051 1.0127 0.8777 1.9579 1.3503 2.9031 0.6076 1.1477 1.4853 1.8229 2.9031 1.6203 1.6878-0.2025 3.0381-1.2827 3.3082-2.7005 0.135-0.9452 0.135-1.6879 0.135-2.0929zm4.0508 30.044c-0.2701-3.2407-2.2955-6.0087-5.4011-6.8864-2.9031-0.8102-5.9412-0.5401-7.6965 3.3757-0.7427 1.5528-1.0802 3.3081-1.0802 4.996 0.135 4.4559 3.7132 8.7092 9.7894 7.494 1.6879-0.3376 2.8356-1.4178 3.6458-2.9706 0.6751-1.4178 0.8101-2.9031 0.8101-4.3884-0.068-0.5401-0.068-1.0802-0.068-1.6203zm-211.93 10.802c3.3082-1.2153 5.0635-5.0636 3.9833-8.5068-1.1477-3.5107-4.1858-5.401-8.0341-4.9284-3.6457 0.405-6.2788 3.2406-6.4138 6.9539-0.13503 4.6584 2.0254 7.1564 6.9539 7.2239 1.0802 0.135 2.2955-0.2701 3.5107-0.7426zm167.7-39.496c-10.397-25.723-29.368-40.643-56.981-44.356-8.3717-1.1477-16.811-0.67513-25.115 1.1477-18.026 3.8482-32.744 13.03-43.546 28.086-6.8189 9.4519-10.87 20.052-12.49 31.596-1.4178 10.06-1.0802 20.052 1.8229 29.841 5.7386 19.511 17.756 34.094 35.445 43.884 15.866 8.7768 32.947 11.207 50.77 8.0341 13.098-2.2954 24.642-7.8991 34.297-17.013 14.515-13.773 21.199-30.854 21.199-50.703 0.067-10.6-1.4853-20.794-5.4011-30.516zm-67.379 52.323c-3.1731-0.135-6.2788-0.5401-9.2494-1.6203-5.3336-1.8904-9.3844-5.2661-11.68-10.532-2.7005-6.0762-3.8483-12.422-2.0254-18.904 2.8356-9.992 9.722-15.731 19.781-17.824 3.3757-0.6751 6.8189-0.7426 10.33-0.135 7.359 1.2828 12.828 5.131 15.933 11.882 3.7132 7.9666 3.7808 16.203-0.33757 24.035-4.7935 9.1143-12.558 13.3-22.752 13.098z",
    fill: "currentColor",
    strokeWidth: ".67514"
  })));
}

// app/features/entries/components/image-display.tsx
function ImageDisplay({ pictures: pictures2 }) {
  if (!pictures2 || pictures2.length <= 0) {
    return /* @__PURE__ */ React.createElement(SheikahLogo, {
      className: "mx-auto w-full h-full border border-primary-500 text-primary-500"
    });
  }
  const [fullscreen, setFullscreen] = (0, import_react7.useState)(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", {
    onClick: () => setFullscreen(true)
  }, /* @__PURE__ */ React.createElement("img", {
    src: pictures2[0].preview,
    alt: "",
    className: "mx-auto w-full max-w-2xl h-full border border-primary-500 text-primary-500"
  })), fullscreen ? /* @__PURE__ */ React.createElement("div", {
    onClick: () => setFullscreen(false),
    className: "fixed z-20 top-0 left-0 w-screen h-screen bg-black bg-opacity-50 object-contain px-1 md:px-5 lg:px-10 xl:px-20"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-full bg-contain bg-no-repeat bg-center",
    style: {
      backgroundImage: `url(${pictures2[0].file})`
    }
  })) : null);
}

// app/features/entries/types/entry-in-page.ts
var import_client4 = __toModule(require("@prisma/client"));
function getPrismaSelectEntryInPage() {
  return import_client4.Prisma.validator()({
    id: true,
    slug: true,
    title: true,
    content: true,
    createdAt: true,
    user: {
      select: {
        id: true,
        username: true
      }
    },
    pictures: {
      select: {
        file: true,
        preview: true
      }
    },
    comments: {
      select: {
        id: true,
        body: true,
        user: true,
        createdAt: true
      },
      orderBy: {
        createdAt: "desc"
      }
    },
    likedBy: {
      select: {
        id: true
      }
    },
    _count: {
      select: {
        likedBy: true
      }
    }
  });
}

// app/hooks/useCurrentUser.ts
var import_remix18 = __toModule(require("remix"));
function useCurrentUser() {
  let matches = (0, import_remix18.useMatches)();
  let {
    data: { currentUser }
  } = matches.find((m) => "currentUser" in (m.data ?? {})) ?? {
    data: { currentUser: void 0 }
  };
  return currentUser;
}

// app/styles/entry.css
var entry_default = "/build/_assets/entry-5JEL3KWN.css";

// route-module:/Users/Quentin/Documents/Projects/Web/Remix/sheikah-diary/app/routes/app/entries/$slug/index.tsx
var links5 = () => [
  { rel: "stylesheet", href: entry_default },
  { rel: "stylesheet", href: forms_default }
];
var meta4 = ({ data }) => {
  let entry2 = (0, import_superjson2.deserialize)(data);
  return {
    title: `${entry2.title} | Sheikah Diary`
  };
};
var unstable_shouldReload = ({ submission }) => (submission == null ? void 0 : submission.method) != "PUT";
var loader4 = async ({ params, request }) => {
  let slug = import_zod8.z.string().parse(params == null ? void 0 : params.slug);
  let entry2 = await db.entry.findFirst({
    select: getPrismaSelectEntryInPage(),
    where: {
      slug
    }
  });
  if (entry2 == null) {
    return (0, import_remix19.redirect)("/app/entries");
  }
  let result = __spreadProps(__spreadValues({}, entry2), {
    pictures: await Promise.all(entry2.pictures.map(async (p) => ({
      file: await pictures.getPublicUrl(p.file).publicURL ?? "",
      preview: await pictures.getPublicUrl(p.preview).publicURL ?? "undefined"
    })))
  });
  return (0, import_superjson2.serialize)(result);
};
var action5 = deleteAction;
function EntriesByIdPage() {
  let {
    id,
    slug,
    title,
    content,
    createdAt,
    user,
    pictures: pictures2,
    comments,
    likedBy,
    _count: { likedBy: likedByCount }
  } = (0, import_superjson2.deserialize)((0, import_remix19.useLoaderData)());
  let currentUser = useCurrentUser();
  const [showDeleteModal, setShowDeleteModal] = (0, import_react8.useState)(false);
  const userHasLiked = currentUser ? likedBy.some((l) => l.id == (currentUser == null ? void 0 : currentUser.id)) : false;
  const likes = userHasLiked ? likedByCount - 1 || 0 : likedByCount;
  let transition = (0, import_remix19.useTransition)();
  return /* @__PURE__ */ React.createElement("article", null, pictures2.map((pic) => /* @__PURE__ */ React.createElement("link", {
    rel: "preload",
    as: "image",
    href: pic.file
  })), /* @__PURE__ */ React.createElement("div", {
    className: "column"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center space-x-1 mb-3"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "font-bold"
  }, title), /* @__PURE__ */ React.createElement("h2", null, "by", " ", /* @__PURE__ */ React.createElement(import_remix19.Link, {
    className: "underline underline-offset-2 hover:underline-offset-4",
    to: `/app/users/${user.username}`
  }, user.username))), /* @__PURE__ */ React.createElement(ImageDisplay, {
    pictures: pictures2
  }), /* @__PURE__ */ React.createElement("small", {
    className: "text-center opacity-70"
  }, displayDateTime(createdAt))), !content && (currentUser == null ? void 0 : currentUser.id) != user.id ? null : /* @__PURE__ */ React.createElement("section", {
    className: "flex flex-col mb-5"
  }, content ? /* @__PURE__ */ React.createElement("fieldset", {
    className: "mt-3 pb-10 mb-auto"
  }, /* @__PURE__ */ React.createElement("legend", null, "Description"), /* @__PURE__ */ React.createElement("p", null, content)) : null, !currentUser || (currentUser == null ? void 0 : currentUser.id) != user.id ? null : /* @__PURE__ */ React.createElement("fieldset", {
    className: "mt-3"
  }, /* @__PURE__ */ React.createElement("legend", null, "Actions"), /* @__PURE__ */ React.createElement("nav", {
    className: "mt-3 flex justify-center space-x-5"
  }, /* @__PURE__ */ React.createElement(import_remix19.Link, {
    className: "sheika button flex",
    to: "/app/entries/" + slug + "/update"
  }, /* @__PURE__ */ React.createElement(import_fi4.FiEdit3, {
    size: "1.5rem",
    className: "mr-3"
  }), "Update"), /* @__PURE__ */ React.createElement("button", {
    className: "sheika button danger flex",
    onClick: () => setShowDeleteModal(true)
  }, /* @__PURE__ */ React.createElement(import_fi4.FiTrash, {
    size: "1.5rem",
    className: "mr-3"
  }), "Delete"))))), /* @__PURE__ */ React.createElement("div", {
    className: "column"
  }, /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("legend", null, "Hearts"), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center w-full p-5"
  }, /* @__PURE__ */ React.createElement(HeartButton, {
    readonly: !currentUser,
    slug,
    originalLikes: likes,
    originalUserHasLiked: userHasLiked
  })))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("fieldset", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement("legend", null, "Comments (", comments.length, ")"), currentUser ? /* @__PURE__ */ React.createElement(CommentTextArea, {
    slug
  }) : null, /* @__PURE__ */ React.createElement(Comments, {
    entry: { comments, slug, id }
  })))), /* @__PURE__ */ React.createElement(EntryDeleteModal, {
    entryId: id,
    transition,
    show: showDeleteModal,
    onCancel: () => setShowDeleteModal(false)
  }));
}

// route-module:/Users/Quentin/Documents/Projects/Web/Remix/sheikah-diary/app/routes/app/entries/$slug/like.ts
var like_exports = {};
__export(like_exports, {
  action: () => action6
});

// app/features/entries/api/like.server.ts
var import_remix20 = __toModule(require("remix"));
var import_zod9 = __toModule(require("zod"));
var formValidator5 = import_zod9.z.object({
  alreadyLiked: import_zod9.z.boolean().default(false)
});
var likeAction = async ({ params, request }) => {
  if (!params.slug) {
    return null;
  }
  console.log("Request to like/unlike post", params.slug);
  let formData = await parseFormData(request, formValidator5);
  let user = await getUser(request);
  if (!user) {
    return (0, import_remix20.redirect)("/login");
  }
  let updateAction2;
  if (formData.alreadyLiked) {
    updateAction2 = {
      disconnect: {
        id: user.id
      }
    };
  } else {
    updateAction2 = {
      connect: {
        id: user.id
      }
    };
  }
  await db.entry.update({
    data: {
      likedBy: __spreadValues({}, updateAction2)
    },
    where: {
      slug: params.slug
    }
  });
  return !formData.alreadyLiked;
};

// route-module:/Users/Quentin/Documents/Projects/Web/Remix/sheikah-diary/app/routes/app/entries/$slug/like.ts
var action6 = (args) => likeAction(args);

// route-module:/Users/Quentin/Documents/Projects/Web/Remix/sheikah-diary/app/routes/app/users/$username.tsx
var username_exports = {};
__export(username_exports, {
  default: () => UserPage,
  loader: () => loader5,
  meta: () => meta5
});
var import_fi5 = __toModule(require("react-icons/fi"));
var import_hi = __toModule(require("react-icons/hi"));
var import_remix21 = __toModule(require("remix"));
var import_superjson3 = __toModule(require("superjson"));
var meta5 = ({ data }) => {
  let user = (0, import_superjson3.deserialize)(data);
  return {
    title: `${user.username}'s Page | Sheikah Diary`
  };
};
var loader5 = async ({ request, params }) => {
  if (!params.username) {
    return (0, import_remix21.redirect)("/app/entries");
  }
  let foundUserFromDb = await db.user.findFirst({
    select: {
      id: true,
      username: true
    },
    where: {
      username: params.username
    }
  });
  if (!foundUserFromDb) {
    return (0, import_remix21.redirect)("/app/entries");
  }
  return (0, import_superjson3.serialize)(foundUserFromDb);
};
function getNavLinkClassName({ isActive }) {
  let result = `sheika button flex-col !space-x-0 space-y-3`;
  if (!isActive) {
    result += " opacity-50";
  }
  return result;
}
function UserPage() {
  let user = (0, import_superjson3.deserialize)((0, import_remix21.useLoaderData)());
  let currentUser = useCurrentUser();
  return /* @__PURE__ */ React.createElement("article", {
    className: "flex flex-col w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mt-10 flex mx-auto items-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-xl font-bold filter drop-shadow-primary text-primary-500"
  }, user.username), (currentUser == null ? void 0 : currentUser.username) == user.username ? /* @__PURE__ */ React.createElement(import_remix21.Form, {
    className: "ml-10",
    action: "/logout",
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "redirectTo",
    readOnly: true,
    value: "/app/entries"
  }), /* @__PURE__ */ React.createElement("button", {
    className: "sheika button danger",
    type: "submit"
  }, /* @__PURE__ */ React.createElement(import_fi5.FiLogOut, null), /* @__PURE__ */ React.createElement("span", null, "Logout"))) : null), currentUser && currentUser.username == user.username ? /* @__PURE__ */ React.createElement("nav", {
    className: "flex flex-col mx-auto my-10"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "flex space-x-5"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "flex-1"
  }, /* @__PURE__ */ React.createElement(import_remix21.NavLink, {
    className: getNavLinkClassName,
    to: "entries"
  }, /* @__PURE__ */ React.createElement("span", null, "Entries"), /* @__PURE__ */ React.createElement(import_hi.HiCamera, {
    size: "1.9rem"
  }))), /* @__PURE__ */ React.createElement("li", {
    className: "flex-1"
  }, /* @__PURE__ */ React.createElement(import_remix21.NavLink, {
    className: getNavLinkClassName,
    to: "notifications"
  }, /* @__PURE__ */ React.createElement("span", null, "Notifications"), /* @__PURE__ */ React.createElement(import_hi.HiBell, {
    size: "1.9rem"
  }))), /* @__PURE__ */ React.createElement("li", {
    className: "flex-1"
  }, /* @__PURE__ */ React.createElement(import_remix21.NavLink, {
    className: getNavLinkClassName,
    to: "likes"
  }, /* @__PURE__ */ React.createElement("span", null, "Likes"), /* @__PURE__ */ React.createElement(import_hi.HiHeart, {
    size: "1.9rem"
  })))), /* @__PURE__ */ React.createElement("hr", {
    className: "!my-1"
  })) : null, /* @__PURE__ */ React.createElement(import_remix21.Outlet, null));
}

// route-module:/Users/Quentin/Documents/Projects/Web/Remix/sheikah-diary/app/routes/app/users/$username/notifications.tsx
var notifications_exports = {};
__export(notifications_exports, {
  action: () => action7,
  default: () => UserNotificationsPage,
  loader: () => loader6
});
var import_remix22 = __toModule(require("remix"));
var import_superjson4 = __toModule(require("superjson"));
var import_fi6 = __toModule(require("react-icons/fi"));
var import_zod10 = __toModule(require("zod"));
var loader6 = async ({ request }) => {
  let userId = await requireUserId(request);
  let notifications = await db.notification.findMany({
    where: {
      userId
    },
    orderBy: {
      createdAt: "desc"
    },
    take: 10
  });
  return (0, import_superjson4.serialize)(notifications);
};
var validator = import_zod10.z.object({
  id: import_zod10.z.string().uuid(),
  redirectTo: import_zod10.z.string().optional()
});
var action7 = async ({ request }) => {
  let { id, redirectTo } = await parseFormData(request, validator);
  console.log("Request to mark notification", id, "as seen and redirect to", redirectTo);
  await db.notification.update({
    data: {
      seenAt: new Date()
    },
    where: {
      id
    }
  });
  if (redirectTo) {
    return (0, import_remix22.redirect)(redirectTo);
  } else {
    return null;
  }
};
function displayNotifTitle(notif) {
  let title = /* @__PURE__ */ React.createElement("h1", null, notif.title);
  if (notif.link) {
    if (notif.seenAt) {
      title = /* @__PURE__ */ React.createElement(import_remix22.Link, {
        to: notif.link
      }, /* @__PURE__ */ React.createElement("h1", null, notif.title));
    } else {
      title = /* @__PURE__ */ React.createElement(import_remix22.Form, {
        method: "post"
      }, /* @__PURE__ */ React.createElement("input", {
        type: "hidden",
        name: "redirectTo",
        readOnly: true,
        value: notif.link
      }), /* @__PURE__ */ React.createElement("input", {
        type: "hidden",
        name: "id",
        readOnly: true,
        value: notif.id
      }), /* @__PURE__ */ React.createElement("button", {
        className: "no-style"
      }, /* @__PURE__ */ React.createElement("h1", {
        className: "font-bold"
      }, notif.title)));
    }
  }
  return title;
}
function displayNotif(notif) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center text-2xl space-x-3"
  }, notif.seenAt ? /* @__PURE__ */ React.createElement(import_fi6.FiCheckCircle, {
    className: "mx-4"
  }) : /* @__PURE__ */ React.createElement(import_remix22.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", null, /* @__PURE__ */ React.createElement(import_fi6.FiAlertCircle, null), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "id",
    readOnly: true,
    value: notif.id
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col " + (!notif.seenAt && "filter drop-shadow-primary")
  }, displayNotifTitle(notif), /* @__PURE__ */ React.createElement("small", {
    className: "text-sm"
  }, "on ", displayDateTime(notif.createdAt)))), /* @__PURE__ */ React.createElement("p", {
    className: "italic ml-10 my-5"
  }, notif.content), /* @__PURE__ */ React.createElement("hr", {
    className: "my-0"
  }));
}
function UserNotificationsPage() {
  let notifs = (0, import_superjson4.deserialize)((0, import_remix22.useLoaderData)());
  if ((notifs == null ? void 0 : notifs.length) > 0) {
    return /* @__PURE__ */ React.createElement("ul", {
      className: "mx-auto"
    }, notifs.map((notif) => /* @__PURE__ */ React.createElement("li", {
      key: notif.id,
      className: "p-5 text-primary-500 font-bold"
    }, displayNotif(notif))));
  } else {
    return /* @__PURE__ */ React.createElement("div", {
      className: "mx-auto"
    }, /* @__PURE__ */ React.createElement("h1", null, "No new notifications"));
  }
}

// route-module:/Users/Quentin/Documents/Projects/Web/Remix/sheikah-diary/app/routes/app/users/$username/entries.tsx
var entries_exports = {};
__export(entries_exports, {
  default: () => UserPage2,
  links: () => links6,
  loader: () => loader7
});
var import_remix26 = __toModule(require("remix"));
var import_superjson6 = __toModule(require("superjson"));

// app/features/entries/components/entry-card.tsx
var import_react9 = __toModule(require("react"));
var import_remix23 = __toModule(require("remix"));

// app/styles/entry-card.css
var entry_card_default = "/build/_assets/entry-card-LPR6ZN7V.css";

// app/features/entries/components/entry-frame.tsx
function EntryFrame() {
  return /* @__PURE__ */ React.createElement("svg", {
    className: "frame",
    width: "46",
    height: "46",
    version: "1.1",
    viewBox: "0 0 46.881 46.878",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("g", {
    transform: "translate(-77.171 -129.72)"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m80.877 129.88h39.44l3.5724 3.4888v39.698l-3.5105 3.3622h-39.474l-3.5647-3.4106v-39.549z",
    fillOpacity: "0",
    stroke: "currentColor",
    strokeWidth: ".32769"
  }), /* @__PURE__ */ React.createElement("g", {
    fill: "currentColor"
  }, /* @__PURE__ */ React.createElement("path", {
    transform: "scale(.26458)",
    d: "m457.34 490.27 11.512 11.512v-5.7754h-5.7266v-5.7266l5.7266 5.7266v-5.7363z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m124.05 173.55-3.0458 3.0458h1.5281v-1.5152h1.5152l-1.5152 1.5152h1.5177z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m80.217 176.59-3.0458-3.0458v1.5281h1.5152v1.5152l-1.5152-1.5152v1.5177z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m77.171 132.77 3.0458-3.0458h-1.5281v1.5152h-1.5152l1.5152-1.5152h-1.5177z"
  }))));
}

// app/features/entries/components/entry-selector.tsx
function EntrySelector() {
  return /* @__PURE__ */ React.createElement("svg", {
    className: "selector",
    width: "150",
    height: "150",
    viewBox: "0 0 150 150",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("g", {
    transform: "translate(-30.820808,-64.00766)"
  }, /* @__PURE__ */ React.createElement("path", {
    fill: "currentColor",
    d: "M 30.820808,64.00766 H 42.939469 L 30.820808,76.211487 Z"
  }), /* @__PURE__ */ React.createElement("path", {
    fill: "currentColor",
    d: "M 181.2547,64.00766 V 76.126321 L 169.05087,64.00766 Z"
  }), /* @__PURE__ */ React.createElement("path", {
    fill: "currentColor",
    d: "M 181.2547,214.55994 H 169.13604 L 181.2547,202.35611 Z"
  }), /* @__PURE__ */ React.createElement("path", {
    fill: "currentColor",
    d: "m 30.820808,214.55994 v -12.11867 l 12.20383,12.11867 z"
  })));
}

// app/features/entries/components/entry-card.tsx
var stylesheet = { rel: "stylesheet", href: entry_card_default };
var EntryCard = ({ entry: entry2 }) => {
  return /* @__PURE__ */ import_react9.default.createElement(import_remix23.Link, {
    prefetch: "intent",
    to: `/app/entries/${entry2.slug}`,
    className: "outline-none"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "entry-card"
  }, /* @__PURE__ */ import_react9.default.createElement("section", {
    className: "picture"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "pic-wrapper"
  }, entry2.thumbnailUrl ? /* @__PURE__ */ import_react9.default.createElement("img", {
    loading: "lazy",
    className: "picture",
    src: entry2.thumbnailUrl,
    alt: entry2.title
  }) : /* @__PURE__ */ import_react9.default.createElement(SheikahLogo, {
    className: "picture text-primary-700"
  })), /* @__PURE__ */ import_react9.default.createElement(EntrySelector, null), /* @__PURE__ */ import_react9.default.createElement(EntryFrame, null)), /* @__PURE__ */ import_react9.default.createElement("section", {
    className: "title"
  }, /* @__PURE__ */ import_react9.default.createElement("h1", {
    className: "font-bold text-xl"
  }, entry2.title), /* @__PURE__ */ import_react9.default.createElement("h2", null, "by ", entry2.createdBy))));
};
var entry_card_default2 = EntryCard;

// app/features/entries/components/entry-list.tsx
var import_remix24 = __toModule(require("remix"));
function EntryList({
  entries,
  page,
  total,
  itemsPerPage: itemsPerPage2
}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "md:p-10 lg:p-20"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "md:px-10 lg:px-20 flex flex-wrap"
  }, entries.map((entry2) => /* @__PURE__ */ React.createElement("li", {
    className: "w-full md:w-1/3 lg:w-1/4 xl:w-1/5 p-5",
    key: entry2.slug
  }, /* @__PURE__ */ React.createElement(entry_card_default2, {
    entry: entry2
  })))), /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("div", {
    className: "w-full flex justify-center space-x-5"
  }, page - 1 > 0 ? /* @__PURE__ */ React.createElement(import_remix24.Link, {
    prefetch: "intent",
    className: "sheika button",
    to: "?p=" + (page - 1)
  }, "Previous page") : null, page + 1 <= Math.ceil(total / itemsPerPage2) ? /* @__PURE__ */ React.createElement(import_remix24.Link, {
    prefetch: "intent",
    className: "sheika button",
    to: "?p=" + (page + 1)
  }, "Next page") : null), total > itemsPerPage2 ? /* @__PURE__ */ React.createElement("small", {
    className: "block w-full text-center text-primary-500"
  }, "Page ", page, " / ", Math.ceil(total / itemsPerPage2)) : null));
}

// app/features/users/api/entries-page.server.ts
var import_remix25 = __toModule(require("remix"));
var import_superjson5 = __toModule(require("superjson"));

// app/features/entries/types/entry-in-list.ts
var import_client5 = __toModule(require("@prisma/client"));
var prismaEntryInListSelect = import_client5.Prisma.validator()({
  title: true,
  slug: true,
  pictures: {
    select: {
      thumbnail: true
    }
  },
  user: {
    select: {
      username: true
    }
  }
});
async function computeEntryInListFields(entry2) {
  var _a, _b, _c, _d, _e;
  return __spreadProps(__spreadValues({}, entry2), {
    createdBy: (_a = entry2.user) == null ? void 0 : _a.username,
    thumbnailUrl: ((_c = (_b = entry2.pictures) == null ? void 0 : _b[0]) == null ? void 0 : _c.thumbnail) ? await pictures.getPublicUrl((_e = (_d = entry2.pictures) == null ? void 0 : _d[0]) == null ? void 0 : _e.thumbnail).publicURL ?? void 0 : void 0
  });
}

// app/utils/pagination.server.ts
var defaultItemsPerPage = 20;
async function paginateLoader({
  request,
  getItems,
  getTotal,
  itemsPerPage: itemsPerPage2 = defaultItemsPerPage
}) {
  let url = new URL(request.url);
  let page = url.searchParams.get("p");
  let pageNumber = page && Number(page) > 0 ? Number(page) - 1 : 0;
  let [items, totalItems] = await Promise.all([
    getItems(pageNumber, itemsPerPage2),
    getTotal()
  ]);
  return {
    items: items ?? [],
    page: pageNumber + 1,
    totalItems,
    itemsPerPage: itemsPerPage2
  };
}

// app/features/users/api/entries-page.server.ts
var userEntriesPageLoader = async ({
  params,
  request
}) => {
  if (!params.username) {
    return (0, import_remix25.redirect)("/app/entries");
  }
  let foundUserFromDb = await db.user.findFirst({
    select: {
      id: true
    },
    where: {
      username: params.username
    }
  });
  if (!foundUserFromDb) {
    return (0, import_remix25.redirect)("/app/entries");
  }
  let getItems = async (pageNumber, itemsPerPage2) => {
    let items = await db.entry.findMany({
      select: __spreadValues({}, prismaEntryInListSelect),
      take: itemsPerPage2,
      skip: itemsPerPage2 * pageNumber,
      where: {
        userId: foundUserFromDb.id
      },
      orderBy: {
        createdAt: "desc"
      }
    });
    return await Promise.all(items.map(await computeEntryInListFields));
  };
  let paginated = await paginateLoader({
    request,
    getItems,
    getTotal: () => db.entry.count({
      where: {
        userId: foundUserFromDb.id
      }
    })
  });
  return (0, import_superjson5.serialize)(paginated);
};

// route-module:/Users/Quentin/Documents/Projects/Web/Remix/sheikah-diary/app/routes/app/users/$username/entries.tsx
var links6 = () => [
  stylesheet,
  { rel: "stylesheet", href: entries_default }
];
var loader7 = userEntriesPageLoader;
function UserPage2() {
  let { items, page, totalItems, itemsPerPage: itemsPerPage2 } = (0, import_superjson6.deserialize)((0, import_remix26.useLoaderData)());
  return /* @__PURE__ */ React.createElement(EntryList, {
    entries: items,
    page,
    total: totalItems,
    itemsPerPage: itemsPerPage2
  });
}

// route-module:/Users/Quentin/Documents/Projects/Web/Remix/sheikah-diary/app/routes/app/users/$username/index.tsx
var username_exports2 = {};
__export(username_exports2, {
  loader: () => loader8
});
var import_remix27 = __toModule(require("remix"));
var loader8 = ({ params }) => {
  return (0, import_remix27.redirect)(`/app/users/${params.username}/entries`);
};

// route-module:/Users/Quentin/Documents/Projects/Web/Remix/sheikah-diary/app/routes/app/users/$username/likes.tsx
var likes_exports = {};
__export(likes_exports, {
  default: () => UserLikedPage,
  links: () => links7,
  loader: () => loader9
});
var import_remix28 = __toModule(require("remix"));
var import_superjson7 = __toModule(require("superjson"));
var links7 = () => [
  stylesheet,
  { rel: "stylesheet", href: entries_default }
];
var loader9 = async ({ request, params }) => {
  let userId = await requireUserId(request);
  let getItems = async (pageNumber, itemsPerPage2) => {
    let baseItems = await db.entry.findMany({
      select: prismaEntryInListSelect,
      take: itemsPerPage2,
      skip: itemsPerPage2 * pageNumber,
      where: {
        likedBy: {
          some: {
            id: userId
          }
        },
        userId: {
          not: userId
        }
      }
    });
    return await Promise.all(baseItems.map(computeEntryInListFields));
  };
  let paginated = await paginateLoader({
    request,
    getItems,
    getTotal: () => db.entry.count({
      where: {
        userId
      }
    })
  });
  return (0, import_superjson7.serialize)(paginated);
};
function UserLikedPage() {
  let { totalItems, itemsPerPage: itemsPerPage2, page, items } = (0, import_superjson7.deserialize)((0, import_remix28.useLoaderData)());
  return /* @__PURE__ */ React.createElement(EntryList, {
    entries: items,
    total: totalItems,
    page,
    itemsPerPage: itemsPerPage2
  });
}

// route-module:/Users/Quentin/Documents/Projects/Web/Remix/sheikah-diary/app/routes/app/entries/index.tsx
var entries_exports2 = {};
__export(entries_exports2, {
  default: () => EntriesIndexPage,
  links: () => links8,
  loader: () => loader10,
  meta: () => meta6
});
var import_fi7 = __toModule(require("react-icons/fi"));
var import_remix29 = __toModule(require("remix"));
var import_superjson8 = __toModule(require("superjson"));
var itemsPerPage = 20;
var links8 = () => [stylesheet];
var meta6 = () => {
  return {
    title: "Entries | Sheikah Diary"
  };
};
var loader10 = async ({ request }) => {
  let url = new URL(request.url);
  let page = url.searchParams.get("p");
  let pageNumber = page && Number(page) > 0 ? Number(page) - 1 : 0;
  let total = await db.entry.count();
  let data = await db.entry.findMany({
    select: prismaEntryInListSelect,
    take: itemsPerPage,
    skip: itemsPerPage * pageNumber,
    orderBy: {
      createdAt: "desc"
    }
  });
  let entries = await Promise.all(data.map(await computeEntryInListFields));
  return (0, import_superjson8.serialize)({
    page: pageNumber + 1,
    total,
    entries
  });
};
function EntriesIndexPage() {
  let { page, total, entries } = (0, import_superjson8.deserialize)((0, import_remix29.useLoaderData)());
  let currentUser = useCurrentUser();
  if (total > 0) {
    return /* @__PURE__ */ React.createElement(EntryList, {
      entries,
      page,
      total,
      itemsPerPage
    });
  } else {
    return /* @__PURE__ */ React.createElement("div", {
      className: "h-full w-full flex"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "m-auto flex flex-col text-primary-500"
    }, /* @__PURE__ */ React.createElement(SheikahLogo, {
      className: "w-60 h-60 filter drop-shadow-primary"
    }), /* @__PURE__ */ React.createElement("span", {
      className: "font-bold text-2xl mx-auto text-shadow-primary"
    }, "No entries yet"), !currentUser ? null : /* @__PURE__ */ React.createElement(import_remix29.Link, {
      to: "/app/entries/new",
      className: "sheika button flex mx-auto mt-5"
    }, /* @__PURE__ */ React.createElement(import_fi7.FiPlus, {
      size: "1.5rem",
      className: "mr-3"
    }), "Add an entry")));
  }
}

// route-module:/Users/Quentin/Documents/Projects/Web/Remix/sheikah-diary/app/routes/app/entries/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action8,
  default: () => NewEntryPage,
  links: () => links9,
  meta: () => meta7
});
var import_remix30 = __toModule(require("remix"));
var links9 = () => [
  { rel: "stylesheet", href: forms_default }
];
var meta7 = () => {
  return {
    title: "New Entry | Sheikah Diary"
  };
};
var action8 = createAction;
function NewEntryPage() {
  let errors = (0, import_remix30.useActionData)();
  let transition = (0, import_remix30.useTransition)();
  return /* @__PURE__ */ React.createElement(EntryForm, {
    errors,
    transition,
    submitLabel: { default: "Create entry", sending: "Creating entry" },
    action: "/app/entries/new"
  });
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/app": {
    id: "routes/app",
    parentId: "root",
    path: "app",
    index: void 0,
    caseSensitive: void 0,
    module: app_exports
  },
  "routes/app/entries/$slug/create-comment": {
    id: "routes/app/entries/$slug/create-comment",
    parentId: "routes/app",
    path: "entries/:slug/create-comment",
    index: void 0,
    caseSensitive: void 0,
    module: create_comment_exports
  },
  "routes/app/entries/$slug/update": {
    id: "routes/app/entries/$slug/update",
    parentId: "routes/app",
    path: "entries/:slug/update",
    index: void 0,
    caseSensitive: void 0,
    module: update_exports
  },
  "routes/app/entries/$slug/index": {
    id: "routes/app/entries/$slug/index",
    parentId: "routes/app",
    path: "entries/:slug",
    index: true,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/app/entries/$slug/like": {
    id: "routes/app/entries/$slug/like",
    parentId: "routes/app",
    path: "entries/:slug/like",
    index: void 0,
    caseSensitive: void 0,
    module: like_exports
  },
  "routes/app/users/$username": {
    id: "routes/app/users/$username",
    parentId: "routes/app",
    path: "users/:username",
    index: void 0,
    caseSensitive: void 0,
    module: username_exports
  },
  "routes/app/users/$username/notifications": {
    id: "routes/app/users/$username/notifications",
    parentId: "routes/app/users/$username",
    path: "notifications",
    index: void 0,
    caseSensitive: void 0,
    module: notifications_exports
  },
  "routes/app/users/$username/entries": {
    id: "routes/app/users/$username/entries",
    parentId: "routes/app/users/$username",
    path: "entries",
    index: void 0,
    caseSensitive: void 0,
    module: entries_exports
  },
  "routes/app/users/$username/index": {
    id: "routes/app/users/$username/index",
    parentId: "routes/app/users/$username",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: username_exports2
  },
  "routes/app/users/$username/likes": {
    id: "routes/app/users/$username/likes",
    parentId: "routes/app/users/$username",
    path: "likes",
    index: void 0,
    caseSensitive: void 0,
    module: likes_exports
  },
  "routes/app/entries/index": {
    id: "routes/app/entries/index",
    parentId: "routes/app",
    path: "entries",
    index: true,
    caseSensitive: void 0,
    module: entries_exports2
  },
  "routes/app/entries/new": {
    id: "routes/app/entries/new",
    parentId: "routes/app",
    path: "entries/new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=/build/index.js.map
