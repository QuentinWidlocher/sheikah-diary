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
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
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

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
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
init_react();
var React2 = __toModule(require("react"));
var import_remix3 = __toModule(require_remix());

// app/styles/global.css
var global_default = "/build/_assets/global-A27AZ2AW.css";

// app/styles/basic.css
var basic_default = "/build/_assets/basic-GNEGZGIT.css";

// app/components/error-page.tsx
init_react();
var import_remix2 = __toModule(require_remix());
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
  }, children, /* @__PURE__ */ React2.createElement(RouteChangeAnnouncement, null), /* @__PURE__ */ React2.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React2.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React2.createElement(import_remix3.LiveReload, null)));
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
init_react();
var import_remix5 = __toModule(require_remix());

// app/utils/session.server.ts
init_react();
var import_bcrypt = __toModule(require("bcrypt"));
var import_remix4 = __toModule(require_remix());

// app/utils/db.server.ts
init_react();
var import_client = __toModule(require("@prisma/client"));
var db;
if (false) {
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
    secure: false,
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
init_react();
var import_remix6 = __toModule(require_remix());

// package.json
var author = {
  name: "Quentin Widlocher",
  email: "quentin@widlocher.com",
  url: "https://quentin.widlocher.com"
};
var version = "1.0.2";
var repository = {
  url: "https://github.com/QuentinWidlocher/sheikah-diary"
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
  }, "Ver. ", version), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: "opacity-60 hover:opacity-100",
    href: repository.url
  }, "See on GitHub")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", {
    className: "opacity-60"
  }, new Date().getFullYear(), " - "), /* @__PURE__ */ React.createElement("a", {
    className: "opacity-60 hover:opacity-100",
    href: author.url
  }, author.name)))))));
}

// route-module:/Users/Quentin/Documents/Projects/Web/Remix/sheikah-diary/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => Login,
  links: () => links2,
  meta: () => meta3
});
init_react();
var import_react = __toModule(require("react"));
var import_fi = __toModule(require("react-icons/fi"));
var import_remix7 = __toModule(require_remix());

// app/components/error-message.tsx
init_react();
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
init_react();
var import_zod2 = __toModule(require("zod"));

// app/utils/formdata.utils.server.ts
init_react();
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
init_react();
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
init_react();
var import_fi2 = __toModule(require("react-icons/fi"));
var import_remix9 = __toModule(require_remix());

// app/components/app-layout.tsx
init_react();
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
init_react();
var import_remix8 = __toModule(require_remix());
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
init_react();

// app/features/entries/api/create-comment.server.ts
init_react();
var import_client2 = __toModule(require("@prisma/client"));
var import_remix10 = __toModule(require_remix());
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
init_react();
var import_remix13 = __toModule(require_remix());
var import_superjson = __toModule(require("superjson"));
var import_zod5 = __toModule(require("zod"));

// app/features/entries/api/update.server.ts
init_react();
var import_remix11 = __toModule(require_remix());
var import_zod4 = __toModule(require("zod"));

// app/utils/file.utils.server.ts
init_react();

// app/utils/storage.server.ts
init_react();
var import_cloudinary = __toModule(require("cloudinary"));
import_cloudinary.v2.config({
  cloud_name: "dslgqiqtk",
  api_key: "541476277984537",
  api_secret: process.env.CLOUDINARY_API_SECRET
});
var cloudinary = import_cloudinary.v2;

// app/utils/file.utils.server.ts
var base64ImageValidTypeRegex = /^data:image\/(\w*);base64,/;
async function saveImage(base64, entryId) {
  console.log("Saving image for entry", entryId);
  let file = await cloudinary.uploader.upload(base64, {
    public_id: entryId,
    unique_filename: true
  });
  console.debug("The file has been uploaded");
  return db.picture.create({
    data: {
      file: file.public_id,
      entryId
    }
  });
}

// app/utils/string.utils.ts
init_react();
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
  } catch (e) {
    console.error("Unable to save entry", e);
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
      await saveImage(form.mainPicture, createdEntry.id);
      console.log("File has been saved");
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
      console.log("File has been saved");
    }
    return updatedEntry.slug;
  });
};

// app/features/entries/components/entry-form.tsx
init_react();
var import_react3 = __toModule(require("react"));
var import_react_loading2 = __toModule(require("react-loading"));
var import_remix12 = __toModule(require_remix());

// app/components/form-field.tsx
init_react();
function FormField({ label, error, children }) {
  return /* @__PURE__ */ React.createElement("label", {
    className: "form-field"
  }, label && /* @__PURE__ */ React.createElement("span", null, label), children, /* @__PURE__ */ React.createElement(ErrorMessage, {
    error,
    className: "ml-2"
  }));
}

// app/features/entries/components/image-selector.tsx
init_react();
var import_react2 = __toModule(require("react"));
var import_fi3 = __toModule(require("react-icons/fi"));
var import_react_loading = __toModule(require("react-loading"));
function loadImageToCanvas(canvas, image, width = image.width, height = image.height) {
  var _a;
  canvas.width = width;
  canvas.height = height;
  (_a = canvas.getContext("2d")) == null ? void 0 : _a.drawImage(image, 0, 0, width, height);
}
async function getBase64FromFile(file, canvas) {
  return new Promise(async (resolve, reject) => {
    let image = new Image();
    image.src = URL.createObjectURL(file);
    image.onload = async () => {
      loadImageToCanvas(canvas, image);
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
init_react();
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
init_react();
var import_react8 = __toModule(require("react"));
var import_fi4 = __toModule(require("react-icons/fi"));
var import_remix19 = __toModule(require_remix());
var import_superjson2 = __toModule(require("superjson"));
var import_zod8 = __toModule(require("zod"));

// app/features/entries/api/delete.server.ts
init_react();
var import_remix14 = __toModule(require_remix());
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
  cloudinary.api.delete_resources(linkedPictures.map((pic) => pic.file)).then(() => console.info("All files have been deleted"));
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
init_react();
var import_react4 = __toModule(require("react"));
var import_remix15 = __toModule(require_remix());
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

// app/features/entries/components/comments.tsx
init_react();

// app/utils/date.utils.ts
init_react();
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
init_react();
var import_react5 = __toModule(require("react"));
var import_remix16 = __toModule(require_remix());
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
init_react();
var import_react6 = __toModule(require("react"));
var import_remix17 = __toModule(require_remix());

// app/components/heart-icon.tsx
init_react();
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
init_react();
var import_react7 = __toModule(require("react"));

// app/components/sheika-logo.tsx
init_react();
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
function ImageDisplay({ pictures }) {
  if (!pictures || pictures.length <= 0) {
    return /* @__PURE__ */ React.createElement(SheikahLogo, {
      className: "mx-auto w-full h-full border border-primary-500 text-primary-500"
    });
  }
  const [fullscreen, setFullscreen] = (0, import_react7.useState)(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", {
    onClick: () => setFullscreen(true)
  }, /* @__PURE__ */ React.createElement("img", {
    src: pictures[0].preview,
    alt: "",
    className: "mx-auto w-full max-w-2xl h-full border border-primary-500 text-primary-500"
  })), fullscreen ? /* @__PURE__ */ React.createElement("div", {
    onClick: () => setFullscreen(false),
    className: "fixed z-20 top-0 left-0 w-screen h-screen bg-black bg-opacity-50 object-contain px-1 md:px-5 lg:px-10 xl:px-20"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-full bg-contain bg-no-repeat bg-center",
    style: {
      backgroundImage: `url(${pictures[0].file})`
    }
  })) : null);
}

// app/features/entries/types/entry-in-page.ts
init_react();
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
        file: true
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
init_react();
var import_remix18 = __toModule(require_remix());
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
    pictures: entry2.pictures.map((p) => ({
      file: cloudinary.url(p.file) ?? "",
      preview: cloudinary.url(p.file, { width: 1e3, height: 1e3, crop: "limit" }) ?? ""
    }))
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
    pictures,
    comments,
    likedBy,
    _count: { likedBy: likedByCount }
  } = (0, import_superjson2.deserialize)((0, import_remix19.useLoaderData)());
  let currentUser = useCurrentUser();
  const [showDeleteModal, setShowDeleteModal] = (0, import_react8.useState)(false);
  const userHasLiked = currentUser ? likedBy.some((l) => l.id == (currentUser == null ? void 0 : currentUser.id)) : false;
  const likes = userHasLiked ? likedByCount - 1 || 0 : likedByCount;
  let transition = (0, import_remix19.useTransition)();
  return /* @__PURE__ */ React.createElement("article", null, pictures.map((pic) => /* @__PURE__ */ React.createElement("link", {
    rel: "preload",
    as: "image",
    href: pic.file,
    key: pic.file
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
    pictures
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
init_react();

// app/features/entries/api/like.server.ts
init_react();
var import_remix20 = __toModule(require_remix());
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
init_react();
var import_fi5 = __toModule(require("react-icons/fi"));
var import_hi = __toModule(require("react-icons/hi"));
var import_remix21 = __toModule(require_remix());
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
init_react();
var import_remix22 = __toModule(require_remix());
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
init_react();
var import_remix26 = __toModule(require_remix());
var import_superjson6 = __toModule(require("superjson"));

// app/features/entries/components/entry-card.tsx
init_react();
var import_react9 = __toModule(require("react"));
var import_remix23 = __toModule(require_remix());

// app/styles/entry-card.css
var entry_card_default = "/build/_assets/entry-card-LPR6ZN7V.css";

// app/features/entries/components/entry-frame.tsx
init_react();
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
init_react();
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
init_react();
var import_remix24 = __toModule(require_remix());
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
init_react();
var import_remix25 = __toModule(require_remix());
var import_superjson5 = __toModule(require("superjson"));

// app/features/entries/types/entry-in-list.ts
init_react();
var import_client5 = __toModule(require("@prisma/client"));
var prismaEntryInListSelect = import_client5.Prisma.validator()({
  title: true,
  slug: true,
  pictures: {
    select: {
      file: true
    }
  },
  user: {
    select: {
      username: true
    }
  }
});
async function computeEntryInListFields(entry2) {
  var _a, _b, _c, _d;
  return __spreadProps(__spreadValues({}, entry2), {
    createdBy: (_a = entry2.user) == null ? void 0 : _a.username,
    thumbnailUrl: ((_c = (_b = entry2.pictures) == null ? void 0 : _b[0]) == null ? void 0 : _c.file) ? cloudinary.url((_d = entry2.pictures) == null ? void 0 : _d[0].file, {
      width: 500,
      height: 500,
      crop: "limit"
    }) : void 0
  });
}

// app/utils/pagination.server.ts
init_react();
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
init_react();
var import_remix27 = __toModule(require_remix());
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
init_react();
var import_remix28 = __toModule(require_remix());
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
init_react();
var import_fi7 = __toModule(require("react-icons/fi"));
var import_remix29 = __toModule(require_remix());
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
init_react();
var import_remix30 = __toModule(require_remix());
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
/**
 * @remix-run/node v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9RdWVudGluL0RvY3VtZW50cy9Qcm9qZWN0cy9XZWIvUmVtaXgvc2hlaWthaC1kaWFyeS9hcHAvcm9vdC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvZXJyb3ItcGFnZS50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9RdWVudGluL0RvY3VtZW50cy9Qcm9qZWN0cy9XZWIvUmVtaXgvc2hlaWthaC1kaWFyeS9hcHAvcm91dGVzL2xvZ291dC50cyIsICIuLi8uLi8uLi8uLi9hcHAvdXRpbHMvc2Vzc2lvbi5zZXJ2ZXIudHMiLCAiLi4vLi4vLi4vLi4vYXBwL3V0aWxzL2RiLnNlcnZlci50cyIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL1F1ZW50aW4vRG9jdW1lbnRzL1Byb2plY3RzL1dlYi9SZW1peC9zaGVpa2FoLWRpYXJ5L2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvUXVlbnRpbi9Eb2N1bWVudHMvUHJvamVjdHMvV2ViL1JlbWl4L3NoZWlrYWgtZGlhcnkvYXBwL3JvdXRlcy9sb2dpbi50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvZXJyb3ItbWVzc2FnZS50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2ZlYXR1cmVzL2xvZ2luL2FwaS50cyIsICIuLi8uLi8uLi8uLi9hcHAvdXRpbHMvZm9ybWRhdGEudXRpbHMuc2VydmVyLnRzIiwgIi4uLy4uLy4uLy4uL2FwcC91dGlscy9mdW5jdGlvbmFsLnV0aWxzLnRzIiwgInJvdXRlLW1vZHVsZTovVXNlcnMvUXVlbnRpbi9Eb2N1bWVudHMvUHJvamVjdHMvV2ViL1JlbWl4L3NoZWlrYWgtZGlhcnkvYXBwL3JvdXRlcy9hcHAudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL2FwcC1sYXlvdXQudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9ob29rcy91c2VDdXJyZW50Um91dGUudHMiLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9RdWVudGluL0RvY3VtZW50cy9Qcm9qZWN0cy9XZWIvUmVtaXgvc2hlaWthaC1kaWFyeS9hcHAvcm91dGVzL2FwcC9lbnRyaWVzLyRzbHVnL2NyZWF0ZS1jb21tZW50LnRzIiwgIi4uLy4uLy4uLy4uL2FwcC9mZWF0dXJlcy9lbnRyaWVzL2FwaS9jcmVhdGUtY29tbWVudC5zZXJ2ZXIudHMiLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9RdWVudGluL0RvY3VtZW50cy9Qcm9qZWN0cy9XZWIvUmVtaXgvc2hlaWthaC1kaWFyeS9hcHAvcm91dGVzL2FwcC9lbnRyaWVzLyRzbHVnL3VwZGF0ZS50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2ZlYXR1cmVzL2VudHJpZXMvYXBpL3VwZGF0ZS5zZXJ2ZXIudHMiLCAiLi4vLi4vLi4vLi4vYXBwL3V0aWxzL2ZpbGUudXRpbHMuc2VydmVyLnRzIiwgIi4uLy4uLy4uLy4uL2FwcC91dGlscy9zdG9yYWdlLnNlcnZlci50cyIsICIuLi8uLi8uLi8uLi9hcHAvdXRpbHMvc3RyaW5nLnV0aWxzLnRzIiwgIi4uLy4uLy4uLy4uL2FwcC9mZWF0dXJlcy9lbnRyaWVzL2NvbXBvbmVudHMvZW50cnktZm9ybS50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvZm9ybS1maWVsZC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2ZlYXR1cmVzL2VudHJpZXMvY29tcG9uZW50cy9pbWFnZS1zZWxlY3Rvci50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2ZlYXR1cmVzL2VudHJpZXMvdHlwZXMvZW50cnktaW4tdXBkYXRlLnRzIiwgInJvdXRlLW1vZHVsZTovVXNlcnMvUXVlbnRpbi9Eb2N1bWVudHMvUHJvamVjdHMvV2ViL1JlbWl4L3NoZWlrYWgtZGlhcnkvYXBwL3JvdXRlcy9hcHAvZW50cmllcy8kc2x1Zy9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2ZlYXR1cmVzL2VudHJpZXMvYXBpL2RlbGV0ZS5zZXJ2ZXIudHMiLCAiLi4vLi4vLi4vLi4vYXBwL2ZlYXR1cmVzL2VudHJpZXMvY29tcG9uZW50cy9jb21tZW50LXRleHQtYXJlYS50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2ZlYXR1cmVzL2VudHJpZXMvY29tcG9uZW50cy9jb21tZW50cy50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3V0aWxzL2RhdGUudXRpbHMudHMiLCAiLi4vLi4vLi4vLi4vYXBwL2ZlYXR1cmVzL2VudHJpZXMvY29tcG9uZW50cy9lbnRyeS1kZWxldGUtbW9kYWwudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9mZWF0dXJlcy9lbnRyaWVzL2NvbXBvbmVudHMvaGVhcnQtYnV0dG9uLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9oZWFydC1pY29uLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvZmVhdHVyZXMvZW50cmllcy9jb21wb25lbnRzL2ltYWdlLWRpc3BsYXkudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL3NoZWlrYS1sb2dvLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvZmVhdHVyZXMvZW50cmllcy90eXBlcy9lbnRyeS1pbi1wYWdlLnRzIiwgIi4uLy4uLy4uLy4uL2FwcC9ob29rcy91c2VDdXJyZW50VXNlci50cyIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL1F1ZW50aW4vRG9jdW1lbnRzL1Byb2plY3RzL1dlYi9SZW1peC9zaGVpa2FoLWRpYXJ5L2FwcC9yb3V0ZXMvYXBwL2VudHJpZXMvJHNsdWcvbGlrZS50cyIsICIuLi8uLi8uLi8uLi9hcHAvZmVhdHVyZXMvZW50cmllcy9hcGkvbGlrZS5zZXJ2ZXIudHMiLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9RdWVudGluL0RvY3VtZW50cy9Qcm9qZWN0cy9XZWIvUmVtaXgvc2hlaWthaC1kaWFyeS9hcHAvcm91dGVzL2FwcC91c2Vycy8kdXNlcm5hbWUudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvUXVlbnRpbi9Eb2N1bWVudHMvUHJvamVjdHMvV2ViL1JlbWl4L3NoZWlrYWgtZGlhcnkvYXBwL3JvdXRlcy9hcHAvdXNlcnMvJHVzZXJuYW1lL25vdGlmaWNhdGlvbnMudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvUXVlbnRpbi9Eb2N1bWVudHMvUHJvamVjdHMvV2ViL1JlbWl4L3NoZWlrYWgtZGlhcnkvYXBwL3JvdXRlcy9hcHAvdXNlcnMvJHVzZXJuYW1lL2VudHJpZXMudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9mZWF0dXJlcy9lbnRyaWVzL2NvbXBvbmVudHMvZW50cnktY2FyZC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2ZlYXR1cmVzL2VudHJpZXMvY29tcG9uZW50cy9lbnRyeS1mcmFtZS50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2ZlYXR1cmVzL2VudHJpZXMvY29tcG9uZW50cy9lbnRyeS1zZWxlY3Rvci50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2ZlYXR1cmVzL2VudHJpZXMvY29tcG9uZW50cy9lbnRyeS1saXN0LnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvZmVhdHVyZXMvdXNlcnMvYXBpL2VudHJpZXMtcGFnZS5zZXJ2ZXIudHMiLCAiLi4vLi4vLi4vLi4vYXBwL2ZlYXR1cmVzL2VudHJpZXMvdHlwZXMvZW50cnktaW4tbGlzdC50cyIsICIuLi8uLi8uLi8uLi9hcHAvdXRpbHMvcGFnaW5hdGlvbi5zZXJ2ZXIudHMiLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9RdWVudGluL0RvY3VtZW50cy9Qcm9qZWN0cy9XZWIvUmVtaXgvc2hlaWthaC1kaWFyeS9hcHAvcm91dGVzL2FwcC91c2Vycy8kdXNlcm5hbWUvaW5kZXgudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvUXVlbnRpbi9Eb2N1bWVudHMvUHJvamVjdHMvV2ViL1JlbWl4L3NoZWlrYWgtZGlhcnkvYXBwL3JvdXRlcy9hcHAvdXNlcnMvJHVzZXJuYW1lL2xpa2VzLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL1F1ZW50aW4vRG9jdW1lbnRzL1Byb2plY3RzL1dlYi9SZW1peC9zaGVpa2FoLWRpYXJ5L2FwcC9yb3V0ZXMvYXBwL2VudHJpZXMvaW5kZXgudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvUXVlbnRpbi9Eb2N1bWVudHMvUHJvamVjdHMvV2ViL1JlbWl4L3NoZWlrYWgtZGlhcnkvYXBwL3JvdXRlcy9hcHAvZW50cmllcy9uZXcudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG4iLCAiLyoqXG4gKiByZW1peCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKTtcbnZhciBzZXJ2ZXIgPSByZXF1aXJlKCcuL3NlcnZlcicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZSgnLi9wbGF0Zm9ybScpO1xuXG5cblxuT2JqZWN0LmtleXMoY2xpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsaWVudFtrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMoc2VydmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlcltrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMocGxhdGZvcm0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGxhdGZvcm1ba107IH1cblx0fSk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvUXVlbnRpbi9Eb2N1bWVudHMvUHJvamVjdHMvV2ViL1JlbWl4L3NoZWlrYWgtZGlhcnkvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL1F1ZW50aW4vRG9jdW1lbnRzL1Byb2plY3RzL1dlYi9SZW1peC9zaGVpa2FoLWRpYXJ5L2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvUXVlbnRpbi9Eb2N1bWVudHMvUHJvamVjdHMvV2ViL1JlbWl4L3NoZWlrYWgtZGlhcnkvYXBwL3JvdXRlcy9sb2dvdXQudHNcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL1F1ZW50aW4vRG9jdW1lbnRzL1Byb2plY3RzL1dlYi9SZW1peC9zaGVpa2FoLWRpYXJ5L2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9RdWVudGluL0RvY3VtZW50cy9Qcm9qZWN0cy9XZWIvUmVtaXgvc2hlaWthaC1kaWFyeS9hcHAvcm91dGVzL2xvZ2luLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvUXVlbnRpbi9Eb2N1bWVudHMvUHJvamVjdHMvV2ViL1JlbWl4L3NoZWlrYWgtZGlhcnkvYXBwL3JvdXRlcy9hcHAudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy9RdWVudGluL0RvY3VtZW50cy9Qcm9qZWN0cy9XZWIvUmVtaXgvc2hlaWthaC1kaWFyeS9hcHAvcm91dGVzL2FwcC9lbnRyaWVzLyRzbHVnL2NyZWF0ZS1jb21tZW50LnRzXCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9RdWVudGluL0RvY3VtZW50cy9Qcm9qZWN0cy9XZWIvUmVtaXgvc2hlaWthaC1kaWFyeS9hcHAvcm91dGVzL2FwcC9lbnRyaWVzLyRzbHVnL3VwZGF0ZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL1VzZXJzL1F1ZW50aW4vRG9jdW1lbnRzL1Byb2plY3RzL1dlYi9SZW1peC9zaGVpa2FoLWRpYXJ5L2FwcC9yb3V0ZXMvYXBwL2VudHJpZXMvJHNsdWcvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9Vc2Vycy9RdWVudGluL0RvY3VtZW50cy9Qcm9qZWN0cy9XZWIvUmVtaXgvc2hlaWthaC1kaWFyeS9hcHAvcm91dGVzL2FwcC9lbnRyaWVzLyRzbHVnL2xpa2UudHNcIjtcbmltcG9ydCAqIGFzIHJvdXRlOSBmcm9tIFwiL1VzZXJzL1F1ZW50aW4vRG9jdW1lbnRzL1Byb2plY3RzL1dlYi9SZW1peC9zaGVpa2FoLWRpYXJ5L2FwcC9yb3V0ZXMvYXBwL3VzZXJzLyR1c2VybmFtZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTAgZnJvbSBcIi9Vc2Vycy9RdWVudGluL0RvY3VtZW50cy9Qcm9qZWN0cy9XZWIvUmVtaXgvc2hlaWthaC1kaWFyeS9hcHAvcm91dGVzL2FwcC91c2Vycy8kdXNlcm5hbWUvbm90aWZpY2F0aW9ucy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTEgZnJvbSBcIi9Vc2Vycy9RdWVudGluL0RvY3VtZW50cy9Qcm9qZWN0cy9XZWIvUmVtaXgvc2hlaWthaC1kaWFyeS9hcHAvcm91dGVzL2FwcC91c2Vycy8kdXNlcm5hbWUvZW50cmllcy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTIgZnJvbSBcIi9Vc2Vycy9RdWVudGluL0RvY3VtZW50cy9Qcm9qZWN0cy9XZWIvUmVtaXgvc2hlaWthaC1kaWFyeS9hcHAvcm91dGVzL2FwcC91c2Vycy8kdXNlcm5hbWUvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEzIGZyb20gXCIvVXNlcnMvUXVlbnRpbi9Eb2N1bWVudHMvUHJvamVjdHMvV2ViL1JlbWl4L3NoZWlrYWgtZGlhcnkvYXBwL3JvdXRlcy9hcHAvdXNlcnMvJHVzZXJuYW1lL2xpa2VzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNCBmcm9tIFwiL1VzZXJzL1F1ZW50aW4vRG9jdW1lbnRzL1Byb2plY3RzL1dlYi9SZW1peC9zaGVpa2FoLWRpYXJ5L2FwcC9yb3V0ZXMvYXBwL2VudHJpZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE1IGZyb20gXCIvVXNlcnMvUXVlbnRpbi9Eb2N1bWVudHMvUHJvamVjdHMvV2ViL1JlbWl4L3NoZWlrYWgtZGlhcnkvYXBwL3JvdXRlcy9hcHAvZW50cmllcy9uZXcudHN4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy5qc29uXCI7XG5leHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gIFwicm9vdFwiOiB7XG4gICAgaWQ6IFwicm9vdFwiLFxuICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgcGF0aDogXCJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMFxuICB9LFxuICBcInJvdXRlcy9sb2dvdXRcIjoge1xuICAgIGlkOiBcInJvdXRlcy9sb2dvdXRcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJsb2dvdXRcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMVxuICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTJcbiAgfSxcbiAgXCJyb3V0ZXMvbG9naW5cIjoge1xuICAgIGlkOiBcInJvdXRlcy9sb2dpblwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImxvZ2luXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTNcbiAgfSxcbiAgXCJyb3V0ZXMvYXBwXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYXBwXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiYXBwXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTRcbiAgfSxcbiAgXCJyb3V0ZXMvYXBwL2VudHJpZXMvJHNsdWcvY3JlYXRlLWNvbW1lbnRcIjoge1xuICAgIGlkOiBcInJvdXRlcy9hcHAvZW50cmllcy8kc2x1Zy9jcmVhdGUtY29tbWVudFwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9hcHBcIixcbiAgICBwYXRoOiBcImVudHJpZXMvOnNsdWcvY3JlYXRlLWNvbW1lbnRcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNVxuICB9LFxuICBcInJvdXRlcy9hcHAvZW50cmllcy8kc2x1Zy91cGRhdGVcIjoge1xuICAgIGlkOiBcInJvdXRlcy9hcHAvZW50cmllcy8kc2x1Zy91cGRhdGVcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYXBwXCIsXG4gICAgcGF0aDogXCJlbnRyaWVzLzpzbHVnL3VwZGF0ZVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU2XG4gIH0sXG4gIFwicm91dGVzL2FwcC9lbnRyaWVzLyRzbHVnL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYXBwL2VudHJpZXMvJHNsdWcvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYXBwXCIsXG4gICAgcGF0aDogXCJlbnRyaWVzLzpzbHVnXCIsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU3XG4gIH0sXG4gIFwicm91dGVzL2FwcC9lbnRyaWVzLyRzbHVnL2xpa2VcIjoge1xuICAgIGlkOiBcInJvdXRlcy9hcHAvZW50cmllcy8kc2x1Zy9saWtlXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL2FwcFwiLFxuICAgIHBhdGg6IFwiZW50cmllcy86c2x1Zy9saWtlXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZThcbiAgfSxcbiAgXCJyb3V0ZXMvYXBwL3VzZXJzLyR1c2VybmFtZVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2FwcC91c2Vycy8kdXNlcm5hbWVcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYXBwXCIsXG4gICAgcGF0aDogXCJ1c2Vycy86dXNlcm5hbWVcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlOVxuICB9LFxuICBcInJvdXRlcy9hcHAvdXNlcnMvJHVzZXJuYW1lL25vdGlmaWNhdGlvbnNcIjoge1xuICAgIGlkOiBcInJvdXRlcy9hcHAvdXNlcnMvJHVzZXJuYW1lL25vdGlmaWNhdGlvbnNcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYXBwL3VzZXJzLyR1c2VybmFtZVwiLFxuICAgIHBhdGg6IFwibm90aWZpY2F0aW9uc1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxMFxuICB9LFxuICBcInJvdXRlcy9hcHAvdXNlcnMvJHVzZXJuYW1lL2VudHJpZXNcIjoge1xuICAgIGlkOiBcInJvdXRlcy9hcHAvdXNlcnMvJHVzZXJuYW1lL2VudHJpZXNcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYXBwL3VzZXJzLyR1c2VybmFtZVwiLFxuICAgIHBhdGg6IFwiZW50cmllc1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxMVxuICB9LFxuICBcInJvdXRlcy9hcHAvdXNlcnMvJHVzZXJuYW1lL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYXBwL3VzZXJzLyR1c2VybmFtZS9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9hcHAvdXNlcnMvJHVzZXJuYW1lXCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMTJcbiAgfSxcbiAgXCJyb3V0ZXMvYXBwL3VzZXJzLyR1c2VybmFtZS9saWtlc1wiOiB7XG4gICAgaWQ6IFwicm91dGVzL2FwcC91c2Vycy8kdXNlcm5hbWUvbGlrZXNcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYXBwL3VzZXJzLyR1c2VybmFtZVwiLFxuICAgIHBhdGg6IFwibGlrZXNcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMTNcbiAgfSxcbiAgXCJyb3V0ZXMvYXBwL2VudHJpZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9hcHAvZW50cmllcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9hcHBcIixcbiAgICBwYXRoOiBcImVudHJpZXNcIixcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTE0XG4gIH0sXG4gIFwicm91dGVzL2FwcC9lbnRyaWVzL25ld1wiOiB7XG4gICAgaWQ6IFwicm91dGVzL2FwcC9lbnRyaWVzL25ld1wiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9hcHBcIixcbiAgICBwYXRoOiBcImVudHJpZXMvbmV3XCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTE1XG4gIH1cbn07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcidcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gJ3JlbWl4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuXHRyZXF1ZXN0OiBSZXF1ZXN0LFxuXHRyZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcblx0cmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuXHRyZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dCxcbikge1xuXHRsZXQgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG5cdFx0PFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz4sXG5cdClcblxuXHRyZXNwb25zZUhlYWRlcnMuc2V0KCdDb250ZW50LVR5cGUnLCAndGV4dC9odG1sJylcblxuXHRyZXR1cm4gbmV3IFJlc3BvbnNlKCc8IURPQ1RZUEUgaHRtbD4nICsgbWFya3VwLCB7XG5cdFx0c3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG5cdFx0aGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuXHR9KVxufVxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcblx0TGlua3MsXG5cdExpdmVSZWxvYWQsXG5cdE1ldGEsXG5cdE1ldGFGdW5jdGlvbixcblx0T3V0bGV0LFxuXHRTY3JpcHRzLFxuXHRTY3JvbGxSZXN0b3JhdGlvbixcblx0dXNlQ2F0Y2gsXG5cdHVzZUxvY2F0aW9uLFxufSBmcm9tICdyZW1peCdcbmltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgZ2xvYmFsU3R5bGVzVXJsIGZyb20gJ34vc3R5bGVzL2dsb2JhbC5jc3MnXG5pbXBvcnQgYmFzaWNTdHlsZXNVcmwgZnJvbSAnfi9zdHlsZXMvYmFzaWMuY3NzJ1xuaW1wb3J0IEVycm9yUGFnZSBmcm9tICcuL2NvbXBvbmVudHMvZXJyb3ItcGFnZSdcblxuLyoqXG4gKiBUaGUgYGxpbmtzYCBleHBvcnQgaXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gYXJyYXkgb2Ygb2JqZWN0cyB0aGF0IG1hcCB0b1xuICogdGhlIGF0dHJpYnV0ZXMgZm9yIGFuIEhUTUwgYDxsaW5rPmAgZWxlbWVudC4gVGhlc2Ugd2lsbCBsb2FkIGA8bGluaz5gIHRhZ3Mgb25cbiAqIGV2ZXJ5IHJvdXRlIGluIHRoZSBhcHAsIGJ1dCBpbmRpdmlkdWFsIHJvdXRlcyBjYW4gaW5jbHVkZSB0aGVpciBvd24gbGlua3NcbiAqIHRoYXQgYXJlIGF1dG9tYXRpY2FsbHkgdW5sb2FkZWQgd2hlbiBhIHVzZXIgbmF2aWdhdGVzIGF3YXkgZnJvbSB0aGUgcm91dGUuXG4gKlxuICogaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2FwcCNsaW5rc1xuICovXG5leHBvcnQgbGV0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuXHRyZXR1cm4gW1xuXHRcdHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IGdsb2JhbFN0eWxlc1VybCB9LFxuXHRcdHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IGJhc2ljU3R5bGVzVXJsIH0sXG5cdFx0eyByZWw6ICdwcmVjb25uZWN0JywgaHJlZjogJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20nIH0sXG5cdFx0e1xuXHRcdFx0cmVsOiAncHJlY29ubmVjdCcsXG5cdFx0XHRocmVmOiAnaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbScsXG5cdFx0XHRjcm9zc09yaWdpbjogJ2Fub255bW91cycsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRyZWw6ICdzdHlsZXNoZWV0Jyxcblx0XHRcdGhyZWY6XG5cdFx0XHRcdCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1hbnJvcGU6d2dodEA0MDA7NjAwJmZhbWlseT1TcGVjdHJhbDp3Z2h0QDgwMCZkaXNwbGF5PXN3YXAnLFxuXHRcdFx0Y3Jvc3NPcmlnaW46ICdhbm9ueW1vdXMnLFxuXHRcdH0sXG5cdFx0eyByZWw6ICdpY29uJywgaHJlZjogJy9mYXZpY29uLnBuZycgfSxcblx0XHR7IHJlbDogJ2ljb24nLCBocmVmOiAnL2Zhdmljb24uaWNvJyB9LFxuXHRcdHsgcmVsOiAnaWNvbicsIGhyZWY6ICcvZmF2aWNvbi5zdmcnIH0sXG5cdFx0e1xuXHRcdFx0cmVsOiAnaWNvbicsXG5cdFx0XHRocmVmOiAnL2Zhdmljb24tZGFyay5wbmcnLFxuXHRcdFx0bWVkaWE6ICdwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaycsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRyZWw6ICdpY29uJyxcblx0XHRcdGhyZWY6ICcvZmF2aWNvbi1kYXJrLmljbycsXG5cdFx0XHRtZWRpYTogJ3ByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrJyxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHJlbDogJ2ljb24nLFxuXHRcdFx0aHJlZjogJy9mYXZpY29uLWRhcmsuc3ZnJyxcblx0XHRcdG1lZGlhOiAncHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmsnLFxuXHRcdH0sXG5cdFx0eyByZWw6ICdtYW5pZmVzdCcsIGhyZWY6ICcvbWFuaWZlc3QuanNvbicgfSxcblx0XVxufVxuXG5leHBvcnQgbGV0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnbW9iaWxlLXdlYi1hcHAtY2FwYWJsZSc6ICd5ZXMnLFxuXHRcdCdhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlJzogJ3llcycsXG5cdFx0J2FwcGxpY2F0aW9uLW5hbWUnOiAnU2hlaWthIERpYXJ5Jyxcblx0XHQnYXBwbGUtbW9iaWxlLXdlYi1hcHAtdGl0bGUnOiAnU2hlaWthIERpYXJ5Jyxcblx0XHQndGhlbWUtY29sb3InOiAnIzUwNDYzYicsXG5cdFx0J21zYXBwbGljYXRpb24tbmF2YnV0dG9uLWNvbG9yJzogJyM1MDQ2M2InLFxuXHRcdCdhcHBsZS1tb2JpbGUtd2ViLWFwcC1zdGF0dXMtYmFyLXN0eWxlJzogJ2JsYWNrLXRyYW5zbHVjZW50Jyxcblx0XHQnbXNhcHBsaWNhdGlvbi1zdGFydHVybCc6ICcvJyxcblx0XHR2aWV3cG9ydDogJ3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBzaHJpbmstdG8tZml0PW5vJyxcblx0fVxufVxuXG4vKipcbiAqIFRoZSByb290IG1vZHVsZSdzIGRlZmF1bHQgZXhwb3J0IGlzIGEgY29tcG9uZW50IHRoYXQgcmVuZGVycyB0aGUgY3VycmVudFxuICogcm91dGUgdmlhIHRoZSBgPE91dGxldCAvPmAgY29tcG9uZW50LiBUaGluayBvZiB0aGlzIGFzIHRoZSBnbG9iYWwgbGF5b3V0XG4gKiBjb21wb25lbnQgZm9yIHlvdXIgYXBwLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG5cdHJldHVybiAoXG5cdFx0PERvY3VtZW50PlxuXHRcdFx0PExheW91dD5cblx0XHRcdFx0PE91dGxldCAvPlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0PC9Eb2N1bWVudD5cblx0KVxufVxuXG5mdW5jdGlvbiBEb2N1bWVudCh7XG5cdGNoaWxkcmVuLFxuXHR0aXRsZSxcbn06IHtcblx0Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxuXHR0aXRsZT86IHN0cmluZ1xufSkge1xuXHRyZXR1cm4gKFxuXHRcdDxodG1sIGxhbmc9XCJlblwiPlxuXHRcdFx0PGhlYWQ+XG5cdFx0XHRcdDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG5cdFx0XHRcdHt0aXRsZSA/IDx0aXRsZT57dGl0bGV9PC90aXRsZT4gOiBudWxsfVxuXHRcdFx0XHQ8TWV0YSAvPlxuXHRcdFx0XHQ8TGlua3MgLz5cblx0XHRcdDwvaGVhZD5cblx0XHRcdDxib2R5IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM1MDQ2M2InIH19PlxuXHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdDxSb3V0ZUNoYW5nZUFubm91bmNlbWVudCAvPlxuXHRcdFx0XHQ8U2Nyb2xsUmVzdG9yYXRpb24gLz5cblx0XHRcdFx0PFNjcmlwdHMgLz5cblx0XHRcdFx0e3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICYmIDxMaXZlUmVsb2FkIC8+fVxuXHRcdFx0PC9ib2R5PlxuXHRcdDwvaHRtbD5cblx0KVxufVxuXG5mdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9OiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjx7fT4pIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHctZnVsbCBoLWZ1bGwgdGV4dC1iYXNlIGJnLXByaW1hcnktODAwIGZsZXggZmxleC1jb2xcIj5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSgpIHtcblx0bGV0IGNhdWdodCA9IHVzZUNhdGNoKClcblxuXHRsZXQgbWVzc2FnZVxuXHRzd2l0Y2ggKGNhdWdodC5zdGF0dXMpIHtcblx0XHRjYXNlIDQwMTpcblx0XHRcdG1lc3NhZ2UgPSBcIllvdSBkb24ndCBoYXZlIGFjY2VzIHRvIHRoaXMgcGFnZVwiXG5cdFx0XHRicmVha1xuXHRcdGNhc2UgNDA0OlxuXHRcdFx0bWVzc2FnZSA9ICdUaGlzIHBhZ2UgZG9lcyBub3QgZXhpc3QnXG5cdFx0XHRicmVha1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHRocm93IGNhdWdodFxuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8RG9jdW1lbnQgdGl0bGU9e2NhdWdodC5zdGF0dXNUZXh0fT5cblx0XHRcdDxFcnJvclBhZ2UgbWVzc2FnZT17bWVzc2FnZX0gLz5cblx0XHQ8L0RvY3VtZW50PlxuXHQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KHsgZXJyb3IgfTogeyBlcnJvcjogRXJyb3IgfSkge1xuXHRjb25zb2xlLmVycm9yKGVycm9yKVxuXHRyZXR1cm4gKFxuXHRcdDxEb2N1bWVudCB0aXRsZT1cIkVycm9yIVwiPlxuXHRcdFx0PEVycm9yUGFnZSAvPlxuXHRcdDwvRG9jdW1lbnQ+XG5cdClcbn1cblxuLyoqXG4gKiBQcm92aWRlcyBhbiBhbGVydCBmb3Igc2NyZWVuIHJlYWRlciB1c2VycyB3aGVuIHRoZSByb3V0ZSBjaGFuZ2VzLlxuICovXG5jb25zdCBSb3V0ZUNoYW5nZUFubm91bmNlbWVudCA9IFJlYWN0Lm1lbW8oKCkgPT4ge1xuXHRsZXQgW2h5ZHJhdGVkLCBzZXRIeWRyYXRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcblx0bGV0IFtpbm5lckh0bWwsIHNldElubmVySHRtbF0gPSBSZWFjdC51c2VTdGF0ZSgnJylcblx0bGV0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxuXG5cdFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0c2V0SHlkcmF0ZWQodHJ1ZSlcblx0fSwgW10pXG5cblx0bGV0IGZpcnN0UmVuZGVyUmVmID0gUmVhY3QudXNlUmVmKHRydWUpXG5cdFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Ly8gU2tpcCB0aGUgZmlyc3QgcmVuZGVyIGJlY2F1c2Ugd2UgZG9uJ3Qgd2FudCBhbiBhbm5vdW5jZW1lbnQgb24gdGhlXG5cdFx0Ly8gaW5pdGlhbCBwYWdlIGxvYWQuXG5cdFx0aWYgKGZpcnN0UmVuZGVyUmVmLmN1cnJlbnQpIHtcblx0XHRcdGZpcnN0UmVuZGVyUmVmLmN1cnJlbnQgPSBmYWxzZVxuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXG5cdFx0bGV0IHBhZ2VUaXRsZSA9IGxvY2F0aW9uLnBhdGhuYW1lID09PSAnLycgPyAnSG9tZSBwYWdlJyA6IGRvY3VtZW50LnRpdGxlXG5cdFx0c2V0SW5uZXJIdG1sKGBOYXZpZ2F0ZWQgdG8gJHtwYWdlVGl0bGV9YClcblx0fSwgW2xvY2F0aW9uLnBhdGhuYW1lXSlcblxuXHQvLyBSZW5kZXIgbm90aGluZyBvbiB0aGUgc2VydmVyLiBUaGUgbGl2ZSByZWdpb24gcHJvdmlkZXMgbm8gdmFsdWUgdW5sZXNzXG5cdC8vIHNjcmlwdHMgYXJlIGxvYWRlZCBhbmQgdGhlIGJyb3dzZXIgdGFrZXMgb3ZlciBub3JtYWwgcm91dGluZy5cblx0aWYgKCFoeWRyYXRlZCkge1xuXHRcdHJldHVybiBudWxsXG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdGFyaWEtbGl2ZT1cImFzc2VydGl2ZVwiXG5cdFx0XHRhcmlhLWF0b21pY1xuXHRcdFx0aWQ9XCJyb3V0ZS1jaGFuZ2UtcmVnaW9uXCJcblx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdGJvcmRlcjogJzAnLFxuXHRcdFx0XHRjbGlwUGF0aDogJ2luc2V0KDEwMCUpJyxcblx0XHRcdFx0Y2xpcDogJ3JlY3QoMCAwIDAgMCknLFxuXHRcdFx0XHRoZWlnaHQ6ICcxcHgnLFxuXHRcdFx0XHRtYXJnaW46ICctMXB4Jyxcblx0XHRcdFx0b3ZlcmZsb3c6ICdoaWRkZW4nLFxuXHRcdFx0XHRwYWRkaW5nOiAnMCcsXG5cdFx0XHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRcdFx0XHR3aWR0aDogJzFweCcsXG5cdFx0XHRcdHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuXHRcdFx0XHR3b3JkV3JhcDogJ25vcm1hbCcsXG5cdFx0XHR9fT5cblx0XHRcdHtpbm5lckh0bWx9XG5cdFx0PC9kaXY+XG5cdClcbn0pXG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFcnJvclBhZ2Uoe1xuXHRtZXNzYWdlID0gJ1RoZXJlIHdhcyBhbiBlcnJvci4uLicsXG59OiB7XG5cdG1lc3NhZ2U/OiBzdHJpbmdcbn0pIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrIHRleHQtd2hpdGUgdy1zY3JlZW4gaC1zY3JlZW4gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuXHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwiZm9udC10aXRsZSB0ZXh0LTZ4bCB0ZXh0LWNlbnRlciB0cmFuc2Zvcm0gc2NhbGUteC03NVwiPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtOHhsXCI+Rzwvc3Bhbj5BTUUgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC04eGxcIj5PPC9zcGFuPlxuXHRcdFx0XHRcdFZFUlxuXHRcdFx0XHQ8L2gxPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJteC1hdXRvIG10LTIgbWItNVwiPnttZXNzYWdlfTwvcD5cblx0XHRcdFx0PExpbmsgY2xhc3NOYW1lPVwidWkgYnV0dG9uXCIgdG89XCIvYXBwL2VudHJpZXNcIj5cblx0XHRcdFx0XHRCYWNrIHRvIHRoZSBlbnRyaWVzXG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpXG59XG4iLCAiaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tICd+L3V0aWxzL3Nlc3Npb24uc2VydmVyJ1xuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgcmV0dXJuIGxvZ291dChyZXF1ZXN0KVxufVxuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiByZWRpcmVjdCgnLycpXG59XG4iLCAiaW1wb3J0IHsgUHJpc21hLCBVc2VyIH0gZnJvbSAnLnByaXNtYS9jbGllbnQnXG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCdcbmltcG9ydCB7IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlLCByZWRpcmVjdCB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgZGIgfSBmcm9tICcuL2RiLnNlcnZlcidcblxudHlwZSBMb2dpbkZvcm0gPSB7XG5cdHVzZXJuYW1lOiBzdHJpbmdcblx0cGFzc3dvcmQ6IHN0cmluZ1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXIoeyB1c2VybmFtZSwgcGFzc3dvcmQgfTogTG9naW5Gb3JtKSB7XG5cdGNvbnNvbGUubG9nKCdSZXF1ZXN0IHRvIHJlZ2lzdGVyIHdpdGggdXNlcm5hbWUnLCB1c2VybmFtZSlcblx0bGV0IHBhc3N3b3JkSGFzaCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMClcblx0cmV0dXJuIGRiLnVzZXIuY3JlYXRlKHtcblx0XHRkYXRhOiB7IHVzZXJuYW1lLCBwYXNzd29yZEhhc2ggfSxcblx0fSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH06IExvZ2luRm9ybSkge1xuXHRjb25zb2xlLmxvZygnUmVxdWVzdCB0byBsb2dpbiB3aXRoIHVzZXJuYW1lJywgdXNlcm5hbWUpXG5cdGxldCB1c2VyID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcblx0XHR3aGVyZTogeyB1c2VybmFtZSB9LFxuXHR9KVxuXHRpZiAoIXVzZXIpIHtcblx0XHRjb25zb2xlLmxvZygnVXNlciBkb2VzIG5vdCBleGlzdHMnKVxuXHRcdHJldHVybiBudWxsXG5cdH1cblxuXHRsZXQgaXNDb3JyZWN0UGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZEhhc2gpXG5cdGlmICghaXNDb3JyZWN0UGFzc3dvcmQpIHtcblx0XHRjb25zb2xlLmxvZygnSW5jb3JyZWN0IHBhc3N3b3JkJylcblx0XHRyZXR1cm4gbnVsbFxuXHR9XG5cblx0cmV0dXJuIHVzZXJcbn1cblxubGV0IHNlc3Npb25TZWNyZXQgPSBwcm9jZXNzLmVudi5TRVNTSU9OX1NFQ1JFVFxuaWYgKCFzZXNzaW9uU2VjcmV0KSB7XG5cdHRocm93IG5ldyBFcnJvcignU0VTU0lPTl9TRUNSRVQgbXVzdCBiZSBzZXQnKVxufVxuXG5sZXQgc3RvcmFnZSA9IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlKHtcblx0Y29va2llOiB7XG5cdFx0bmFtZTogJ1JKX3Nlc3Npb24nLFxuXHRcdC8vIG5vcm1hbGx5IHlvdSB3YW50IHRoaXMgdG8gYmUgYHNlY3VyZTogdHJ1ZWBcblx0XHQvLyBidXQgdGhhdCBkb2Vzbid0IHdvcmsgb24gbG9jYWxob3N0IGZvciBTYWZhcmlcblx0XHQvLyBodHRwczovL3dlYi5kZXYvd2hlbi10by11c2UtbG9jYWwtaHR0cHMvXG5cdFx0c2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxuXHRcdHNlY3JldHM6IFtzZXNzaW9uU2VjcmV0XSxcblx0XHRzYW1lU2l0ZTogJ2xheCcsXG5cdFx0cGF0aDogJy8nLFxuXHRcdG1heEFnZTogNjAgKiA2MCAqIDI0ICogMzAsXG5cdFx0aHR0cE9ubHk6IHRydWUsXG5cdH0sXG59KVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlclNlc3Npb24ocmVxdWVzdDogUmVxdWVzdCkge1xuXHRyZXR1cm4gc3RvcmFnZS5nZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoJ0Nvb2tpZScpKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcklkKHJlcXVlc3Q6IFJlcXVlc3QpIHtcblx0bGV0IHNlc3Npb24gPSBhd2FpdCBnZXRVc2VyU2Vzc2lvbihyZXF1ZXN0KVxuXHRsZXQgdXNlcklkID0gc2Vzc2lvbi5nZXQoJ3VzZXJJZCcpXG5cdGlmICghdXNlcklkIHx8IHR5cGVvZiB1c2VySWQgIT09ICdzdHJpbmcnKSByZXR1cm4gbnVsbFxuXHRyZXR1cm4gdXNlcklkXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXF1aXJlVXNlcklkKFxuXHRyZXF1ZXN0OiBSZXF1ZXN0LFxuXHRyZWRpcmVjdFRvOiBzdHJpbmcgPSBuZXcgVVJMKHJlcXVlc3QudXJsKS5wYXRobmFtZSxcbikge1xuXHRjb25zb2xlLmxvZygnUmVxdWVzdCB0byBnZXQgdXNlciBpZCBmcm9tIHNlc3Npb24nKVxuXHRsZXQgc2Vzc2lvbiA9IGF3YWl0IGdldFVzZXJTZXNzaW9uKHJlcXVlc3QpXG5cdGxldCB1c2VySWQgPSBzZXNzaW9uLmdldCgndXNlcklkJylcblx0aWYgKCF1c2VySWQgfHwgdHlwZW9mIHVzZXJJZCAhPT0gJ3N0cmluZycpIHtcblx0XHRjb25zb2xlLmxvZyhcblx0XHRcdCdVbmFibGUgdG8gcmV0cmlldmUgdXNlciBpZCBmcm9tIHNlc3Npb24sIHJlZGlyZWN0aW5nIHRvIGxvZ2luIHBhZ2Ugd2l0aCByZWRpcmVjdF90byA9ICcsXG5cdFx0XHRyZWRpcmVjdFRvLFxuXHRcdClcblx0XHRsZXQgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhbWydyZWRpcmVjdFRvJywgcmVkaXJlY3RUb11dKVxuXHRcdHRocm93IHJlZGlyZWN0KGAvbG9naW4/JHtzZWFyY2hQYXJhbXN9YClcblx0fVxuXHRyZXR1cm4gdXNlcklkXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyKFxuXHRyZXF1ZXN0OiBSZXF1ZXN0LFxuXHRpbmNsdWRlPzogUHJpc21hLlVzZXJJbmNsdWRlLFxuKTogUHJvbWlzZTwoVXNlciAmIHsgW2sgaW4ga2V5b2YgUHJpc21hLlVzZXJJbmNsdWRlXTogYW55IH0pIHwgbnVsbD4ge1xuXHRsZXQgdXNlcklkID0gYXdhaXQgZ2V0VXNlcklkKHJlcXVlc3QpXG5cdGlmICh0eXBlb2YgdXNlcklkICE9PSAnc3RyaW5nJykge1xuXHRcdGNvbnNvbGUubG9nKCdVbmFibGUgdG8gZ2V0IHVzZXInKVxuXHRcdHJldHVybiBudWxsXG5cdH1cblxuXHR0cnkge1xuXHRcdGxldCB1c2VyID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcblx0XHRcdHdoZXJlOiB7IGlkOiB1c2VySWQgfSxcblx0XHRcdGluY2x1ZGUsXG5cdFx0fSlcblx0XHRyZXR1cm4gdXNlclxuXHR9IGNhdGNoIHtcblx0XHR0aHJvdyBsb2dvdXQocmVxdWVzdClcblx0fVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nb3V0KHJlcXVlc3Q6IFJlcXVlc3QpIHtcblx0Y29uc29sZS5sb2coJ1JlcXVlc3QgdG8gbG9nb3V0JylcblxuXHRsZXQgcmVkaXJlY3RUbyA9XG5cdFx0KGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKSkuZ2V0KCdyZWRpcmVjdFRvJyk/LnRvU3RyaW5nKCkgPz8gJy9sb2dpbidcblxuXHRsZXQgc2Vzc2lvbiA9IGF3YWl0IHN0b3JhZ2UuZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KCdDb29raWUnKSlcblx0cmV0dXJuIHJlZGlyZWN0KHJlZGlyZWN0VG8sIHtcblx0XHRoZWFkZXJzOiB7XG5cdFx0XHQnU2V0LUNvb2tpZSc6IGF3YWl0IHN0b3JhZ2UuZGVzdHJveVNlc3Npb24oc2Vzc2lvbiksXG5cdFx0fSxcblx0fSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXJTZXNzaW9uKHVzZXJJZDogc3RyaW5nLCByZWRpcmVjdFRvOiBzdHJpbmcpIHtcblx0Y29uc29sZS5sb2coXG5cdFx0J1JlcXVlc3QgdG8gY3JlYXRlIGEgdXNlciBzZXNzaW9uIGZvciB1c2VyIHdpdGggaWQnLFxuXHRcdHVzZXJJZCxcblx0XHQnYW5kIHRvIHJlZGlyZWN0IHRvJyxcblx0XHRyZWRpcmVjdFRvLFxuXHQpXG5cdGxldCBzZXNzaW9uID0gYXdhaXQgc3RvcmFnZS5nZXRTZXNzaW9uKClcblx0c2Vzc2lvbi5zZXQoJ3VzZXJJZCcsIHVzZXJJZClcblx0cmV0dXJuIHJlZGlyZWN0KHJlZGlyZWN0VG8sIHtcblx0XHRoZWFkZXJzOiB7XG5cdFx0XHQnU2V0LUNvb2tpZSc6IGF3YWl0IHN0b3JhZ2UuY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcblx0XHR9LFxuXHR9KVxufVxuIiwgImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5sZXQgZGI6IFByaXNtYUNsaWVudFxuXG5kZWNsYXJlIGdsb2JhbCB7XG5cdHZhciBfX2RiOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWRcbn1cblxuLy8gdGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBpbiBkZXZlbG9wbWVudCB3ZSBkb24ndCB3YW50IHRvIHJlc3RhcnRcbi8vIHRoZSBzZXJ2ZXIgd2l0aCBldmVyeSBjaGFuZ2UsIGJ1dCB3ZSB3YW50IHRvIG1ha2Ugc3VyZSB3ZSBkb24ndFxuLy8gY3JlYXRlIGEgbmV3IGNvbm5lY3Rpb24gdG8gdGhlIERCIHdpdGggZXZlcnkgY2hhbmdlIGVpdGhlci5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG5cdGRiID0gbmV3IFByaXNtYUNsaWVudCgpXG5cdGRiLiRjb25uZWN0KClcbn0gZWxzZSB7XG5cdGlmICghZ2xvYmFsLl9fZGIpIHtcblx0XHRnbG9iYWwuX19kYiA9IG5ldyBQcmlzbWFDbGllbnQoKVxuXHRcdGdsb2JhbC5fX2RiLiRjb25uZWN0KClcblx0fVxuXHRkYiA9IGdsb2JhbC5fX2RiXG59XG5cbmV4cG9ydCB7IGRiIH1cbiIsICJpbXBvcnQgeyBMaW5rLCBNZXRhRnVuY3Rpb24gfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHZlcnNpb24sIHJlcG9zaXRvcnksIGF1dGhvciB9IGZyb20gJy4uLy4uL3BhY2thZ2UuanNvbidcblxuZXhwb3J0IGxldCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dGl0bGU6ICdTaGVpa2FoIERpYXJ5Jyxcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFBhZ2UoKSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGJnLVt1cmwoJy9hc3NldHMvbWFpbi1iZy5qcGcnKV0gYmctdG9wXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgZmxleCBiZy1ncmFkaWVudC10by1sIGZyb20tYmxhY2svNjBcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1sLWF1dG8gcHktMTAgcHgtNSBtZDpweC0xMCBsZzpweC0yMCB3LWZ1bGwgbWQ6dy0yLzMgbGc6dy0xLzIgeGw6dy0xLzNcIj5cblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwiZm9udC10aXRsZSB0ZXh0LTZ4bCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC04eGwgdHJhY2tpbmctWy0ycmVtXVwiPlM8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgc2NhbGUteC03NVwiPkhFSUtBSDwvc3Bhbj4gPGJyIC8+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTh4bCB0cmFja2luZy1bLTEuMXJlbV1cIj5EPC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHNjYWxlLXgtNzVcIj5JQVJZPC9zcGFuPlxuXHRcdFx0XHRcdDwvaDE+XG5cdFx0XHRcdFx0PGgyPlxuXHRcdFx0XHRcdFx0T3BlbiBTb3VyY2UgYXBwIHRvIHNoYXJlIHBpY3R1cmUgZnJvbSA8YnIgLz5cblx0XHRcdFx0XHRcdDxzdHJvbmc+VGhlIExlZ2VuZCBvZiBaZWxkYSA6IEJyZWF0aCBvZiB0aGUgV2lsZDwvc3Ryb25nPlxuXHRcdFx0XHRcdDwvaDI+XG5cdFx0XHRcdFx0PG5hdiBjbGFzc05hbWU9XCJteS1hdXRvXCI+XG5cdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTUgdGV4dC14bCBpdGVtcy1lbmRcIj5cblx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0XHRcdFx0XHR0bz1cIi9hcHBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwib3BhY2l0eS02MCBob3ZlcjpiZWZvcmU6Y29udGVudC1bJz4nXSBob3ZlcjpvcGFjaXR5LTEwMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0T3BlbiB0aGUgYXBwXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm9wYWNpdHktNjAgaG92ZXI6YmVmb3JlOmNvbnRlbnQtWyc+J10gaG92ZXI6b3BhY2l0eS0xMDBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9RdWVudGluV2lkbG9jaGVyL3NoZWlrYWgtZGlhcnlcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFNlZSBvbiBHaXRIdWJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdDwvbmF2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuXHRcdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwib3BhY2l0eS02MFwiPlZlci4ge3ZlcnNpb259PC9saT5cblx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cIm9wYWNpdHktNjAgaG92ZXI6b3BhY2l0eS0xMDBcIiBocmVmPXtyZXBvc2l0b3J5LnVybH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRTZWUgb24gR2l0SHViXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwib3BhY2l0eS02MFwiPntuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IC0gPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cIm9wYWNpdHktNjAgaG92ZXI6b3BhY2l0eS0xMDBcIiBocmVmPXthdXRob3IudXJsfT5cblx0XHRcdFx0XHRcdFx0XHRcdHthdXRob3IubmFtZX1cblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpXG59XG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZpRXllLCBGaUV5ZU9mZiB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJ1xuaW1wb3J0IHtcblx0Rm9ybSxcblx0TGluayxcblx0TGlua3NGdW5jdGlvbixcblx0TWV0YUZ1bmN0aW9uLFxuXHR1c2VBY3Rpb25EYXRhLFxuXHR1c2VTZWFyY2hQYXJhbXMsXG59IGZyb20gJ3JlbWl4J1xuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICd+L2NvbXBvbmVudHMvZXJyb3ItbWVzc2FnZSdcbmltcG9ydCB7IGxvZ2luQWN0aW9uLCBMb2dpbkZvcm1FcnJvciB9IGZyb20gJ34vZmVhdHVyZXMvbG9naW4vYXBpJ1xuaW1wb3J0IHsgaW52ZXJ0IH0gZnJvbSAnfi91dGlscy9mdW5jdGlvbmFsLnV0aWxzJ1xuaW1wb3J0IHN0eWxlc1VybCBmcm9tICcuLi9zdHlsZXMvbG9naW4uY3NzJ1xuXG5leHBvcnQgbGV0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuXHRyZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlc1VybCB9XVxufVxuXG5leHBvcnQgbGV0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0aXRsZTogJ0xvZ2luIHwgU2hlaWthaCBEaWFyeScsXG5cdH1cbn1cblxuZXhwb3J0IGxldCBhY3Rpb24gPSBsb2dpbkFjdGlvblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcblx0bGV0IGVycm9ycyA9IHVzZUFjdGlvbkRhdGE8TG9naW5Gb3JtRXJyb3IgfCB1bmRlZmluZWQ+KClcblx0bGV0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKClcblxuXHRjb25zdCBbc2hvd1Bhc3N3b3JkLCBzZXRTaG93UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpXG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuXHRcdFx0XHQ8aDE+TG9naW48L2gxPlxuXHRcdFx0XHQ8Rm9ybVxuXHRcdFx0XHRcdG1ldGhvZD1cInBvc3RcIlxuXHRcdFx0XHRcdGFyaWEtZGVzY3JpYmVkYnk9e2Vycm9ycz8uX2Vycm9ycyA/ICdmb3JtLWVycm9yLW1lc3NhZ2UnIDogdW5kZWZpbmVkfT5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9XCJoaWRkZW5cIlxuXHRcdFx0XHRcdFx0bmFtZT1cInJlZGlyZWN0VG9cIlxuXHRcdFx0XHRcdFx0dmFsdWU9e3NlYXJjaFBhcmFtcy5nZXQoJ3JlZGlyZWN0VG8nKSA/PyB1bmRlZmluZWR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8ZmllbGRzZXQ+XG5cdFx0XHRcdFx0XHQ8bGVnZW5kIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Mb2dpbiBvciBSZWdpc3Rlcj88L2xlZ2VuZD5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW9cIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImxvZ2luVHlwZVwiIHZhbHVlPVwibG9naW5cIiBkZWZhdWx0Q2hlY2tlZCAvPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+TG9naW48L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJsb2dpblR5cGVcIiB2YWx1ZT1cInJlZ2lzdGVyXCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlJlZ2lzdGVyPC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZS1pbnB1dFwiPlVzZXJuYW1lPC9sYWJlbD5cblx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdHRhYkluZGV4PXsxfVxuXHRcdFx0XHRcdFx0XHRpZD1cInVzZXJuYW1lLWlucHV0XCJcblx0XHRcdFx0XHRcdFx0bmFtZT1cInVzZXJuYW1lXCJcblx0XHRcdFx0XHRcdFx0YXJpYS1pbnZhbGlkPXtCb29sZWFuKGVycm9ycz8udXNlcm5hbWUpfVxuXHRcdFx0XHRcdFx0XHRhcmlhLWRlc2NyaWJlZGJ5PXtlcnJvcnM/LnVzZXJuYW1lID8gJ3VzZXJuYW1lLWVycm9yJyA6IHVuZGVmaW5lZH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiIHJvbGU9XCJzZXBhcmF0b3JcIj48L2Rpdj5cblx0XHRcdFx0XHRcdDxFcnJvck1lc3NhZ2UgY2xhc3NOYW1lPVwibWwtYXV0byBtci0yXCIgZXJyb3I9e2Vycm9ycz8udXNlcm5hbWV9IC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIiBodG1sRm9yPVwicGFzc3dvcmQtaW5wdXRcIj5cblx0XHRcdFx0XHRcdFx0PHNwYW4+UGFzc3dvcmQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldFNob3dQYXNzd29yZChpbnZlcnQpfT5cblx0XHRcdFx0XHRcdFx0XHR7c2hvd1Bhc3N3b3JkID8gPEZpRXllT2ZmIC8+IDogPEZpRXllIC8+fVxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0aWQ9XCJwYXNzd29yZC1pbnB1dFwiXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRcdHRhYkluZGV4PXsxfVxuXHRcdFx0XHRcdFx0XHR0eXBlPXtzaG93UGFzc3dvcmQgPyAndGV4dCcgOiAncGFzc3dvcmQnfVxuXHRcdFx0XHRcdFx0XHRhcmlhLWludmFsaWQ9e0Jvb2xlYW4oZXJyb3JzPy5wYXNzd29yZCkgfHwgdW5kZWZpbmVkfVxuXHRcdFx0XHRcdFx0XHRhcmlhLWRlc2NyaWJlZGJ5PXtlcnJvcnM/LnBhc3N3b3JkID8gJ3Bhc3N3b3JkLWVycm9yJyA6IHVuZGVmaW5lZH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiIHJvbGU9XCJzZXBhcmF0b3JcIj48L2Rpdj5cblx0XHRcdFx0XHRcdDxFcnJvck1lc3NhZ2UgY2xhc3NOYW1lPVwibWwtYXV0byBtci0yXCIgZXJyb3I9e2Vycm9ycz8ucGFzc3dvcmR9IC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBpZD1cImZvcm0tZXJyb3ItbWVzc2FnZVwiPlxuXHRcdFx0XHRcdFx0PEVycm9yTWVzc2FnZSBlcnJvcj17ZXJyb3JzfSBvbmx5Rmlyc3Q9e2ZhbHNlfSAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ1dHRvblwiPlxuXHRcdFx0XHRcdFx0U3VibWl0XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvRm9ybT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PG5hdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCByaWdodC0wIHAtNSBmb250LWJvbGRcIj5cblx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJmaWx0ZXIgaG92ZXI6ZHJvcC1zaGFkb3ctYmFzZSBmb2N1czpkcm9wLXNoYWRvdy1iYXNlXCJcblx0XHRcdFx0XHR0bz1cIi9hcHAvZW50cmllc1wiPlxuXHRcdFx0XHRcdFNlZSB0aGUgZW50cmllc1xuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHQ8L25hdj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuIiwgInR5cGUgRXJyb3JNZXNzYWdlUHJvcHMgPSB7XG5cdGVycm9yPzogeyBfZXJyb3JzPzogc3RyaW5nW10gfVxuXHRvbmx5Rmlyc3Q/OiBib29sZWFuXG5cdGNsYXNzTmFtZT86IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFcnJvck1lc3NhZ2Uoe1xuXHRlcnJvcixcblx0Y2xhc3NOYW1lID0gJycsXG5cdG9ubHlGaXJzdCA9IHRydWUsXG59OiBFcnJvck1lc3NhZ2VQcm9wcykge1xuXHRyZXR1cm4gZXJyb3I/Ll9lcnJvcnM/Lmxlbmd0aCA/IChcblx0XHQ8c21hbGwgY2xhc3NOYW1lPXsndGV4dC1zbSB0ZXh0LWRhbmdlci01MDAgJyArIGNsYXNzTmFtZX0+XG5cdFx0XHR7b25seUZpcnN0XG5cdFx0XHRcdD8gZXJyb3IuX2Vycm9yc1swXVxuXHRcdFx0XHQ6IGVycm9yLl9lcnJvcnMubWFwKChlLCBpLCBsKSA9PiAoXG5cdFx0XHRcdFx0XHQ8c3BhbiBrZXk9e2V9PlxuXHRcdFx0XHRcdFx0XHR7ZX0ge2kgPD0gbC5sZW5ndGggPyA8YnIgLz4gOiBudWxsfVxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQgICkpfVxuXHRcdDwvc21hbGw+XG5cdCkgOiBudWxsXG59XG4iLCAiaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnXG5pbXBvcnQgeyBkYiB9IGZyb20gJ34vdXRpbHMvZGIuc2VydmVyJ1xuaW1wb3J0IHsgbG9naW4sIGNyZWF0ZVVzZXJTZXNzaW9uLCByZWdpc3RlciB9IGZyb20gJ34vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXInXG5pbXBvcnQgeyBzYWZlUGFyc2VGb3JtRGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1kYXRhLnV0aWxzLnNlcnZlcidcblxubGV0IGZvcm1WYWxpZGF0b3IgPSB6Lm9iamVjdCh7XG5cdHVzZXJuYW1lOiB6LnN0cmluZygpLm1pbigxLCB7IG1lc3NhZ2U6ICdUaGUgdXNlcm5hbWUgaXMgcmVxdWlyZWQnIH0pLFxuXHRwYXNzd29yZDogelxuXHRcdC5zdHJpbmcoKVxuXHRcdC5taW4oNiwgeyBtZXNzYWdlOiAnVGhlIHBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzJyB9KSxcblx0cmVkaXJlY3RUbzogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuXHRsb2dpblR5cGU6IHoubGl0ZXJhbCgnbG9naW4nKS5vcih6LmxpdGVyYWwoJ3JlZ2lzdGVyJykpLFxufSlcblxuZXhwb3J0IHR5cGUgTG9naW5Gb3JtVHlwZSA9IHouaW5mZXI8dHlwZW9mIGZvcm1WYWxpZGF0b3I+XG5leHBvcnQgdHlwZSBMb2dpbkZvcm1FcnJvciA9IHouWm9kRm9ybWF0dGVkRXJyb3I8TG9naW5Gb3JtVHlwZT5cblxuZXhwb3J0IGxldCBsb2dpbkFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoe1xuXHRyZXF1ZXN0LFxufSk6IFByb21pc2U8UmVzcG9uc2UgfCBMb2dpbkZvcm1FcnJvcj4gPT4ge1xuXHRsZXQgcGFyc2VkRm9ybURhdGEgPSBhd2FpdCBzYWZlUGFyc2VGb3JtRGF0YShyZXF1ZXN0LCBmb3JtVmFsaWRhdG9yKVxuXG5cdGlmICghcGFyc2VkRm9ybURhdGEuc3VjY2Vzcykge1xuXHRcdHJldHVybiBwYXJzZWRGb3JtRGF0YS5lcnJvci5mb3JtYXQoKVxuXHR9XG5cblx0bGV0IHtcblx0XHRsb2dpblR5cGUsXG5cdFx0cGFzc3dvcmQsXG5cdFx0dXNlcm5hbWUsXG5cdFx0cmVkaXJlY3RUbyA9ICcvYXBwL2VudHJpZXMnLFxuXHR9ID0gcGFyc2VkRm9ybURhdGEuZGF0YVxuXG5cdHN3aXRjaCAobG9naW5UeXBlKSB7XG5cdFx0Y2FzZSAnbG9naW4nOiB7XG5cdFx0XHRsZXQgdXNlciA9IGF3YWl0IGxvZ2luKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pXG5cdFx0XHRpZiAoIXVzZXIpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRfZXJyb3JzOiBbJ1VzZXJuYW1lL1Bhc3N3b3JkIGNvbWJpbmF0aW9uIGlzIGluY29ycmVjdCddLFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY3JlYXRlVXNlclNlc3Npb24odXNlci5pZCwgcmVkaXJlY3RUbylcblx0XHR9XG5cblx0XHRjYXNlICdyZWdpc3Rlcic6IHtcblx0XHRcdGxldCB1c2VyRXhpc3RzID0gYXdhaXQgZGIudXNlci5maW5kRmlyc3Qoe1xuXHRcdFx0XHRzZWxlY3Q6IHsgaWQ6IHRydWUgfSxcblx0XHRcdFx0d2hlcmU6IHsgdXNlcm5hbWUgfSxcblx0XHRcdH0pXG5cblx0XHRcdGlmICh1c2VyRXhpc3RzKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dXNlcm5hbWU6IHtcblx0XHRcdFx0XHRcdF9lcnJvcnM6IFtgVXNlciB3aXRoIHVzZXJuYW1lICR7dXNlcm5hbWV9IGFscmVhZHkgZXhpc3RzYF0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRfZXJyb3JzOiBbXSxcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRsZXQgdXNlciA9IGF3YWl0IHJlZ2lzdGVyKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pXG5cblx0XHRcdGlmICghdXNlcikge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdF9lcnJvcnM6IFsnU29tZXRoaW5nIHdlbnQgd3JvbmcgdHJ5aW5nIHRvIGNyZWF0ZSBhIG5ldyB1c2VyLiddLFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY3JlYXRlVXNlclNlc3Npb24odXNlci5pZCwgcmVkaXJlY3RUbylcblx0XHR9XG5cdFx0ZGVmYXVsdDoge1xuXHRcdFx0cmV0dXJuIHsgX2Vycm9yczogWydMb2dpbiB0eXBlIGludmFsaWQnXSB9XG5cdFx0fVxuXHR9XG59XG4iLCAiaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCdcblxuZnVuY3Rpb24gZ2V0T2JqZWN0RnJvbUZvcm1EYXRhKHJlcXVlc3Q6IFJlcXVlc3QpIHtcblx0cmV0dXJuIHJlcXVlc3QuZm9ybURhdGEoKS50aGVuKGZkID0+IE9iamVjdC5mcm9tRW50cmllcyhmZC5lbnRyaWVzKCkpKVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1GaWVsZCh2YWw6IHVua25vd24gfCBudWxsKSB7XG5cdHN3aXRjaCAodmFsKSB7XG5cdFx0Y2FzZSAndHJ1ZSc6XG5cdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdGNhc2UgJ2ZhbHNlJzpcblx0XHRcdHJldHVybiBmYWxzZVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gdmFsXG5cdH1cbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtRmllbGRzKG9iajogYW55KSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhvYmogYXMgYW55KS5yZWR1Y2UoXG5cdFx0KGFjYywgaykgPT4gKHtcblx0XHRcdC4uLmFjYyxcblx0XHRcdFtrXTogdHJhbnNmb3JtRmllbGQob2JqW2tdKSxcblx0XHR9KSxcblx0XHR7fSxcblx0KVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Gb3JtRGF0YTxUIGV4dGVuZHMgei5ab2RSYXdTaGFwZT4odmFsaWRhdG9yOiB6LlpvZE9iamVjdDxUPikge1xuXHRyZXR1cm4gei5wcmVwcm9jZXNzKFxuXHRcdG9iaiA9PiAodHlwZW9mIG9iaiA9PSAnb2JqZWN0JyA/IHRyYW5zZm9ybUZpZWxkcyhvYmopIDogb2JqKSxcblx0XHR2YWxpZGF0b3IsXG5cdClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhZmVQYXJzZUZvcm1EYXRhPFQgZXh0ZW5kcyB6LlpvZFJhd1NoYXBlPihcblx0cmVxdWVzdDogUmVxdWVzdCxcblx0dmFsaWRhdG9yOiB6LlpvZE9iamVjdDxUPixcbikge1xuXHRyZXR1cm4gZ2V0T2JqZWN0RnJvbUZvcm1EYXRhKHJlcXVlc3QpLnRoZW4oeCA9PlxuXHRcdHRyYW5zZm9ybUZvcm1EYXRhKHZhbGlkYXRvcikuc2FmZVBhcnNlKHgpLFxuXHQpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwYXJzZUZvcm1EYXRhPFQgZXh0ZW5kcyB6LlpvZFJhd1NoYXBlPihcblx0cmVxdWVzdDogUmVxdWVzdCxcblx0dmFsaWRhdG9yOiB6LlpvZE9iamVjdDxUPixcbikge1xuXHRyZXR1cm4gZ2V0T2JqZWN0RnJvbUZvcm1EYXRhKHJlcXVlc3QpLnRoZW4oeCA9PlxuXHRcdHRyYW5zZm9ybUZvcm1EYXRhKHZhbGlkYXRvcikucGFyc2UoeCksXG5cdClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gaW52ZXJ0KHg6IGJvb2xlYW4pIHtcblx0cmV0dXJuICF4XG59XG4iLCAiaW1wb3J0IHsgTm90aWZpY2F0aW9uLCBVc2VyIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5pbXBvcnQgeyBGaUFycm93TGVmdCwgRmlIb21lLCBGaU1lbnUsIEZpUGx1cyB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJ1xuaW1wb3J0IHtcblx0TGluayxcblx0TGlua3NGdW5jdGlvbixcblx0TG9hZGVyRnVuY3Rpb24sXG5cdE91dGxldCxcblx0cmVkaXJlY3QsXG5cdHVzZUxvYWRlckRhdGEsXG5cdHVzZU1hdGNoZXMsXG59IGZyb20gJ3JlbWl4J1xuaW1wb3J0IEFwcExheW91dCBmcm9tICd+L2NvbXBvbmVudHMvYXBwLWxheW91dCdcbmltcG9ydCB1c2VDdXJyZW50Um91dGUgZnJvbSAnfi9ob29rcy91c2VDdXJyZW50Um91dGUnXG5pbXBvcnQgZW50cmllc1N0eWxlc2hlZXQgZnJvbSAnfi9zdHlsZXMvZW50cmllcy5jc3MnXG5pbXBvcnQgeyBnZXRVc2VyIH0gZnJvbSAnfi91dGlscy9zZXNzaW9uLnNlcnZlcidcblxuZXhwb3J0IGxldCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IFtcblx0eyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogZW50cmllc1N0eWxlc2hlZXQgfSxcbl1cblxuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgY29udGV4dCB9KSA9PiB7XG5cdC8vIC9hcHAgaXMgbm90IGEgcHJvcGVyIGVuZHBvaW50LCByZWRpcmVjdGluZyB0byAvYXBwL2VudHJpZXNcblx0aWYgKHJlcXVlc3QudXJsLmVuZHNXaXRoKCcvYXBwJykgfHwgcmVxdWVzdC51cmwuZW5kc1dpdGgoJy9hcHAvJykpIHtcblx0XHRyZXR1cm4gcmVkaXJlY3QoJy9hcHAvZW50cmllcycpXG5cdH1cblxuXHRsZXQgY3VycmVudFVzZXIgPSBhd2FpdCBnZXRVc2VyKHJlcXVlc3QsIHtcblx0XHRub3RpZmljYXRpb25zOiB0cnVlLFxuXHR9KVxuXG5cdGlmICghY3VycmVudFVzZXIpIHtcblx0XHRyZXR1cm4gbnVsbFxuXHR9XG5cblx0bGV0IG5ld05vdGlmID0gKGN1cnJlbnRVc2VyLm5vdGlmaWNhdGlvbnMgYXMgTm90aWZpY2F0aW9uW10pLnNvbWUoXG5cdFx0biA9PiAhbi5zZWVuQXQsXG5cdClcblxuXHRyZXR1cm4ge1xuXHRcdGN1cnJlbnRVc2VyLFxuXHRcdG5ld05vdGlmLFxuXHR9XG59XG5cbi8vIFdlIGp1c3QgZGlzcGxheSB0aGUgcGFnZXMgZm9yIG5vdywgd2UgdXNlIHRoaXMgZmlsZSB0byBsaW5rIHRoZSBzdHlsZXNoZWV0XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHBQYWdlKCkge1xuXHRsZXQgbG9hZGVyID0gdXNlTG9hZGVyRGF0YTx7IGN1cnJlbnRVc2VyOiBVc2VyOyBuZXdOb3RpZjogYm9vbGVhbiB9IHwgbnVsbD4oKVxuXHRsZXQgY3VycmVudFJvdXRlID0gdXNlQ3VycmVudFJvdXRlKClcblxuXHRyZXR1cm4gKFxuXHRcdDxBcHBMYXlvdXRcblx0XHRcdGhlYWRlcj17XG5cdFx0XHRcdDw+XG5cdFx0XHRcdFx0e2N1cnJlbnRSb3V0ZSAhPSAnL2FwcC9lbnRyaWVzJyA/IChcblx0XHRcdFx0XHRcdDxMaW5rIHRvPVwiL2FwcC9lbnRyaWVzXCIgY2xhc3NOYW1lPVwic2hlaWthIGJ1dHRvbiBtci1hdXRvXCI+XG5cdFx0XHRcdFx0XHRcdDxGaUFycm93TGVmdCBzaXplPVwiMS41cmVtXCIgLz5cblx0XHRcdFx0XHRcdFx0PHNwYW4+QmFjayB0byB0aGUgZW50cmllczwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0PExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwic2hlaWthIGJ1dHRvbiBtci1hdXRvXCI+XG5cdFx0XHRcdFx0XHRcdDxGaU1lbnUgc2l6ZT1cIjEuNXJlbVwiIC8+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPk1haW4gbWVudTwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdHtsb2FkZXI/LmN1cnJlbnRVc2VyID8gKFxuXHRcdFx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwic2hlaWthIGJ1dHRvbiBtbC1hdXRvIHJlbGF0aXZlXCJcblx0XHRcdFx0XHRcdFx0dG89e2AvYXBwL3VzZXJzLyR7bG9hZGVyLmN1cnJlbnRVc2VyLnVzZXJuYW1lfS9ub3RpZmljYXRpb25zYH0+XG5cdFx0XHRcdFx0XHRcdHtsb2FkZXIuY3VycmVudFVzZXIudXNlcm5hbWV9XG5cdFx0XHRcdFx0XHRcdHtsb2FkZXIubmV3Tm90aWYgPyAoXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMyByaWdodC0yIHJvdW5kZWQtZnVsbCBiZy1kYW5nZXItNTAwIHctMiBoLTJcIj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInNoZWlrYSBidXR0b24gbWwtYXV0b1wiXG5cdFx0XHRcdFx0XHRcdHRvPXtgL2xvZ2luP3JlZGlyZWN0VG89JHtjdXJyZW50Um91dGV9YH0+XG5cdFx0XHRcdFx0XHRcdExvZ2luXG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC8+XG5cdFx0XHR9XG5cdFx0XHRtYWluPXs8T3V0bGV0IC8+fVxuXHRcdFx0Zm9vdGVyPXtcblx0XHRcdFx0IWxvYWRlcj8uY3VycmVudFVzZXIgPyBudWxsIDogKFxuXHRcdFx0XHRcdDxMaW5rIHRvPVwiL2FwcC9lbnRyaWVzL25ld1wiIGNsYXNzTmFtZT1cInNoZWlrYSBidXR0b24gbWwtYXV0b1wiPlxuXHRcdFx0XHRcdFx0PEZpUGx1cyBzaXplPVwiMS41cmVtXCIgLz5cblx0XHRcdFx0XHRcdDxzcGFuPkFkZCBhbiBlbnRyeTwvc3Bhbj5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdClcblx0XHRcdH1cblx0XHQvPlxuXHQpXG59XG4iLCAiaW1wb3J0IHsgQ2hpbGRyZW4sIFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiXG5cbnR5cGUgQXBwTGF5b3V0UHJvcHMgPSB7XG4gIGhlYWRlcjogUmVhY3ROb2RlXG4gIG1haW46IFJlYWN0Tm9kZVxuICBmb290ZXI6IFJlYWN0Tm9kZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHBMYXlvdXQoeyBoZWFkZXIsIGZvb3RlciwgbWFpbiB9OiBBcHBMYXlvdXRQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZW50cmllcy1sYXlvdXRcIj5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcGljdHVyZVwiPjwvZGl2PlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICB7aGVhZGVyfVxuICAgICAgICA8L25hdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG1haW4+XG4gICAgICAgIHttYWlufVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXBpY3R1cmVcIj48L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcGljdHVyZVwiPjwvZGl2PlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICB7Zm9vdGVyfVxuICAgICAgICA8L25hdj5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgdXNlTWF0Y2hlcyB9IGZyb20gJ3JlbWl4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VDdXJyZW50Um91dGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcblx0bGV0IG1hdGNoZXMgPSB1c2VNYXRjaGVzKClcblx0cmV0dXJuIG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXT8ucGF0aG5hbWVcbn1cbiIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgY3JlYXRlQ29tbWVudEFjdGlvbiB9IGZyb20gJ34vZmVhdHVyZXMvZW50cmllcy9hcGkvY3JlYXRlLWNvbW1lbnQuc2VydmVyJ1xuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSAoYXJncykgPT4gY3JlYXRlQ29tbWVudEFjdGlvbihhcmdzKVxuIiwgImltcG9ydCB7IEVudHJ5LCBOb3RpZmljYXRpb25UeXBlLCBVc2VyIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5pbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgcmVkaXJlY3QgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnXG5pbXBvcnQgeyBkYiB9IGZyb20gJ34vdXRpbHMvZGIuc2VydmVyJ1xuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gJ34vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXInXG5pbXBvcnQgeyBzYWZlUGFyc2VGb3JtRGF0YSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2Zvcm1kYXRhLnV0aWxzLnNlcnZlcidcblxuY29uc3QgZm9ybVZhbGlkYXRvciA9IHoub2JqZWN0KHtcblx0Ym9keTogei5zdHJpbmcoKS5ub25lbXB0eSh7IG1lc3NhZ2U6ICdZb3UgY2Fubm90IHNlbmQgYW4gZW1wdHkgY29tbWVudCcgfSksXG59KVxuXG5leHBvcnQgbGV0IGNyZWF0ZUNvbW1lbnRBY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHtcblx0cmVxdWVzdCxcblx0cGFyYW1zLFxufSkgPT4ge1xuXHRsZXQgY3VycmVudFBhZ2UgPSBuZXcgVVJMKHJlcXVlc3QudXJsKS5wYXRobmFtZVxuXG5cdGxldCB1c2VyID0gYXdhaXQgZ2V0VXNlcihyZXF1ZXN0KVxuXG5cdGlmICghdXNlcikge1xuXHRcdHJldHVybiByZWRpcmVjdChgL2xvZ2luP3JlZGlyZWN0VG89JHtjdXJyZW50UGFnZX1gKVxuXHR9XG5cblx0bGV0IGZvdW5kRW50cnkgPSBhd2FpdCBkYi5lbnRyeS5maW5kRmlyc3Qoe1xuXHRcdHdoZXJlOiB7XG5cdFx0XHRzbHVnOiBwYXJhbXMuc2x1Zyxcblx0XHR9LFxuXHRcdHNlbGVjdDoge1xuXHRcdFx0aWQ6IHRydWUsXG5cdFx0XHR0aXRsZTogdHJ1ZSxcblx0XHR9LFxuXHR9KVxuXG5cdGlmICghZm91bmRFbnRyeSB8fCAhcGFyYW1zLnNsdWcpIHtcblx0XHRyZXR1cm4gcmVkaXJlY3QoJy9hcHAvZW50cmllcycpXG5cdH1cblxuXHRsZXQgcGFyc2VkRm9ybSA9IGF3YWl0IHNhZmVQYXJzZUZvcm1EYXRhKHJlcXVlc3QsIGZvcm1WYWxpZGF0b3IpXG5cblx0aWYgKCFwYXJzZWRGb3JtLnN1Y2Nlc3MpIHtcblx0XHRyZXR1cm4gcGFyc2VkRm9ybS5lcnJvci5mb3JtYXQoKVxuXHR9XG5cblx0Ly8gbm8gYXdhaXQgaGVyZSBiZWNhdXNlIHRoaXMgY2FuIGJlIGV4ZWN1dGVkIGxhdGVyXG5cdGNyZWF0ZU5vdGlmaWNhdGlvbnMoXG5cdFx0dXNlcixcblx0XHR7XG5cdFx0XHRpZDogZm91bmRFbnRyeS5pZCxcblx0XHRcdHRpdGxlOiBmb3VuZEVudHJ5LnRpdGxlLFxuXHRcdFx0c2x1ZzogcGFyYW1zLnNsdWcsXG5cdFx0fSxcblx0XHRwYXJzZWRGb3JtLmRhdGEuYm9keSxcblx0KVxuXG5cdHJldHVybiBkYi5jb21tZW50LmNyZWF0ZSh7XG5cdFx0ZGF0YToge1xuXHRcdFx0Ym9keTogcGFyc2VkRm9ybS5kYXRhLmJvZHksXG5cdFx0XHRlbnRyeUlkOiBmb3VuZEVudHJ5LmlkLFxuXHRcdFx0dXNlcklkOiB1c2VyLmlkLFxuXHRcdH0sXG5cdH0pXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZU5vdGlmaWNhdGlvbnMoXG5cdGZyb206IFBpY2s8VXNlciwgJ3VzZXJuYW1lJz4sXG5cdGVudHJ5OiBQaWNrPEVudHJ5LCAnaWQnIHwgJ3NsdWcnIHwgJ3RpdGxlJz4sXG5cdGNvbW1lbnQ6IHN0cmluZyxcbikge1xuXHRsZXQgdXNlcnNXYXRjaGluZ1RoaXNFbnRyeSA9IGF3YWl0IGRiLnVzZXIuZmluZE1hbnkoe1xuXHRcdHNlbGVjdDoge1xuXHRcdFx0aWQ6IHRydWUsXG5cdFx0fSxcblx0XHR3aGVyZToge1xuXHRcdFx0d2F0Y2hlczoge1xuXHRcdFx0XHRzb21lOiB7XG5cdFx0XHRcdFx0aWQ6IGVudHJ5LmlkLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdHVzZXJuYW1lOiB7XG5cdFx0XHRcdG5vdDoge1xuXHRcdFx0XHRcdGVxdWFsczogZnJvbS51c2VybmFtZSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSlcblxuXHRjb25zb2xlLmxvZyhcblx0XHQnQ3JlYXRpbmcgYSBub3RpZmljYXRpb24gb24gZW50cnknLFxuXHRcdGVudHJ5LnNsdWcsXG5cdFx0J2ZvciB1c2VycycsXG5cdFx0dXNlcnNXYXRjaGluZ1RoaXNFbnRyeS5tYXAoZSA9PiBlLmlkKSxcblx0KVxuXG5cdC8vIFdlIGNyZWF0ZSBhcyBtdWNoIG5vdGlmaWNhdGlvbnMgYXMgdGhleSBhcmUgdXNlcnMgXCJzdWJzY3JpYmVkXCIgdG8gdGhpcyBlbnRyeVxuXHRhd2FpdCBkYi5ub3RpZmljYXRpb24uY3JlYXRlTWFueSh7XG5cdFx0ZGF0YTogdXNlcnNXYXRjaGluZ1RoaXNFbnRyeS5tYXAodXNlciA9PiAoe1xuXHRcdFx0dXNlcklkOiB1c2VyLmlkLFxuXHRcdFx0dGl0bGU6IGAke2Zyb20udXNlcm5hbWV9IGNvbW1lbnRlZCBvbiAke2VudHJ5LnRpdGxlfWAsXG5cdFx0XHRjb250ZW50OiBjb21tZW50LFxuXHRcdFx0bGluazogYC9hcHAvZW50cmllcy8ke2VudHJ5LnNsdWd9YCxcblx0XHRcdHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuQ09NTUVOVCxcblx0XHR9KSksXG5cdH0pXG5cblx0Ly8gV2UgXCJzdWJzY3JpYmVcIiB0aGUgcG9zdGVyIHRvIHRoZSBlbnRyeSBzbyBoZSBjYW4gcmVjZWl2ZSByZXBsaWVzXG5cdGF3YWl0IGRiLnVzZXIudXBkYXRlKHtcblx0XHR3aGVyZToge1xuXHRcdFx0dXNlcm5hbWU6IGZyb20udXNlcm5hbWUsXG5cdFx0fSxcblx0XHRkYXRhOiB7XG5cdFx0XHR3YXRjaGVzOiB7XG5cdFx0XHRcdGNvbm5lY3Q6IHtcblx0XHRcdFx0XHRpZDogZW50cnkuaWQsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0pXG59XG4iLCAiaW1wb3J0IHtcblx0TGluayxcblx0TGlua3NGdW5jdGlvbixcblx0TG9hZGVyRnVuY3Rpb24sXG5cdHJlZGlyZWN0LFxuXHR1c2VMb2FkZXJEYXRhLFxuXHR1c2VUcmFuc2l0aW9uLFxufSBmcm9tICdyZW1peCdcbmltcG9ydCB7IGRlc2VyaWFsaXplLCBzZXJpYWxpemUgfSBmcm9tICdzdXBlcmpzb24nXG5pbXBvcnQgeyB6IH0gZnJvbSAnem9kJ1xuaW1wb3J0IHsgdXBkYXRlQWN0aW9uIH0gZnJvbSAnfi9mZWF0dXJlcy9lbnRyaWVzL2FwaS91cGRhdGUuc2VydmVyJ1xuaW1wb3J0IEVudHJ5Rm9ybSBmcm9tICd+L2ZlYXR1cmVzL2VudHJpZXMvY29tcG9uZW50cy9lbnRyeS1mb3JtJ1xuaW1wb3J0IHtcblx0RW50cnlJblVwZGF0ZSxcblx0Z2V0UHJpc21hU2VsZWN0RW50cnlJblVwZGF0ZSxcbn0gZnJvbSAnfi9mZWF0dXJlcy9lbnRyaWVzL3R5cGVzL2VudHJ5LWluLXVwZGF0ZSdcbmltcG9ydCBmb3JtU3R5bGVzaGVldCBmcm9tICd+L3N0eWxlcy9mb3Jtcy5jc3MnXG5pbXBvcnQgeyBkYiB9IGZyb20gJ34vdXRpbHMvZGIuc2VydmVyJ1xuXG5leHBvcnQgbGV0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW1xuXHR7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBmb3JtU3R5bGVzaGVldCB9LFxuXVxuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuXHRsZXQgc2x1ZyA9IHouc3RyaW5nKCkucGFyc2UocGFyYW1zPy5zbHVnKVxuXG5cdGxldCBlbnRyeTogRW50cnlJblVwZGF0ZSB8IG51bGwgPSBhd2FpdCBkYi5lbnRyeS5maW5kRmlyc3Qoe1xuXHRcdHNlbGVjdDogZ2V0UHJpc21hU2VsZWN0RW50cnlJblVwZGF0ZSgpLFxuXHRcdHdoZXJlOiB7XG5cdFx0XHRzbHVnLFxuXHRcdH0sXG5cdH0pXG5cblx0aWYgKCFlbnRyeSkge1xuXHRcdHJldHVybiByZWRpcmVjdCgnL2FwcC9lbnRyaWVzJylcblx0fVxuXG5cdHJldHVybiBzZXJpYWxpemUoZW50cnkpXG59XG5cbmV4cG9ydCBsZXQgYWN0aW9uID0gdXBkYXRlQWN0aW9uXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVudHJ5VXBkYXRlQnlTbHVnKCkge1xuXHRsZXQgZGVmYXVsdFZhbHVlcyA9IGRlc2VyaWFsaXplPEVudHJ5SW5VcGRhdGU+KHVzZUxvYWRlckRhdGEoKSlcblx0bGV0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKClcblxuXHRyZXR1cm4gKFxuXHRcdDxFbnRyeUZvcm1cblx0XHRcdHRyYW5zaXRpb249e3RyYW5zaXRpb259XG5cdFx0XHRzdWJtaXRMYWJlbD17eyBkZWZhdWx0OiAnVXBkYXRlIGVudHJ5Jywgc2VuZGluZzogJ1VwZGF0aW5nIGVudHJ5JyB9fVxuXHRcdFx0ZGVmYXVsdFZhbHVlcz17ZGVmYXVsdFZhbHVlc31cblx0XHRcdGFjdGlvbj17Jy9hcHAvZW50cmllcy8nICsgZGVmYXVsdFZhbHVlcy5zbHVnICsgJy91cGRhdGUnfVxuXHRcdFx0QnV0dG9uc1Nsb3Q9eygpID0+IChcblx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJzaGVpa2EgYnV0dG9uIG1yLTNcIlxuXHRcdFx0XHRcdHRvPXsnL2FwcC9lbnRyaWVzLycgKyBkZWZhdWx0VmFsdWVzLnNsdWd9PlxuXHRcdFx0XHRcdENhbmNlbFxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHQpfVxuXHRcdC8+XG5cdClcbn1cbiIsICJpbXBvcnQgeyBQcmlzbWEgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcbmltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCByZWRpcmVjdCB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCdcbmltcG9ydCB7IGRiIH0gZnJvbSAnfi91dGlscy9kYi5zZXJ2ZXInXG5pbXBvcnQgeyBiYXNlNjRJbWFnZVZhbGlkVHlwZVJlZ2V4LCBzYXZlSW1hZ2UgfSBmcm9tICd+L3V0aWxzL2ZpbGUudXRpbHMuc2VydmVyJ1xuaW1wb3J0IHsgc2FmZVBhcnNlRm9ybURhdGEgfSBmcm9tICd+L3V0aWxzL2Zvcm1kYXRhLnV0aWxzLnNlcnZlcidcbmltcG9ydCB7IHJlcXVpcmVVc2VySWQgfSBmcm9tICd+L3V0aWxzL3Nlc3Npb24uc2VydmVyJ1xuaW1wb3J0IHsgc2x1Z2lmeSB9IGZyb20gJ34vdXRpbHMvc3RyaW5nLnV0aWxzJ1xuaW1wb3J0IHsgTmV3RW50cnkgfSBmcm9tICcuLi90eXBlcy9lbnRyaWVzJ1xuXG5sZXQgZm9ybVZhbGlkYXRvciA9IHoub2JqZWN0KHtcblx0dGl0bGU6IHouc3RyaW5nKCkubm9uZW1wdHkoeyBtZXNzYWdlOiAnVGhlIHRpdGxlIGlzIHJlcXVpcmVkJyB9KSxcblx0b3JpZ2luYWxTbHVnOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG5cdGNvbnRlbnQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKS5kZWZhdWx0KCcnKSxcblx0bWFpblBpY3R1cmU6IHoubGl0ZXJhbCgnJykub3IoXG5cdFx0ei5zdHJpbmcoKS5yZWdleChiYXNlNjRJbWFnZVZhbGlkVHlwZVJlZ2V4LCB7XG5cdFx0XHRtZXNzYWdlOiAnTm90IGEgdmFsaWQgaW1hZ2UgZm9ybWF0Jyxcblx0XHR9KSxcblx0KSxcbn0pXG5cbmV4cG9ydCB0eXBlIEZvcm1FcnJvciA9IHouWm9kRm9ybWF0dGVkRXJyb3I8ei5pbmZlcjx0eXBlb2YgZm9ybVZhbGlkYXRvcj4+XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFVuaXF1ZVNsdWcodGl0bGU6IHN0cmluZykge1xuXHRsZXQgb3JpZ2luYWxTbHVnID0gc2x1Z2lmeSh0aXRsZSlcblxuXHRsZXQgZW50cmllc0V4aXN0aW5nV2l0aFNsdWcgPSBhd2FpdCBkYi5lbnRyeS5jb3VudCh7XG5cdFx0d2hlcmU6IHtcblx0XHRcdHNsdWc6IHtcblx0XHRcdFx0c3RhcnRzV2l0aDogb3JpZ2luYWxTbHVnLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9KVxuXG5cdGxldCByZXN1bHQgPSBvcmlnaW5hbFNsdWdcblxuXHRpZiAoZW50cmllc0V4aXN0aW5nV2l0aFNsdWcgPiAwKSB7XG5cdFx0cmVzdWx0ID0gYCR7b3JpZ2luYWxTbHVnfS0ke2VudHJpZXNFeGlzdGluZ1dpdGhTbHVnICsgMX1gXG5cdFx0Y29uc29sZS5sb2coXG5cdFx0XHRgU2x1ZyB3YXMgZ29pbmcgdG8gYmUgXCIke29yaWdpbmFsU2x1Z31cIiBidXQgaXMgaW5zdGVhZCBcIiR7cmVzdWx0fVwiYCxcblx0XHQpXG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBsZXQgYmFzZVVwZGF0ZUFjdGlvbiA9IGFzeW5jIChcblx0cmVxdWVzdDogUmVxdWVzdCxcblx0YWN0aW9uOiAoXG5cdFx0ZGF0YTogei5pbmZlcjx0eXBlb2YgZm9ybVZhbGlkYXRvcj4gJiB7IHVzZXJJZDogc3RyaW5nIH0sXG5cdCkgPT4gUHJvbWlzZTxzdHJpbmc+LFxuKSA9PiB7XG5cdGxldCB1c2VySWQgPSBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpXG5cblx0Y29uc29sZS5kZWJ1ZygnUGFyc2luZyBmb3JtIGRhdGEnKVxuXHQvLyBJZGsgd2h5IGJ1dCBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCkganVzdHMgZnJlZXplc1xuXHRsZXQgZm9ybURhdGEgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGF3YWl0IHJlcXVlc3QudGV4dCgpKVxuXHRjb25zb2xlLmRlYnVnKCdQYXJzZWQgZm9ybSBkYXRhIDogJywgZm9ybURhdGEua2V5cygpKVxuXG5cdGxldCBwYXJzZWRGb3JtID0gZm9ybVZhbGlkYXRvci5zYWZlUGFyc2UoXG5cdFx0T2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhLmVudHJpZXMoKSksXG5cdClcblxuXHRpZiAoIXBhcnNlZEZvcm0uc3VjY2Vzcykge1xuXHRcdHJldHVybiBwYXJzZWRGb3JtLmVycm9yLmZvcm1hdCgpXG5cdH1cblxuXHR0cnkge1xuXHRcdGxldCBzbHVnID0gYXdhaXQgYWN0aW9uKHsgLi4ucGFyc2VkRm9ybS5kYXRhLCB1c2VySWQgfSlcblx0XHRyZXR1cm4gcmVkaXJlY3QoYC9hcHAvZW50cmllcy8ke3NsdWd9YClcblx0fSBjYXRjaCAoZSkge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBzYXZlIGVudHJ5JywgZSlcblx0XHRyZXR1cm4gbnVsbFxuXHR9XG59XG5cbmV4cG9ydCBsZXQgY3JlYXRlQWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuXHRjb25zb2xlLmxvZygnUmVxdWVzdCB0byBjcmVhdGUgZW50cnknKVxuXHRyZXR1cm4gYmFzZVVwZGF0ZUFjdGlvbihyZXF1ZXN0LCBhc3luYyBmb3JtID0+IHtcblx0XHRsZXQgZGF0YTogUHJpc21hLkVudHJ5Q3JlYXRlSW5wdXQgPSB7XG5cdFx0XHR0aXRsZTogZm9ybS50aXRsZSxcblx0XHRcdGNvbnRlbnQ6IGZvcm0uY29udGVudCxcblx0XHRcdHNsdWc6IGF3YWl0IGdldFVuaXF1ZVNsdWcoZm9ybS50aXRsZSksXG5cdFx0XHR1c2VyOiB7XG5cdFx0XHRcdGNvbm5lY3Q6IHtcblx0XHRcdFx0XHRpZDogZm9ybS51c2VySWQsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0Ly8gV2UgYXV0b21hdGljYWxseSBsaWtlIHRoZSBwb3N0IHdlIG1hZGUsIGxpa2Ugb24gUmVkZGl0XG5cdFx0XHRsaWtlZEJ5OiB7XG5cdFx0XHRcdGNvbm5lY3Q6IHtcblx0XHRcdFx0XHRpZDogZm9ybS51c2VySWQsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0Ly8gQW5kIHdlIGF1dG9tYXRpY2FsbHkgcmVjZWl2ZSBub3RpZmljYXRpb25zIHRvb1xuXHRcdFx0d2F0Y2hlZEJ5OiB7XG5cdFx0XHRcdGNvbm5lY3Q6IHtcblx0XHRcdFx0XHRpZDogZm9ybS51c2VySWQsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH1cblxuXHRcdGxldCBjcmVhdGVkRW50cnkgPSBhd2FpdCBkYi5lbnRyeS5jcmVhdGUoeyBkYXRhIH0pXG5cblx0XHRpZiAoZm9ybS5tYWluUGljdHVyZSkge1xuXHRcdFx0YXdhaXQgc2F2ZUltYWdlKGZvcm0ubWFpblBpY3R1cmUsIGNyZWF0ZWRFbnRyeS5pZClcblx0XHRcdGNvbnNvbGUubG9nKCdGaWxlIGhhcyBiZWVuIHNhdmVkJylcblx0XHR9XG5cblx0XHRyZXR1cm4gY3JlYXRlZEVudHJ5LnNsdWdcblx0fSlcbn1cblxuZXhwb3J0IGxldCB1cGRhdGVBY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG5cdGNvbnNvbGUubG9nKCdSZXF1ZXN0IHRvIHVwZGF0ZSBlbnRyeScpXG5cdHJldHVybiBiYXNlVXBkYXRlQWN0aW9uKHJlcXVlc3QsIGFzeW5jIGZvcm0gPT4ge1xuXHRcdGlmICghZm9ybS5vcmlnaW5hbFNsdWcpIHtcblx0XHRcdHRocm93IEVycm9yKCdDYW5ub3QgdXBkYXRlIGVudHJ5IHdpdGhvdXQgaXRzIG9yaWdpbmFsIHNsdWcnKVxuXHRcdH1cblxuXHRcdGxldCBkYXRhOiBOZXdFbnRyeSA9IHtcblx0XHRcdHRpdGxlOiBmb3JtLnRpdGxlLFxuXHRcdFx0Y29udGVudDogZm9ybS5jb250ZW50LFxuXHRcdFx0c2x1ZzogYXdhaXQgZ2V0VW5pcXVlU2x1Zyhmb3JtLnRpdGxlKSxcblx0XHRcdHVzZXJJZDogZm9ybS51c2VySWQsXG5cdFx0fVxuXG5cdFx0bGV0IHVwZGF0ZWRFbnRyeSA9IGF3YWl0IGRiLmVudHJ5LnVwZGF0ZSh7XG5cdFx0XHRkYXRhLFxuXHRcdFx0d2hlcmU6IHtcblx0XHRcdFx0c2x1ZzogZm9ybS5vcmlnaW5hbFNsdWcsXG5cdFx0XHR9LFxuXHRcdH0pXG5cblx0XHRpZiAoZm9ybS5tYWluUGljdHVyZSkge1xuXHRcdFx0YXdhaXQgc2F2ZUltYWdlKGZvcm0ubWFpblBpY3R1cmUsIHVwZGF0ZWRFbnRyeS5pZClcblx0XHRcdGNvbnNvbGUubG9nKCdGaWxlIGhhcyBiZWVuIHNhdmVkJylcblx0XHR9XG5cblx0XHRyZXR1cm4gdXBkYXRlZEVudHJ5LnNsdWdcblx0fSlcbn1cbiIsICJpbXBvcnQgeyBkYiB9IGZyb20gJy4vZGIuc2VydmVyJ1xuaW1wb3J0IHsgY2xvdWRpbmFyeSB9IGZyb20gJy4vc3RvcmFnZS5zZXJ2ZXInXG5cbmV4cG9ydCBjb25zdCBiYXNlNjRJbWFnZVZhbGlkVHlwZVJlZ2V4ID0gL15kYXRhOmltYWdlXFwvKFxcdyopO2Jhc2U2NCwvXG5leHBvcnQgY29uc3QgYmFzZTY0R2V0RXh0UmVnZXggPSAvXmRhdGE6aW1hZ2VcXC8oLiopO2Jhc2U2NCwvXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlSW1hZ2UoYmFzZTY0OiBzdHJpbmcsIGVudHJ5SWQ6IHN0cmluZykge1xuXHRjb25zb2xlLmxvZygnU2F2aW5nIGltYWdlIGZvciBlbnRyeScsIGVudHJ5SWQpXG5cblx0bGV0IGZpbGUgPSBhd2FpdCBjbG91ZGluYXJ5LnVwbG9hZGVyLnVwbG9hZChiYXNlNjQsIHtcblx0XHRwdWJsaWNfaWQ6IGVudHJ5SWQsXG5cdFx0dW5pcXVlX2ZpbGVuYW1lOiB0cnVlLFxuXHR9KVxuXG5cdGNvbnNvbGUuZGVidWcoJ1RoZSBmaWxlIGhhcyBiZWVuIHVwbG9hZGVkJylcblxuXHRyZXR1cm4gZGIucGljdHVyZS5jcmVhdGUoe1xuXHRcdGRhdGE6IHtcblx0XHRcdGZpbGU6IGZpbGUucHVibGljX2lkLFxuXHRcdFx0ZW50cnlJZCxcblx0XHR9LFxuXHR9KVxufVxuIiwgImltcG9ydCB7IHYyIGFzIGMgfSBmcm9tICdjbG91ZGluYXJ5J1xuXG5jLmNvbmZpZyh7XG5cdGNsb3VkX25hbWU6ICdkc2xncWlxdGsnLFxuXHRhcGlfa2V5OiAnNTQxNDc2Mjc3OTg0NTM3Jyxcblx0YXBpX3NlY3JldDogcHJvY2Vzcy5lbnYuQ0xPVURJTkFSWV9BUElfU0VDUkVULFxufSlcblxuZXhwb3J0IGNvbnN0IGNsb3VkaW5hcnkgPSBjXG4iLCAiZXhwb3J0IGZ1bmN0aW9uIHNsdWdpZnkodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHRleHRcbiAgICAudG9TdHJpbmcoKVxuICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgLnJlcGxhY2UoL1xccysvZywgJy0nKSAvLyBSZXBsYWNlIHNwYWNlcyB3aXRoIC1cbiAgICAucmVwbGFjZSgvW15cXHdcXC1dKy9nLCAnJykgLy8gUmVtb3ZlIGFsbCBub24td29yZCBjaGFyc1xuICAgIC5yZXBsYWNlKC9cXC1cXC0rL2csICctJykgLy8gUmVwbGFjZSBtdWx0aXBsZSAtIHdpdGggc2luZ2xlIC1cbiAgICAucmVwbGFjZSgvXi0rLywgJycpIC8vIFRyaW0gLSBmcm9tIHN0YXJ0IG9mIHRleHRcbiAgICAucmVwbGFjZSgvLSskLywgJycpIC8vIFRyaW0gLSBmcm9tIGVuZCBvZiB0ZXh0XG59XG4iLCAiaW1wb3J0IHsgVHJhbnNpdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QvdHJhbnNpdGlvbidcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RMb2FkaW5nIGZyb20gJ3JlYWN0LWxvYWRpbmcnXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgRm9ybUZpZWxkIGZyb20gJ34vY29tcG9uZW50cy9mb3JtLWZpZWxkJ1xuaW1wb3J0IHsgRm9ybUVycm9yIH0gZnJvbSAnLi4vYXBpL3VwZGF0ZS5zZXJ2ZXInXG5pbXBvcnQgeyBFbnRyeUluVXBkYXRlIH0gZnJvbSAnLi4vdHlwZXMvZW50cnktaW4tdXBkYXRlJ1xuaW1wb3J0IEltYWdlU2VsZWN0b3IgZnJvbSAnLi9pbWFnZS1zZWxlY3RvcidcblxudHlwZSBFbnRyeUZvcm1Qcm9wcyA9IHtcblx0ZXJyb3JzPzogRm9ybUVycm9yXG5cdHRyYW5zaXRpb246IFRyYW5zaXRpb25cblx0c3VibWl0TGFiZWw6IHsgZGVmYXVsdDogc3RyaW5nOyBzZW5kaW5nOiBzdHJpbmcgfVxuXHRhY3Rpb246IHN0cmluZ1xuXHRkZWZhdWx0VmFsdWVzPzogRW50cnlJblVwZGF0ZVxuXHRCdXR0b25zU2xvdD86ICgpID0+IEpTWC5FbGVtZW50XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVudHJ5Rm9ybSh7XG5cdGVycm9ycyxcblx0dHJhbnNpdGlvbixcblx0c3VibWl0TGFiZWwsXG5cdGFjdGlvbixcblx0ZGVmYXVsdFZhbHVlcyxcblx0QnV0dG9uc1Nsb3QsXG59OiBFbnRyeUZvcm1Qcm9wcykge1xuXHRjb25zdCBbbWFpblBpY3R1cmUsIHNldE1haW5QaWN0dXJlXSA9IHVzZVN0YXRlPFxuXHRcdHsgYjY0OiBzdHJpbmc7IG5hbWU6IHN0cmluZyB9IHwgdW5kZWZpbmVkXG5cdD4odW5kZWZpbmVkKVxuXG5cdGNvbnN0IFtpbWFnZUlzTG9hZGluZywgc2V0SW1hZ2VJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwibXQtMTYgcHgtMyBtZDpteC1hdXRvIHctZnVsbCBtZDp3LTMvNCBsZzp3LTEvMlwiPlxuXHRcdFx0PEZvcm0gbWV0aG9kPVwicG9zdFwiIGFjdGlvbj17YWN0aW9ufT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCItbXgtM1wiPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0dHlwZT1cImhpZGRlblwiXG5cdFx0XHRcdFx0XHRuYW1lPVwib3JpZ2luYWxTbHVnXCJcblx0XHRcdFx0XHRcdHJlYWRPbmx5XG5cdFx0XHRcdFx0XHR2YWx1ZT17ZGVmYXVsdFZhbHVlcz8uc2x1Z31cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxGb3JtRmllbGQgZXJyb3I9e2Vycm9ycz8ubWFpblBpY3R1cmV9PlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJoaWRkZW5cIlxuXHRcdFx0XHRcdFx0XHRuYW1lPVwibWFpblBpY3R1cmVcIlxuXHRcdFx0XHRcdFx0XHRyZWFkT25seVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17bWFpblBpY3R1cmU/LmI2NH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8SW1hZ2VTZWxlY3RvclxuXHRcdFx0XHRcdFx0XHRsb2FkZWRJbWFnZT17bWFpblBpY3R1cmV9XG5cdFx0XHRcdFx0XHRcdG9uSW1hZ2VMb2FkZWQ9e3NldE1haW5QaWN0dXJlfVxuXHRcdFx0XHRcdFx0XHRvbkltYWdlTG9hZGluZz17c2V0SW1hZ2VJc0xvYWRpbmd9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvRm9ybUZpZWxkPlxuXHRcdFx0XHRcdDxGb3JtRmllbGQgbGFiZWw9XCJUaXRsZVwiIGVycm9yPXtlcnJvcnM/LnRpdGxlfT5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlcz8udGl0bGV9IC8+XG5cdFx0XHRcdFx0PC9Gb3JtRmllbGQ+XG5cdFx0XHRcdFx0PEZvcm1GaWVsZCBsYWJlbD1cIkNvbnRlbnRcIiBlcnJvcj17ZXJyb3JzPy5jb250ZW50fT5cblx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxuXHRcdFx0XHRcdFx0XHRuYW1lPVwiY29udGVudFwiXG5cdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlcz8uY29udGVudH1cblx0XHRcdFx0XHRcdFx0cm93cz17OH0+PC90ZXh0YXJlYT5cblx0XHRcdFx0XHQ8L0Zvcm1GaWVsZD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgcm9sZT1cInNlcGFyYXRvclwiPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmRcIj5cblx0XHRcdFx0XHR7QnV0dG9uc1Nsb3QgPyA8QnV0dG9uc1Nsb3QgLz4gOiBudWxsfVxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInNoZWlrYSBidXR0b25cIlxuXHRcdFx0XHRcdFx0dHlwZT1cInN1Ym1pdFwiXG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17ISF0cmFuc2l0aW9uLnN1Ym1pc3Npb24gfHwgaW1hZ2VJc0xvYWRpbmd9PlxuXHRcdFx0XHRcdFx0e3RyYW5zaXRpb24uc3VibWlzc2lvbiA/IChcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtM1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxSZWFjdExvYWRpbmdcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJzcGlubmluZ0J1YmJsZXNcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I9XCJ2YXIoLS1wcmltYXJ5LTUwMClcIlxuXHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PVwiMS41cmVtXCJcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoPVwiMS41cmVtXCJcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPntzdWJtaXRMYWJlbC5zZW5kaW5nfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHRzdWJtaXRMYWJlbC5kZWZhdWx0XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvRm9ybT5cblx0XHQ8L2Rpdj5cblx0KVxufVxuIiwgImltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi9lcnJvci1tZXNzYWdlJ1xuXG50eXBlIEZvcm1GaWVsZFByb3BzID0gUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48e1xuICBsYWJlbD86IHN0cmluZ1xuICBlcnJvcj86IHsgX2Vycm9yczogc3RyaW5nW10gfCB1bmRlZmluZWQgfSB8IHVuZGVmaW5lZFxufT5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybUZpZWxkKHsgbGFiZWwsIGVycm9yLCBjaGlsZHJlbiB9OiBGb3JtRmllbGRQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWZpZWxkXCI+XG4gICAgICB7bGFiZWwgJiYgPHNwYW4+e2xhYmVsfTwvc3Bhbj59XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICA8RXJyb3JNZXNzYWdlIGVycm9yPXtlcnJvcn0gY2xhc3NOYW1lPVwibWwtMlwiIC8+XG4gICAgPC9sYWJlbD5cbiAgKVxufVxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRmlJbWFnZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJ1xuaW1wb3J0IFJlYWN0TG9hZGluZyBmcm9tICdyZWFjdC1sb2FkaW5nJ1xuXG50eXBlIEltYWdlVG9TZW5kID0geyBiNjQ6IHN0cmluZzsgbmFtZTogc3RyaW5nIH1cblxudHlwZSBJbWFnZVNlbGVjdG9yUHJvcHMgPSB7XG5cdGxvYWRlZEltYWdlPzogSW1hZ2VUb1NlbmRcblx0b25JbWFnZUxvYWRpbmc6IChpc0xvYWRpbmc6IGJvb2xlYW4pID0+IHZvaWRcblx0b25JbWFnZUxvYWRlZDogKGltYWdlPzogSW1hZ2VUb1NlbmQpID0+IHZvaWRcbn1cblxuZnVuY3Rpb24gbG9hZEltYWdlVG9DYW52YXMoXG5cdGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsXG5cdGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50LFxuXHR3aWR0aDogbnVtYmVyID0gaW1hZ2Uud2lkdGgsXG5cdGhlaWdodDogbnVtYmVyID0gaW1hZ2UuaGVpZ2h0LFxuKSB7XG5cdC8vIFJlZGltZW5zaW9ubmUgbGUgY2FudmFzIHZpcnR1ZWwgYXV4IGRpbWVuc2lvbiBzb3VoYWl0XHUwMEU5ZXNcblx0Y2FudmFzLndpZHRoID0gd2lkdGhcblx0Y2FudmFzLmhlaWdodCA9IGhlaWdodFxuXG5cdC8vIEFmZmljaGUgbCdpbWFnZSBzdXIgbGUgY2FudmFzXG5cdGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpPy5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDAsIHdpZHRoLCBoZWlnaHQpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEJhc2U2NEZyb21GaWxlKFxuXHRmaWxlOiBGaWxlLFxuXHRjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LFxuKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKVxuXHRcdGltYWdlLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSlcblx0XHRpbWFnZS5vbmxvYWQgPSBhc3luYyAoKSA9PiB7XG5cdFx0XHQvLyBXZSBsb2FkIHRoZSBpbWFnZSBpbnRvIHRoZSBjYW52YXNcblx0XHRcdGxvYWRJbWFnZVRvQ2FudmFzKGNhbnZhcywgaW1hZ2UpXG5cdFx0XHRyZXNvbHZlKGNhbnZhcy50b0RhdGFVUkwoZmlsZS50eXBlKSlcblx0XHR9XG5cblx0XHRpbWFnZS5vbmVycm9yID0gcmVqZWN0XG5cdH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlU2VsZWN0b3Ioe1xuXHRvbkltYWdlTG9hZGVkLFxuXHRvbkltYWdlTG9hZGluZyxcblx0bG9hZGVkSW1hZ2UsXG59OiBJbWFnZVNlbGVjdG9yUHJvcHMpIHtcblx0Y29uc3QgW2ltYWdlSXNQcm9jZXNzaW5nLCBzZXRJbWFnZUlzUHJvY2Vzc2luZ10gPSB1c2VTdGF0ZShmYWxzZSlcblx0Y29uc3QgY2FudmFzUmVmID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50PihudWxsKVxuXHRjb25zdCBpbWFnZUlucHV0UmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRvbkltYWdlTG9hZGluZyhpbWFnZUlzUHJvY2Vzc2luZylcblx0fSwgW2ltYWdlSXNQcm9jZXNzaW5nXSlcblxuXHRhc3luYyBmdW5jdGlvbiBkYXRhVG9CeXRlQXJyYXkoZmlsZXM6IEZpbGVMaXN0IHwgbnVsbCkge1xuXHRcdGlmICghY2FudmFzUmVmLmN1cnJlbnQpIHtcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdGlmIChmaWxlcz8uWzBdKSB7XG5cdFx0XHRzZXRJbWFnZUlzUHJvY2Vzc2luZyh0cnVlKVxuXHRcdFx0bGV0IGI2NCA9IGF3YWl0IGdldEJhc2U2NEZyb21GaWxlKGZpbGVzWzBdLCBjYW52YXNSZWYuY3VycmVudClcblx0XHRcdG9uSW1hZ2VMb2FkZWQoe1xuXHRcdFx0XHRiNjQsXG5cdFx0XHRcdG5hbWU6IGZpbGVzWzBdLm5hbWUsXG5cdFx0XHR9KVxuXHRcdFx0c2V0SW1hZ2VJc1Byb2Nlc3NpbmcoZmFsc2UpXG5cdFx0fSBlbHNlIHtcblx0XHRcdGNhbnZhc1JlZi5jdXJyZW50LndpZHRoID0gMFxuXHRcdFx0Y2FudmFzUmVmLmN1cnJlbnQuaGVpZ2h0ID0gMFxuXHRcdFx0b25JbWFnZUxvYWRlZCh1bmRlZmluZWQpXG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGNhbnZhc1xuXHRcdFx0XHRjbGFzc05hbWU9e2B3LWZ1bGwgbWItNSAke1xuXHRcdFx0XHRcdGxvYWRlZEltYWdlICYmICFpbWFnZUlzUHJvY2Vzc2luZyA/ICcnIDogJ2hpZGRlbidcblx0XHRcdFx0fWB9XG5cdFx0XHRcdHJlZj17Y2FudmFzUmVmfT48L2NhbnZhcz5cblxuXHRcdFx0PGlucHV0XG5cdFx0XHRcdHJlZj17aW1hZ2VJbnB1dFJlZn1cblx0XHRcdFx0aGlkZGVuXG5cdFx0XHRcdHR5cGU9XCJmaWxlXCJcblx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvKlwiXG5cdFx0XHRcdG9uQ2hhbmdlPXtlID0+IGRhdGFUb0J5dGVBcnJheShlLnRhcmdldC5maWxlcyl9XG5cdFx0XHQvPlxuXHRcdFx0PGJ1dHRvblxuXHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0Y2xhc3NOYW1lPVwic2hlaWthIGJ1dHRvbiBmbGV4IGp1c3RpZnktY2VudGVyIG1iLTVcIlxuXHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBpbWFnZUlucHV0UmVmLmN1cnJlbnQ/LmNsaWNrKCl9PlxuXHRcdFx0XHR7aW1hZ2VJc1Byb2Nlc3NpbmcgPyAoXG5cdFx0XHRcdFx0PFJlYWN0TG9hZGluZ1xuXHRcdFx0XHRcdFx0dHlwZT1cInNwaW5uaW5nQnViYmxlc1wiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtci0zXCJcblx0XHRcdFx0XHRcdGNvbG9yPVwidmFyKC0tcHJpbWFyeS01MDApXCJcblx0XHRcdFx0XHRcdGhlaWdodD1cIjEuNXJlbVwiXG5cdFx0XHRcdFx0XHR3aWR0aD1cIjEuNXJlbVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8RmlJbWFnZSBzaXplPVwiMS41cmVtXCIgY2xhc3NOYW1lPVwibXItM1wiIC8+XG5cdFx0XHRcdCl9XG5cblx0XHRcdFx0e2xvYWRlZEltYWdlPy5uYW1lID8/ICdDaGFuZ2UgcGljdHVyZSd9XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHQ8Lz5cblx0KVxufVxuIiwgImltcG9ydCB7IEVudHJ5LCBQcmlzbWEgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuZXhwb3J0IHR5cGUgRW50cnlJblVwZGF0ZSA9IFBpY2s8RW50cnksICd0aXRsZScgfCAnY29udGVudCcgfCAnc2x1Zyc+XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcmlzbWFTZWxlY3RFbnRyeUluVXBkYXRlKCkge1xuICByZXR1cm4gUHJpc21hLnZhbGlkYXRvcjxQcmlzbWEuRW50cnlTZWxlY3Q+KCkoe1xuICAgIHNsdWc6IHRydWUsXG4gICAgdGl0bGU6IHRydWUsXG4gICAgY29udGVudDogdHJ1ZSxcbiAgfSlcbn1cbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRmlFZGl0MywgRmlUcmFzaCB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJ1xuaW1wb3J0IHtcblx0TGluayxcblx0TGlua3NGdW5jdGlvbixcblx0TG9hZGVyRnVuY3Rpb24sXG5cdE1ldGFGdW5jdGlvbixcblx0cmVkaXJlY3QsXG5cdFNob3VsZFJlbG9hZEZ1bmN0aW9uLFxuXHR1c2VMb2FkZXJEYXRhLFxuXHR1c2VUcmFuc2l0aW9uLFxufSBmcm9tICdyZW1peCdcbmltcG9ydCB7IGRlc2VyaWFsaXplLCBzZXJpYWxpemUgfSBmcm9tICdzdXBlcmpzb24nXG5pbXBvcnQgeyB6IH0gZnJvbSAnem9kJ1xuaW1wb3J0IHsgZGVsZXRlQWN0aW9uIH0gZnJvbSAnfi9mZWF0dXJlcy9lbnRyaWVzL2FwaS9kZWxldGUuc2VydmVyJ1xuaW1wb3J0IENvbW1lbnRUZXh0QXJlYSBmcm9tICd+L2ZlYXR1cmVzL2VudHJpZXMvY29tcG9uZW50cy9jb21tZW50LXRleHQtYXJlYSdcbmltcG9ydCBDb21tZW50cyBmcm9tICd+L2ZlYXR1cmVzL2VudHJpZXMvY29tcG9uZW50cy9jb21tZW50cydcbmltcG9ydCBFbnRyeURlbGV0ZU1vZGFsIGZyb20gJ34vZmVhdHVyZXMvZW50cmllcy9jb21wb25lbnRzL2VudHJ5LWRlbGV0ZS1tb2RhbCdcbmltcG9ydCBIZWFydEJ1dHRvbiBmcm9tICd+L2ZlYXR1cmVzL2VudHJpZXMvY29tcG9uZW50cy9oZWFydC1idXR0b24nXG5pbXBvcnQgSW1hZ2VEaXNwbGF5IGZyb20gJ34vZmVhdHVyZXMvZW50cmllcy9jb21wb25lbnRzL2ltYWdlLWRpc3BsYXknXG5pbXBvcnQge1xuXHRFbnRyeUluUGFnZSxcblx0Z2V0UHJpc21hU2VsZWN0RW50cnlJblBhZ2UsXG59IGZyb20gJ34vZmVhdHVyZXMvZW50cmllcy90eXBlcy9lbnRyeS1pbi1wYWdlJ1xuaW1wb3J0IHVzZUN1cnJlbnRVc2VyIGZyb20gJ34vaG9va3MvdXNlQ3VycmVudFVzZXInXG5pbXBvcnQgZW50cnlTdHlsZXNoZWV0IGZyb20gJ34vc3R5bGVzL2VudHJ5LmNzcydcbmltcG9ydCBmb3Jtc1N0eWxlc2hlZXQgZnJvbSAnfi9zdHlsZXMvZm9ybXMuY3NzJ1xuaW1wb3J0IHsgZGlzcGxheURhdGVUaW1lIH0gZnJvbSAnfi91dGlscy9kYXRlLnV0aWxzJ1xuaW1wb3J0IHsgZGIgfSBmcm9tICd+L3V0aWxzL2RiLnNlcnZlcidcbmltcG9ydCB7IGNsb3VkaW5hcnkgfSBmcm9tICd+L3V0aWxzL3N0b3JhZ2Uuc2VydmVyJ1xuXG5leHBvcnQgbGV0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW1xuXHR7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBlbnRyeVN0eWxlc2hlZXQgfSxcblx0eyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogZm9ybXNTdHlsZXNoZWV0IH0sXG5dXG5cbmV4cG9ydCBsZXQgbWV0YTogTWV0YUZ1bmN0aW9uID0gKHsgZGF0YSB9KSA9PiB7XG5cdGxldCBlbnRyeSA9IGRlc2VyaWFsaXplPEVudHJ5SW5QYWdlPihkYXRhKVxuXG5cdHJldHVybiB7XG5cdFx0dGl0bGU6IGAke2VudHJ5LnRpdGxlfSB8IFNoZWlrYWggRGlhcnlgLFxuXHR9XG59XG5cbi8vIFRoZSBsaWtlIGFjdGlvbiBkb2VzIGEgcHV0IGFuZCBoYW5kbGUgdGhlIHVpIGl0c2VsZiwgbm8gbmVlZCB0byByZWxvYWRcbmV4cG9ydCBsZXQgdW5zdGFibGVfc2hvdWxkUmVsb2FkOiBTaG91bGRSZWxvYWRGdW5jdGlvbiA9ICh7IHN1Ym1pc3Npb24gfSkgPT5cblx0c3VibWlzc2lvbj8ubWV0aG9kICE9ICdQVVQnXG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcywgcmVxdWVzdCB9KSA9PiB7XG5cdGxldCBzbHVnID0gei5zdHJpbmcoKS5wYXJzZShwYXJhbXM/LnNsdWcpXG5cblx0bGV0IGVudHJ5ID0gYXdhaXQgZGIuZW50cnkuZmluZEZpcnN0KHtcblx0XHRzZWxlY3Q6IGdldFByaXNtYVNlbGVjdEVudHJ5SW5QYWdlKCksXG5cdFx0d2hlcmU6IHtcblx0XHRcdHNsdWcsXG5cdFx0fSxcblx0fSlcblxuXHRpZiAoZW50cnkgPT0gbnVsbCkge1xuXHRcdHJldHVybiByZWRpcmVjdCgnL2FwcC9lbnRyaWVzJylcblx0fVxuXG5cdGxldCByZXN1bHQ6IEVudHJ5SW5QYWdlID0ge1xuXHRcdC4uLmVudHJ5LFxuXHRcdHBpY3R1cmVzOiBlbnRyeS5waWN0dXJlcy5tYXAocCA9PiAoe1xuXHRcdFx0ZmlsZTogY2xvdWRpbmFyeS51cmwocC5maWxlKSA/PyAnJyxcblx0XHRcdHByZXZpZXc6XG5cdFx0XHRcdGNsb3VkaW5hcnkudXJsKHAuZmlsZSwgeyB3aWR0aDogMTAwMCwgaGVpZ2h0OiAxMDAwLCBjcm9wOiAnbGltaXQnIH0pID8/ICcnLFxuXHRcdH0pKSxcblx0fVxuXG5cdHJldHVybiBzZXJpYWxpemUocmVzdWx0KVxufVxuXG5leHBvcnQgbGV0IGFjdGlvbiA9IGRlbGV0ZUFjdGlvblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFbnRyaWVzQnlJZFBhZ2UoKSB7XG5cdGxldCB7XG5cdFx0aWQsXG5cdFx0c2x1Zyxcblx0XHR0aXRsZSxcblx0XHRjb250ZW50LFxuXHRcdGNyZWF0ZWRBdCxcblx0XHR1c2VyLFxuXHRcdHBpY3R1cmVzLFxuXHRcdGNvbW1lbnRzLFxuXHRcdGxpa2VkQnksXG5cdFx0X2NvdW50OiB7IGxpa2VkQnk6IGxpa2VkQnlDb3VudCB9LFxuXHR9OiBFbnRyeUluUGFnZSA9IGRlc2VyaWFsaXplKHVzZUxvYWRlckRhdGEoKSlcblxuXHRsZXQgY3VycmVudFVzZXIgPSB1c2VDdXJyZW50VXNlcigpXG5cblx0Y29uc3QgW3Nob3dEZWxldGVNb2RhbCwgc2V0U2hvd0RlbGV0ZU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cdC8vIE9yaWdpbmFsIHZhbHVlIG9mIHRoZSBsaWtlIHRoZSB1c2VyIGdhdmUuIFVzZWZ1bCB0byBjb21wdXRlIG51bWJlcnMgb2YgbGlrZSBsYXRlclxuXHRjb25zdCB1c2VySGFzTGlrZWQgPSBjdXJyZW50VXNlclxuXHRcdD8gbGlrZWRCeS5zb21lKGwgPT4gbC5pZCA9PSBjdXJyZW50VXNlcj8uaWQpXG5cdFx0OiBmYWxzZVxuXG5cdC8vIG51bWJlciBvZiBsaWtlcyBmcm9tIHRoZSBkYiwgbWludXMgdGhlIHVzZXIgbGlrZVxuXHRjb25zdCBsaWtlcyA9IHVzZXJIYXNMaWtlZCA/IGxpa2VkQnlDb3VudCAtIDEgfHwgMCA6IGxpa2VkQnlDb3VudFxuXG5cdGxldCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpXG5cblx0cmV0dXJuIChcblx0XHQ8YXJ0aWNsZT5cblx0XHRcdHtwaWN0dXJlcy5tYXAocGljID0+IChcblx0XHRcdFx0PGxpbmsgcmVsPVwicHJlbG9hZFwiIGFzPVwiaW1hZ2VcIiBocmVmPXtwaWMuZmlsZX0ga2V5PXtwaWMuZmlsZX0gLz5cblx0XHRcdCkpfVxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cblx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBzcGFjZS14LTEgbWItM1wiPlxuXHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPnt0aXRsZX08L2gxPlxuXHRcdFx0XHRcdFx0PGgyPlxuXHRcdFx0XHRcdFx0XHRieXsnICd9XG5cdFx0XHRcdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidW5kZXJsaW5lIHVuZGVybGluZS1vZmZzZXQtMiBob3Zlcjp1bmRlcmxpbmUtb2Zmc2V0LTRcIlxuXHRcdFx0XHRcdFx0XHRcdHRvPXtgL2FwcC91c2Vycy8ke3VzZXIudXNlcm5hbWV9YH0+XG5cdFx0XHRcdFx0XHRcdFx0e3VzZXIudXNlcm5hbWV9XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdDwvaDI+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PEltYWdlRGlzcGxheSBwaWN0dXJlcz17cGljdHVyZXN9IC8+XG5cdFx0XHRcdFx0PHNtYWxsIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG9wYWNpdHktNzBcIj5cblx0XHRcdFx0XHRcdHtkaXNwbGF5RGF0ZVRpbWUoY3JlYXRlZEF0KX1cblx0XHRcdFx0XHQ8L3NtYWxsPlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdHshY29udGVudCAmJiBjdXJyZW50VXNlcj8uaWQgIT0gdXNlci5pZCA/IG51bGwgOiAoXG5cdFx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtYi01XCI+XG5cdFx0XHRcdFx0XHR7Y29udGVudCA/IChcblx0XHRcdFx0XHRcdFx0PGZpZWxkc2V0IGNsYXNzTmFtZT1cIm10LTMgcGItMTAgbWItYXV0b1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxsZWdlbmQ+RGVzY3JpcHRpb248L2xlZ2VuZD5cblx0XHRcdFx0XHRcdFx0XHQ8cD57Y29udGVudH08L3A+XG5cdFx0XHRcdFx0XHRcdDwvZmllbGRzZXQ+XG5cdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHRcdHshY3VycmVudFVzZXIgfHwgY3VycmVudFVzZXI/LmlkICE9IHVzZXIuaWQgPyBudWxsIDogKFxuXHRcdFx0XHRcdFx0XHQ8ZmllbGRzZXQgY2xhc3NOYW1lPVwibXQtM1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxsZWdlbmQ+QWN0aW9uczwvbGVnZW5kPlxuXHRcdFx0XHRcdFx0XHRcdDxuYXYgY2xhc3NOYW1lPVwibXQtMyBmbGV4IGp1c3RpZnktY2VudGVyIHNwYWNlLXgtNVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwic2hlaWthIGJ1dHRvbiBmbGV4XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dG89eycvYXBwL2VudHJpZXMvJyArIHNsdWcgKyAnL3VwZGF0ZSd9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8RmlFZGl0MyBzaXplPVwiMS41cmVtXCIgY2xhc3NOYW1lPVwibXItM1wiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFVwZGF0ZVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJzaGVpa2EgYnV0dG9uIGRhbmdlciBmbGV4XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0U2hvd0RlbGV0ZU1vZGFsKHRydWUpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PEZpVHJhc2ggc2l6ZT1cIjEuNXJlbVwiIGNsYXNzTmFtZT1cIm1yLTNcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHREZWxldGVcblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvbmF2PlxuXHRcdFx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG5cdFx0XHRcdDxzZWN0aW9uPlxuXHRcdFx0XHRcdDxmaWVsZHNldD5cblx0XHRcdFx0XHRcdDxsZWdlbmQ+SGVhcnRzPC9sZWdlbmQ+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsIHAtNVwiPlxuXHRcdFx0XHRcdFx0XHQ8SGVhcnRCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRyZWFkb25seT17IWN1cnJlbnRVc2VyfVxuXHRcdFx0XHRcdFx0XHRcdHNsdWc9e3NsdWd9XG5cdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxMaWtlcz17bGlrZXN9XG5cdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxVc2VySGFzTGlrZWQ9e3VzZXJIYXNMaWtlZH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZmllbGRzZXQ+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0PHNlY3Rpb24+XG5cdFx0XHRcdFx0PGZpZWxkc2V0IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuXHRcdFx0XHRcdFx0PGxlZ2VuZD5Db21tZW50cyAoe2NvbW1lbnRzLmxlbmd0aH0pPC9sZWdlbmQ+XG5cdFx0XHRcdFx0XHR7Y3VycmVudFVzZXIgPyA8Q29tbWVudFRleHRBcmVhIHNsdWc9e3NsdWd9IC8+IDogbnVsbH1cblx0XHRcdFx0XHRcdDxDb21tZW50cyBlbnRyeT17eyBjb21tZW50cywgc2x1ZywgaWQgfX0gLz5cblx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxFbnRyeURlbGV0ZU1vZGFsXG5cdFx0XHRcdGVudHJ5SWQ9e2lkfVxuXHRcdFx0XHR0cmFuc2l0aW9uPXt0cmFuc2l0aW9ufVxuXHRcdFx0XHRzaG93PXtzaG93RGVsZXRlTW9kYWx9XG5cdFx0XHRcdG9uQ2FuY2VsPXsoKSA9PiBzZXRTaG93RGVsZXRlTW9kYWwoZmFsc2UpfVxuXHRcdFx0Lz5cblx0XHQ8L2FydGljbGU+XG5cdClcbn1cbiIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgcmVkaXJlY3QgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnXG5pbXBvcnQgeyBkYiB9IGZyb20gJ34vdXRpbHMvZGIuc2VydmVyJ1xuaW1wb3J0IHsgY2xvdWRpbmFyeSB9IGZyb20gJ34vdXRpbHMvc3RvcmFnZS5zZXJ2ZXInXG5pbXBvcnQgeyBwYXJzZUZvcm1EYXRhIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZm9ybWRhdGEudXRpbHMuc2VydmVyJ1xuXG5sZXQgZm9ybVZhbGlkYXRvciA9IHoub2JqZWN0KHtcblx0aWQ6IHouc3RyaW5nKCkudXVpZCgpLm5vbmVtcHR5KCksXG59KVxuXG5leHBvcnQgbGV0IGRlbGV0ZUFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcblx0aWYgKHJlcXVlc3QubWV0aG9kICE9ICdERUxFVEUnKSB7XG5cdFx0cmV0dXJuIG51bGxcblx0fVxuXG5cdGxldCBmb3JtID0gYXdhaXQgcGFyc2VGb3JtRGF0YShyZXF1ZXN0LCBmb3JtVmFsaWRhdG9yKVxuXG5cdGNvbnNvbGUubG9nKCdSZXF1ZXN0IHRvIGRlbGV0ZSBlbnRyeScsIGZvcm0uaWQpXG5cblx0bGV0IGxpbmtlZFBpY3R1cmVzID0gYXdhaXQgZGIucGljdHVyZS5maW5kTWFueSh7XG5cdFx0d2hlcmU6IHtcblx0XHRcdGVudHJ5SWQ6IGZvcm0uaWQsXG5cdFx0fSxcblx0fSlcblxuXHQvLyBUaGlzIGNhbiBiZSBkb25lIGluIHRoZSBiZ1xuXHRjbG91ZGluYXJ5LmFwaVxuXHRcdC5kZWxldGVfcmVzb3VyY2VzKGxpbmtlZFBpY3R1cmVzLm1hcChwaWMgPT4gcGljLmZpbGUpKVxuXHRcdC50aGVuKCgpID0+IGNvbnNvbGUuaW5mbygnQWxsIGZpbGVzIGhhdmUgYmVlbiBkZWxldGVkJykpXG5cblx0Ly8gV2UgZmlyc3QgZGVsZXRlIGFsbCB0aGUgcGljdHVyZXNcblx0YXdhaXQgZGIucGljdHVyZS5kZWxldGVNYW55KHtcblx0XHR3aGVyZToge1xuXHRcdFx0ZW50cnlJZDogZm9ybS5pZCxcblx0XHR9LFxuXHR9KVxuXG5cdC8vIFRoZW4gd2UgZGVsZXRlIHRoZSBlbnRyeVxuXHRhd2FpdCBkYi5lbnRyeS5kZWxldGUoe1xuXHRcdHdoZXJlOiB7XG5cdFx0XHRpZDogZm9ybS5pZCxcblx0XHR9LFxuXHR9KVxuXG5cdHJldHVybiByZWRpcmVjdCgnL2FwcC9lbnRyaWVzJylcbn1cbiIsICJpbXBvcnQgeyBFbnRyeSB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUZldGNoZXIgfSBmcm9tICdyZW1peCdcbmltcG9ydCBGb3JtRmllbGQgZnJvbSAnfi9jb21wb25lbnRzL2Zvcm0tZmllbGQnXG5pbXBvcnQgUmVhY3RMb2FkaW5nIGZyb20gJ3JlYWN0LWxvYWRpbmcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbW1lbnRUZXh0QXJlYSh7IHNsdWcgfTogeyBzbHVnOiBFbnRyeVsnc2x1ZyddIH0pIHtcblx0Y29uc3QgZmV0Y2hlciA9IHVzZUZldGNoZXIoKVxuXHRjb25zdCB0ZXh0QXJlYVJlZiA9IHVzZVJlZjxIVE1MVGV4dEFyZWFFbGVtZW50PihudWxsKVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKGZldGNoZXIuc3RhdGUgPT0gJ2lkbGUnICYmIHRleHRBcmVhUmVmLmN1cnJlbnQpIHtcblx0XHRcdHRleHRBcmVhUmVmLmN1cnJlbnQudmFsdWUgPSAnJ1xuXHRcdH1cblx0fSwgW2ZldGNoZXIuc3RhdGVdKVxuXG5cdHJldHVybiAoXG5cdFx0PGZldGNoZXIuRm9ybSBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPXtgL2FwcC9lbnRyaWVzLyR7c2x1Z30vY3JlYXRlLWNvbW1lbnRgfT5cblx0XHRcdDxGb3JtRmllbGQgbGFiZWw9XCJBZGQgYSBjb21tZW50XCI+XG5cdFx0XHRcdDx0ZXh0YXJlYSByZWY9e3RleHRBcmVhUmVmfSBuYW1lPVwiYm9keVwiIHJvd3M9ezV9PjwvdGV4dGFyZWE+XG5cdFx0XHQ8L0Zvcm1GaWVsZD5cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyLTUwMCBtbC01XCI+XG5cdFx0XHRcdHtmZXRjaGVyLmRhdGE/LmJvZHkgPyBmZXRjaGVyLmRhdGEuYm9keT8uX2Vycm9ycyA6IG51bGx9XG5cdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxuXHRcdFx0XHRjbGFzc05hbWU9XCJzaGVpa2EgYnV0dG9uIGZsb2F0LXJpZ2h0IGZsZXggbXItMyBzcGFjZS14LTNcIj5cblx0XHRcdFx0e2ZldGNoZXIuc3VibWlzc2lvbiA/IChcblx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0PFJlYWN0TG9hZGluZ1xuXHRcdFx0XHRcdFx0XHR0eXBlPVwic3Bpbm5pbmdCdWJibGVzXCJcblx0XHRcdFx0XHRcdFx0Y29sb3I9XCJ2YXIoLS1wcmltYXJ5LTUwMClcIlxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ9XCIxLjVyZW1cIlxuXHRcdFx0XHRcdFx0XHR3aWR0aD1cIjEuNXJlbVwiXG5cdFx0XHRcdFx0XHQvPnsnICd9XG5cdFx0XHRcdFx0XHQ8c3Bhbj5TZW5kaW5nLi4uPC9zcGFuPlxuXHRcdFx0XHRcdDwvPlxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdCdTZW5kIHlvdXIgY29tbWVudCdcblx0XHRcdFx0KX1cblx0XHRcdDwvYnV0dG9uPlxuXHRcdDwvZmV0Y2hlci5Gb3JtPlxuXHQpXG59XG4iLCAiaW1wb3J0IHsgZGlzcGxheURhdGVUaW1lIH0gZnJvbSAnfi91dGlscy9kYXRlLnV0aWxzJ1xuaW1wb3J0IHsgRW50cnlJblBhZ2UgfSBmcm9tICcuLi90eXBlcy9lbnRyeS1pbi1wYWdlJ1xuXG50eXBlIENvbW1lbnRzUHJvcHMgPSB7XG4gIGVudHJ5OiBQaWNrPEVudHJ5SW5QYWdlLCAnY29tbWVudHMnIHwgJ3NsdWcnPiAmIHsgaWQ6IHN0cmluZyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbW1lbnRzKHsgZW50cnkgfTogQ29tbWVudHNQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICB7ZW50cnkuY29tbWVudHMubWFwKChjb21tZW50KSA9PiAoXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInAtNVwiIGtleT17Y29tbWVudC5pZH0+XG4gICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICB7Y29tbWVudC51c2VyPy51c2VybmFtZX1cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgIHtjb21tZW50LmNyZWF0ZWRBdFxuICAgICAgICAgICAgICAgICAgPyBgICgke2Rpc3BsYXlEYXRlVGltZShjb21tZW50LmNyZWF0ZWRBdCl9KWBcbiAgICAgICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgbWwtNVwiPntjb21tZW50LmJvZHl9PC9wPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8Lz5cbiAgKVxufVxuIiwgImltcG9ydCB7IHogfSBmcm9tICd6b2QnXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5RGF0ZShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgbGV0IGQgPSB6LmRhdGUoKS5wYXJzZShkYXRlKVxuICByZXR1cm4gYCR7U3RyaW5nKGQuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpfS8ke1N0cmluZyhkLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpfS8ke2QuZ2V0RnVsbFllYXIoKX1gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VGltZShkYXRlOiBEYXRlLCBkaXNwbGF5U2Vjb25kcyA9IGZhbHNlKTogc3RyaW5nIHtcbiAgbGV0IGQgPSB6LmRhdGUoKS5wYXJzZShkYXRlKVxuICByZXR1cm4gKFxuICAgIGAke1N0cmluZyhkLmdldEhvdXJzKCkpLnBhZFN0YXJ0KDIsICcwJyl9OiR7U3RyaW5nKGQuZ2V0TWludXRlcygpKS5wYWRTdGFydCgyLCAnMCcpfWAgK1xuICAgIChkaXNwbGF5U2Vjb25kcyA/IGA6JHtkLmdldFNlY29uZHMoKX1gIDogJycpXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlEYXRlVGltZShkYXRlOiBEYXRlLCBkaXNwbGF5U2Vjb25kcyA9IGZhbHNlKTogc3RyaW5nIHtcbiAgbGV0IGQgPSB6LmRhdGUoKS5wYXJzZShkYXRlKVxuICByZXR1cm4gYCR7ZGlzcGxheURhdGUoZCl9IGF0ICR7ZGlzcGxheVRpbWUoZCwgZGlzcGxheVNlY29uZHMpfWBcbn1cbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgUmVhY3RMb2FkaW5nIGZyb20gJ3JlYWN0LWxvYWRpbmcnXG5pbXBvcnQgeyBUcmFuc2l0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdC90cmFuc2l0aW9uJ1xuXG50eXBlIEVudHJ5RGVsZXRlTW9kYWxQcm9wcyA9IHtcbiAgZW50cnlJZDogc3RyaW5nXG4gIHRyYW5zaXRpb246IFRyYW5zaXRpb25cbiAgc2hvdz86IGJvb2xlYW5cbiAgb25DYW5jZWw/OiAoKSA9PiB2b2lkXG4gIG9uRGVsZXRlPzogKCkgPT4gdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFbnRyeURlbGV0ZU1vZGFsKHtcbiAgZW50cnlJZCxcbiAgc2hvdyA9IGZhbHNlLFxuICB0cmFuc2l0aW9uLFxuICBvbkNhbmNlbCxcbiAgb25EZWxldGUsXG59OiBFbnRyeURlbGV0ZU1vZGFsUHJvcHMpIHtcbiAgY29uc3QgW29wYWNpdHksIHNldE9wYWNpdHldID0gdXNlU3RhdGUoc2hvdyA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS0wJylcbiAgY29uc3QgW2Rpc3BsYXksIHNldERpc3BsYXldID0gdXNlU3RhdGUoc2hvdyA/ICdmbGV4JyA6ICdoaWRkZW4nKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNob3cpIHtcbiAgICAgIHNldERpc3BsYXkoJ2ZsZXgnKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRPcGFjaXR5KCdvcGFjaXR5LTEwMCcpKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRPcGFjaXR5KCdvcGFjaXR5LTAnKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXREaXNwbGF5KCdoaWRkZW4nKSwgMjAwKVxuICAgIH1cbiAgfSwgW3Nob3ddKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgb25DbGljaz17KCkgPT4gb25DYW5jZWw/LigpfVxuICAgICAgY2xhc3NOYW1lPXtgYmFja2Ryb3AgYWJzb2x1dGUgYmctYmxhY2sgYmctb3BhY2l0eS0zMCB0b3AtMCBsZWZ0LTAgdy1mdWxsIGgtZnVsbCB0cmFuc2l0aW9uLW9wYWNpdHkgJHtkaXNwbGF5fSAke29wYWNpdHl9YH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LWF1dG8gbWItMjAgbXgtNSBtZDpteC1hdXRvIHctZnVsbCBmbGV4IGZsZXgtd3JhcC1yZXZlcnNlIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMS8yIGgtMzYgYmctYmxhY2sgYmctb3BhY2l0eS02MCB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCBweC0xMiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmb250LWJvbGQgdGV4dC14bFwiPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGVudHJ5ID8gPGJyIC8+XG4gICAgICAgICAgICBUaGlzIGlzIDxlbT4gcGVybWFuZW50ICE8L2VtPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJ3LTQ0IG1sLWF1dG8gbWItNSBtZDptbC01IG1kOm15LWF1dG8gc3BhY2UteS01XCI+XG4gICAgICAgICAgPEZvcm0gbWV0aG9kPVwiZGVsZXRlXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJpZFwiIHZhbHVlPXtlbnRyeUlkfSByZWFkT25seSAvPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgb25EZWxldGU/LigpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTE2IGJnLWJsYWNrIGJnLW9wYWNpdHktNjAgdGV4dC13aGl0ZSByb3VuZGVkLWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZm9udC1ib2xkIHRleHQteGxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dHJhbnNpdGlvbi5zdWJtaXNzaW9uID8gKFxuICAgICAgICAgICAgICAgIDxSZWFjdExvYWRpbmdcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzcGlubmluZ0J1YmJsZXNcIlxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxLjVyZW1cIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxLjVyZW1cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgJ0RlbGV0ZS4nXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgIG9uQ2FuY2VsPy4oKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTE2IGJnLWJsYWNrIGJnLW9wYWNpdHktNjAgdGV4dC13aGl0ZSByb3VuZGVkLWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZm9udC1ib2xkIHRleHQteGxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIERvbid0IGRlbGV0ZS5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9hc2lkZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgRW50cnkgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUZldGNoZXIgfSBmcm9tICdyZW1peCdcbmltcG9ydCBIZWFydEljb24gZnJvbSAnfi9jb21wb25lbnRzL2hlYXJ0LWljb24nXG5cbnR5cGUgSGVhcnRCdXR0b25Qcm9wcyA9IHtcblx0c2x1ZzogRW50cnlbJ3NsdWcnXVxuXHRvcmlnaW5hbFVzZXJIYXNMaWtlZDogYm9vbGVhblxuXHRvcmlnaW5hbExpa2VzOiBudW1iZXJcblx0cmVhZG9ubHk/OiBib29sZWFuXG59XG5cbi8vIE9wdGltaXN0aWMgbGlrZSBidXR0b24sIGRpcmVjdGx5IHVwZGF0ZXMgaXRzIHZhbHVlIHRoZW4gdXBkYXRlIGFnYWluIGlmIHRoZSBzZXJ2ZXIgd2FzIG5vdCBva1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhcnRCdXR0b24oe1xuXHRzbHVnLFxuXHRvcmlnaW5hbFVzZXJIYXNMaWtlZCxcblx0b3JpZ2luYWxMaWtlcyxcblx0cmVhZG9ubHkgPSB0cnVlLFxufTogSGVhcnRCdXR0b25Qcm9wcykge1xuXHRsZXQgZmV0Y2hlciA9IHVzZUZldGNoZXIoKVxuXG5cdGNvbnN0IFt1c2VySGFzTGlrZWQsIHNldFVzZXJIYXNMaWtlZF0gPSB1c2VTdGF0ZShvcmlnaW5hbFVzZXJIYXNMaWtlZClcblxuXHQvLyBBY3R1YWwgbnVtYmVyIG9mIGxpa2VzIHRvIGRpc3BsYXlcblx0Y29uc3QgW2xpa2VzLCBzZXRMaWtlc10gPSB1c2VTdGF0ZShcblx0XHRvcmlnaW5hbFVzZXJIYXNMaWtlZCA/IG9yaWdpbmFsTGlrZXMgKyAxIDogb3JpZ2luYWxMaWtlcyxcblx0KVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0c2V0TGlrZXModXNlckhhc0xpa2VkID8gb3JpZ2luYWxMaWtlcyArIDEgOiBvcmlnaW5hbExpa2VzKVxuXHR9LCBbdXNlckhhc0xpa2VkXSlcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmIChcblx0XHRcdHVzZXJIYXNMaWtlZCAhPSB1bmRlZmluZWQgJiZcblx0XHRcdGZldGNoZXIuZGF0YSAmJlxuXHRcdFx0dXNlckhhc0xpa2VkICE9IGZldGNoZXIuZGF0YVxuXHRcdCkge1xuXHRcdFx0c2V0VXNlckhhc0xpa2VkKGZldGNoZXIuZGF0YSlcblx0XHR9XG5cdH0sIFtmZXRjaGVyLmRhdGFdKVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKHVzZXJIYXNMaWtlZCAhPSB1bmRlZmluZWQgJiYgZmV0Y2hlci5zdGF0ZSA9PSAnc3VibWl0dGluZycpIHtcblx0XHRcdHNldFVzZXJIYXNMaWtlZCghdXNlckhhc0xpa2VkKVxuXHRcdH1cblx0fSwgW2ZldGNoZXIuc3RhdGVdKVxuXG5cdGlmIChyZWFkb25seSkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdDxIZWFydEljb24gY2xhc3NOYW1lPVwidy0xMCBoLTEwIGZpbHRlciB0ZXh0LWRhbmdlci01MDAgZHJvcC1zaGFkb3ctZGFuZ2VyXCIgLz5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZ1wiPntsaWtlc308L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxmZXRjaGVyLkZvcm0gbWV0aG9kPVwicHV0XCIgYWN0aW9uPXtgL2FwcC9lbnRyaWVzLyR7c2x1Z30vbGlrZWB9PlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHR0eXBlPVwiaGlkZGVuXCJcblx0XHRcdFx0XHRuYW1lPVwiYWxyZWFkeUxpa2VkXCJcblx0XHRcdFx0XHRyZWFkT25seVxuXHRcdFx0XHRcdHZhbHVlPXt1c2VySGFzTGlrZWQgPyAndHJ1ZScgOiAnZmFsc2UnfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XG5cdFx0XHRcdFx0XHQ8SGVhcnRJY29uXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YHctMTAgaC0xMCBmaWx0ZXIgJHtcblx0XHRcdFx0XHRcdFx0XHR1c2VySGFzTGlrZWRcblx0XHRcdFx0XHRcdFx0XHRcdD8gJ3RleHQtZGFuZ2VyLTUwMCBkcm9wLXNoYWRvdy1kYW5nZXIgaG92ZXI6dGV4dC1kYW5nZXItMzAwJ1xuXHRcdFx0XHRcdFx0XHRcdFx0OiAndGV4dC1ibGFjayBkcm9wLXNoYWRvdy1wcmltYXJ5IGhvdmVyOnRleHQtZGFuZ2VyLTkwMCdcblx0XHRcdFx0XHRcdFx0fWB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGdcIj57bGlrZXN9PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZmV0Y2hlci5Gb3JtPlxuXHRcdClcblx0fVxufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYXJ0SWNvbih7XG4gICAgY2xhc3NOYW1lID0gJ3ctZnVsbCBoLWZ1bGwnLFxufToge1xuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xufSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDEwMCA3OC43NlwiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk05My44Niw0OUEyMSwyMSwwLDEsMCw2NC4xMiwxOS4yNkw1MCwzMy4zOCw3OS43NSw2My4xM1pcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAtMTMuMTMpXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTM1Ljg4LDE5LjI2YTIxLjA5LDIxLjA5LDAsMCwwLTI5Ljc0LDBoMEEyMS4wOCwyMS4wOCwwLDAsMCw2LjE0LDQ5TDIwLjI1LDYzLjEzLDUwLDMzLjM4WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIC0xMy4xMylcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNTAsMzMuMzgsMTYuNjgsNTkuNTUsNDguMzIsOTEuMTlhMi4zNywyLjM3LDAsMCwwLDMuMzYsMEw4Mi40NSw2MC40MlpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAtMTMuMTMpXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn0iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBTaGVpa2FoTG9nbyBmcm9tICd+L2NvbXBvbmVudHMvc2hlaWthLWxvZ28nXG5pbXBvcnQgeyBFbnRyeUluUGFnZSB9IGZyb20gJy4uL3R5cGVzL2VudHJ5LWluLXBhZ2UnXG5cbmludGVyZmFjZSBJbWFnZURpc3BsYXlQcm9wcyB7XG5cdHBpY3R1cmVzOiBFbnRyeUluUGFnZVsncGljdHVyZXMnXVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZURpc3BsYXkoeyBwaWN0dXJlcyB9OiBJbWFnZURpc3BsYXlQcm9wcykge1xuXHRpZiAoIXBpY3R1cmVzIHx8IHBpY3R1cmVzLmxlbmd0aCA8PSAwKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxTaGVpa2FoTG9nbyBjbGFzc05hbWU9XCJteC1hdXRvIHctZnVsbCBoLWZ1bGwgYm9yZGVyIGJvcmRlci1wcmltYXJ5LTUwMCB0ZXh0LXByaW1hcnktNTAwXCIgLz5cblx0XHQpXG5cdH1cblxuXHRjb25zdCBbZnVsbHNjcmVlbiwgc2V0RnVsbHNjcmVlbl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEZ1bGxzY3JlZW4odHJ1ZSl9PlxuXHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0c3JjPXtwaWN0dXJlc1swXS5wcmV2aWV3fVxuXHRcdFx0XHRcdGFsdD1cIlwiXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwibXgtYXV0byB3LWZ1bGwgbWF4LXctMnhsIGgtZnVsbCBib3JkZXIgYm9yZGVyLXByaW1hcnktNTAwIHRleHQtcHJpbWFyeS01MDBcIlxuXHRcdFx0XHQvPlxuXHRcdFx0PC9idXR0b24+XG5cdFx0XHR7ZnVsbHNjcmVlbiA/IChcblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldEZ1bGxzY3JlZW4oZmFsc2UpfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImZpeGVkIHotMjAgdG9wLTAgbGVmdC0wIHctc2NyZWVuIGgtc2NyZWVuIGJnLWJsYWNrIGJnLW9wYWNpdHktNTAgb2JqZWN0LWNvbnRhaW4gcHgtMSBtZDpweC01IGxnOnB4LTEwIHhsOnB4LTIwXCI+XG5cdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBiZy1jb250YWluIGJnLW5vLXJlcGVhdCBiZy1jZW50ZXJcIlxuXHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7cGljdHVyZXNbMF0uZmlsZX0pYCxcblx0XHRcdFx0XHRcdH19PjwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCkgOiBudWxsfVxuXHRcdDwvPlxuXHQpXG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hlaWthaExvZ28oe1xuICBjbGFzc05hbWUgPSAndy1mdWxsIGgtZnVsbCcsXG59OiB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xufSkge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgd2lkdGg9XCIxNzA2LjdcIlxuICAgICAgaGVpZ2h0PVwiMTcwNi43XCJcbiAgICAgIGVuYWJsZUJhY2tncm91bmQ9XCJuZXcgMCAwIDE4NDIuNSAxODQyLjVcIlxuICAgICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDE3MDYuNyAxNzA2LjdcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgPlxuICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC04OS4zMjggLTU0LjY3OSlcIj5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPVwibTk5My40OSA2NzUuMmMtMi4yMjgtMC4yNzAwNS00LjcyNi0wLjU0MDExLTcuMTU2NS0wLjk0NTE5LTkuMjQ5NC0xLjU1MjgtMTguNTY2LTIuNTY1NS0yNy45NTEtMy4xNzMxLTEwLjY2Ny0wLjY3NTE0LTIxLjMzNC0wLjU0MDExLTMyLjAwMSAwLjI3MDA1LTcuNTYxNSAwLjU0MDExLTE1LjA1NiAxLjU1MjgtMjIuNDgyIDIuODM1Ni0yLjQzMDUgMC40MDUwOC00Ljg2MSAwLjg3NzY4LTcuMzU5IDAuODc3NjgtNC43MjYgMC02LjIxMTItMS42MjAzLTUuODA2Mi02LjM0NjMgMC4yMDI1NC0yLjQ5OCAwLjk0NTE5LTQuODYxIDEuNjIwMy03LjIyNCAzLjkxNTgtMTMuMzY4IDguNDM5Mi0yNi40NjUgMTQuNDQ4LTM5LjA5IDIuOTAzMS02LjE0MzcgNS40Njg2LTEyLjQyMiA4LjIzNjctMTguNjM0IDQuMzg4NC05Ljk5MiA5LjQ1MTktMTkuNjQ2IDE0LjUxNS0yOS4yMzMgMi45NzA2LTUuNjAzNiA1Ljk0MTItMTEuMjc1IDkuMzE2OS0xNi42MDggMC44Nzc2Ny0xLjM1MDMgMS43NTU0LTIuNzAwNSAyLjk3MDYtMy43ODA4IDIuMjk1NS0yLjAyNTQgNC41OTA5LTIuMDkyOSA2Ljk1MzktMC4xMzUwMyAwLjgxMDE2IDAuNjc1MTMgMS41NTI4IDEuNDg1MyAyLjIyNzkgMi4yOTU1IDQuNjU4NCA1LjgwNjIgOC41NzQyIDEyLjIyIDExLjYxMiAxOC45NzEgNC42NTg0IDEwLjMzIDguNzA5MiAyMC45MjkgMTIuNDkgMzEuNTI5IDYuNjgzOCAxOC43MDEgMTQuMzggMzYuOTk3IDIyLjI3OSA1NS4xNTkgMS4wODAyIDIuNDk4IDEuOTU3OSA0Ljk5NiAyLjYzMyA3LjYyOSAwLjIwMjYgMC43NDI2NSAwLjI3MDEgMS40ODUzIDAuMzM3NiAyLjIyOCAwLjA2NyAxLjM1MDMtMC42MDc2MyAyLjIyNzktMS44OTA0IDIuNzAwNS0wLjQwNTA4IDAuMTM1MDItMC44MTAxNiAwLjMzNzU2LTEuMjE1MiAwLjQwNTA4LTEuMTQ3NyAwLjEzNTAzLTIuMjk1NSAwLjEzNTAzLTMuNzgwOCAwLjI3MDA1em0xNzAuOTQtNDkuMjg1Yy0wLjIwMjYtMy43MTMyLTEuODkwNC00LjkyODUtNS41MzYxLTQuMzIwOS0xLjE0NzggMC4yMDI1NC0yLjI5NTUgMC41NDAxMS0zLjQ0MzIgMC44Nzc2OC0xMC4wNiAyLjgzNTYtMTkuNDQ0IDcuMTU2NC0yOC4yMjEgMTIuNjkzLTEyLjE1MiA3LjYyOS0yNC4xNyAxNS40NjEtMzYuMTg3IDIzLjI5Mi04LjMwNDIgNS40MDExLTE2LjU0MSAxMC45MzctMjQuODQ1IDE2LjQwNi0yLjYzMyAxLjc1NTQtNC45OTYgMy43ODA4LTYuNzUxNCA2LjQxMzgtMS44OTAzIDIuODM1Ni0xLjg5MDMgNC42NTg0IDAuMzM3NiA3LjI5MTUgMi4wOTI5IDIuNTY1NSA0Ljc5MzUgNC4yNTM0IDcuODk5MSA1LjQwMTEgMy44NDgzIDEuMzUwMyA3LjY5NjUgMi43NjggMTEuNDc3IDQuMzIwOSAxNS44NjYgNi41NDg4IDMwLjMxNCAxNS41MjggNDMuNjE0IDI2LjMzIDQuMDUwOSAzLjI0MDYgNy44OTkxIDYuNzUxNCAxMS44MTUgMTAuMTI3IDEuNzU1NCAxLjQ4NTMgMy40NDMyIDIuOTAzMSA1LjUzNjEgMy45MTU4IDMuNzgwOCAxLjg5MDQgNi4zNDYzIDEuMDEyNyA4LjIzNjctMi43NjggMC45NDUyLTEuODkwNCAxLjQ4NTMtMy44NDgzIDEuNzU1My01Ljg3MzcgMS4xNDc4LTcuMTU2NCAyLjIyOC0xNC4zMTMgMy4yNDA3LTIxLjQ2OSAxLjIxNTItOC41NzQyIDIuNDk4LTE3LjA4MSA0LjI1MzMtMjUuNTIgMS44MjI5LTguNjQxNyAzLjMwODItMTcuMzUxIDQuMzIwOS0yNi4xOTUgMC42MDc2LTUuMjY2MSAxLjE0NzctMTAuNTMyIDEuNjIwMy0xNS43OTggMC40MDUxLTQuMDUwOCAwLjYwNzYtOC4xNjkxIDAuODc3Ny0xMi4wMTcgMC0xLjIxNTIgMC4wNjctMi4xNjA0IDAtMy4xMDU2em0tNDMxLjA3IDY2Ljc3MXYxNC41ODNjLTAuMDY3NSAxMy44NC0wLjEzNTAzIDI3LjYxMy0wLjIwMjU0IDQxLjQ1MyAwIDEuNDE3OCAwLjA2NzUgMi44MzU2IDAuMTM1MDMgNC4xODU4IDAuMDY3NSAwLjc0MjY1IDAuMjAyNTQgMS40ODUzIDAuNDcyNTkgMi4yMjc5IDAuNTQwMTEgMS40ODUzIDEuNDg1MyAyLjA5MjkgMy4wMzgxIDEuODIyOSAwLjgxMDE2LTAuMTM1MDMgMS42ODc4LTAuNDA1MDggMi40MzA1LTAuNzQyNjUgMS44OTA0LTAuODc3NjggMy41MTA3LTIuMDkyOSA0Ljk5Ni0zLjUxMDcgNy4wODg5LTYuNDgxMyAxNC4zMTMtMTIuODI4IDIxLjczOS0xOC45NzEgMTIuOTYzLTEwLjczNSAyNy4wMDUtMTkuNjQ2IDQyLjQ2Ni0yNi4zMyAzLjQ0MzItMS40ODUzIDYuODg2NC0zLjAzODEgMTAuMzk3LTQuNTIzNCAzLjU3ODItMS41NTI4IDcuMDIxNC0zLjMwODIgMTAuMzk3LTUuMTk4NSAwLjU0MDEtMC4zMzc1NyAxLjE0NzctMC42NzUxMyAxLjYyMDMtMS4wODAyIDEuMjE1Mi0xLjAxMjcgMS4zNTAzLTIuMDkyOSAwLjYwNzYyLTMuNDQzMi0wLjc0MjY1LTEuMjE1Mi0xLjgyMjktMi4wOTI5LTIuOTcwNi0yLjkwMzEtOC42NDE3LTYuNDEzOC0xNy4zNTEtMTIuODI4LTI1Ljk5My0xOS4yNDEtMy44NDgzLTIuODM1Ni03Ljc2NC01LjQ2ODYtMTEuNDEtOC41MDY3LTE0LjUxNS0xMi4yMi0zMC4zODEtMjIuMzQ3LTQ2Ljk4OS0zMS40NjEtMS44OTA0LTEuMDEyNy0zLjg0ODMtMS45NTc5LTUuODczNy0yLjcwMDUtMi4yOTU1LTAuODc3NjgtNC4wNTA4IDAuMTM1MDItNC42NTg0IDIuNDk4LTAuMjAyNTQgMC44MTAxNi0wLjI3MDA1IDEuNjg3OC0wLjI3MDA1IDIuNTY1NS0wLjgxMDE3IDE1LjczMS0wLjY3NTE0IDMxLjUyOS0wLjEzNTAzIDQ3LjI1OWwwLjQwNTA4IDExLjk1Yy0wLjEzNTAzIDAuMDY3NS0wLjEzNTAzIDAuMDY3NS0wLjIwMjU0IDAuMDY3NXptMTY0Ljg3IDUyMS40N2MwLjQwNTA5IDUuNDAxMSAwLjk0NTE5IDEwLjczNSAyLjM2MyAxNi4wMDEgMy41MTA3IDEyLjU1OCA5Ljc4OTUgMjMuNDI3IDE5LjY0NiAzMi4xMzYgNC4zMjA5IDMuNzgwNyA5LjE4MTggNi44MTg5IDE0LjY1IDguNzc2OCA0LjM4ODQgMS41NTI4IDguOTc5MyAyLjQzMDQgMTMuNjM4IDIuMDkyOSA2LjQ4MTMtMC40NzI2IDEyLjQyMi0yLjYzMzEgMTcuODI0LTYuMTQzOCA1LjA2MzUtMy4yNDA2IDkuMzE2OS03LjM1ODkgMTIuOTYzLTEyLjA4NSA1LjQ2ODYtNy4wODg5IDkuMzE2OS0xNC45ODggMTEuOTUtMjMuNDk1IDEuOTU3OS02LjI3ODggMi45NzA2LTEyLjgyOCA0LjA1MDgtMTkuMzA5IDIuMDI1NC0xMi4xNTIgMi4yMjgtMjQuMzA1IDAuOTQ1MTktMzYuNDU3LTEuMDgwMi0xMC4xMjctMi45NzA2LTIwLjA1Mi01LjI2NjEtMjkuOTc2LTQuODYxLTIwLjY1OS05LjkyNDUtNDEuMzE4LTE0LjMxMy02Mi4xMTItMS40MTc4LTYuNjgzOS0yLjkwMzEtMTMuMy00LjA1MDgtMTkuOTg0LTEuMzUwMy03Ljk2NjYtMi4zNjMtMTYuMDAxLTMuMzc1Ny0yNC4wMzUtMS4wODAyLTguNjQxNy0yLjA5MjktMTcuMzUxLTMuMDM4MS0yNi4wNi0wLjQwNTA4LTMuOTgzMy0wLjYwNzYyLTcuOTY2Ni0wLjg3NzY4LTExLjk1LTAuMTM1MDItMS42MjAzIDAuMDY3NS0zLjI0MDcgMC41NDAxMS00Ljc5MzUgMC40NzI2LTEuNTUyOCAxLjM1MDMtMi43MDA1IDIuOTAzMS0zLjMwODEgMS4yODI4LTAuNDcyNiAyLjYzMy0wLjg3NzcgNC4wNTA4LTEuMjE1M2wyNy41NDYtNS44NzM2YzE5LjkxNi00LjM4ODQgMzkuMDIzLTEwLjg3IDU3LjMxOS0xOS44NDkgMzAuODU0LTE1LjA1NiA1Ny4wNDktMzUuOTg1IDc5LjM5Ni02MS44NDIgMTEuMzQyLTEzLjA5OCAyMS4zMzQtMjcuMTQgMzAuMzgxLTQxLjkyNiAwLjg3NzctMS4zNTAzIDEuNjIwMy0yLjc2ODEgMi44MzU2LTMuOTE1OCAyLjcwMDUtMi41NjU1IDUuODA2MS0zLjUxMDcgOS41MTk0LTIuMjk1NSA2LjIxMTIgMi4wMjU0IDEyLjQ5IDIuMTYwNSAxOC45MDQgMC45NDUyIDE3Ljc1Ni0zLjMwODIgMzIuMTM2LTE2LjQ3MyAzNi45My0zMy44MjQgMi40OTgtOC45MTE4IDIuMzYyOS0xNy44OTEgMC4yNy0yNi44Ny0xLjAxMjctNC4yNTMzLTIuNTY1NS04LjIzNjYtNC43OTM0LTExLjk1LTEuODkwNC0zLjE3MzEtNC4yNTM0LTYuMDA4Ny03LjIyNC04LjIzNjYtMS44MjI4LTEuMzUwMy0zLjg0ODMtMi40MzA1LTYuMDA4Ny0zLjEwNTYtMC44Nzc3LTAuMjcwMDYtMS40ODUzIDAuMjAyNTQtMS4zNTAzIDEuMTQ3NyAwLjEzNTEgMS40MTc4IDAuMzM3NiAyLjc2OCAwLjU0MDIgNC4xODU4IDAuODEwMSA1LjY3MTEgMC45NDUxIDExLjQxIDAuMjcgMTcuMTQ4LTAuNDcyNiAzLjc4MDctMS40MTc4IDcuNDI2NS0zLjEwNTYgMTAuODctMy4zMDgyIDYuODE4OC04LjY0MTggMTEuMjA3LTE2LjAwMSAxMy4wOTgtNS4zMzM2IDEuNDE3OC0xMC42NjcgMS4yODI3LTE2LjA2OCAwLjI3LTcuMTU2NS0xLjM1MDItMTMuOTA4LTMuOTE1Ny0yMC4xODctNy42OTY1LTUuNjcxMS0zLjM3NTctMTAuOTM3LTcuMjkxNS0xNi4wNjgtMTEuNDEtNi4zNDYzLTUuMDYzNS0xMi42MjUtMTAuMTI3LTE5LjEwNi0xNS4wNTYtMTguMDk0LTEzLjkwOC0zNy4xMzItMjYuMzk4LTU3LjUyMi0zNi42Ni0xOC40MzEtOS4yNDk0LTM3LjI2OC0xNy41NTQtNTYuOTgxLTIzLjgzMi0xOC4xNjEtNS43Mzg2LTM2LjcyNy05LjUxOTQtNTUuODM0LTEwLjUzMi0xMS44ODItMC42NzUxMy0yMy43NjUtMC4yMDI1NC0zNS41OCAxLjI4MjgtMTEuODgyIDEuNDg1My0yMy42MyAzLjkxNTgtMzUuMTc1IDcuMjI0LTQ2LjA0NCAxMy4zNjgtODcuNTY1IDM1LjEwNy0xMjQuMjIgNjYuMDk2LTguNjQxNyA3LjM1OS0xNy43NTYgMTQuMTEtMjcuNDc4IDE5Ljk4NC01LjI2NiAzLjE3MzEtMTAuODAyIDUuODczNy0xNi42NzYgNy44MzE2LTYuODE4OSAyLjI5NTQtMTMuNzczIDMuNTc4Mi0yMC45OTcgMi4zNjMtOS4zMTY5LTEuNTUyOS0xNS43OTgtNi41NDg5LTE5LjE3NC0xNS4zOTMtMS41NTI4LTMuOTgzMy0yLjE2MDQtOC4xMDE3LTIuMjk1NS0xMi4zNTUtMC4yMDI1NC01LjQwMTEgMC41NDAxMS0xMC44MDIgMS40ODUzLTE2LjA2OCAwLjA2NzUtMC41NDAxMSAwLjIwMjU0LTEuMDgwMiAwLjI3MDA2LTEuNjIwMyAwLjA2NzUtMC42NzUxMy0wLjc0MjY1LTEuMjE1Mi0xLjM1MDMtMS4wMTI3LTAuMzM3NTYgMC4xMzUwMy0wLjYwNzYyIDAuMjAyNTQtMC44Nzc2NyAwLjQwNTA4LTExLjI3NSA2LjAwODctMTcuOTU5IDE1LjI1OC0xOS42NDYgMjcuOTUxLTAuOTQ1MTkgNi44MTg5LTAuMjcwMDYgMTMuNTcgMS4wODAyIDIwLjI1NCAwLjY3NTE0IDMuNTEwNyAxLjQ4NTMgNi45NTM5IDMuMTczMSAxMC4xOTQgMi4zNjMgNC41OTEgNS4zMzM2IDguNjQxOCA5LjE4MTggMTIuMDE3IDguNzA5MiA3Ljc2NDEgMTguOTcxIDExLjc0NyAzMC41ODQgMTIuNTU4IDUuNTM2MSAwLjQwNSAxMS4wMDUgMC4wNjggMTYuMzM4LTEuNTUyOCAyLjQzMDUtMC43NDI3IDQuMTg1OCAwIDUuNzM4NiAxLjY4NzggMC43NDI2NSAwLjgxMDIgMS40MTc4IDEuNjg3OCAxLjk1NzkgMi41NjU1IDEuMDgwMiAxLjYyMDMgMi4wOTI5IDMuMjQwNyAzLjEwNTYgNC45Mjg1IDMuOTgzMyA2LjgxODkgOC4wMzQxIDEzLjU3IDEyLjM1NSAyMC4xMTkgMTEuNjggMTcuNjg5IDI1LjQ1MyAzMy41NTQgNDEuMzg2IDQ3LjQ2MiA4Ljg0NDMgNy43NjQxIDE4LjQ5OSAxNC41MTYgMjguMjIxIDIxLjE5OSA3LjA4ODkgNC45Mjg1IDE0LjU4MyA5LjI0OTMgMjIuMzQ3IDEzLjAzIDE1LjMyNiA3LjQ5NCAzMS4zMjYgMTMuMyA0Ny43MzIgMTguMTYxIDEyLjc2IDMuNzEzMyAyNS41ODggNy4wMjE1IDM4Ljc1MyA4Ljc3NjggMS44OTA0IDAuMjcwMSAzLjg0ODMgMC40NzI2IDUuNzM4NiAwLjgxMDIgNC4xMTgzIDAuNjc1MSA1Ljk0MTIgMi4xNjA0IDUuNDAxMSA3LjM1ODktMS4xNDc3IDEwLjYtMS45NTc5IDIxLjI2Ny0yLjkwMzEgMzEuOTM0LTAuNDA1MDkgNC43MjYtMC44MTAxNyA5LjQ1MTktMS40MTc4IDE0LjE3OC0xLjE0NzcgOS4zMTY5LTIuNDk4IDE4LjYzNC00LjMyMDkgMjcuODE2LTEuNzU1NCA5LjExNDMtMy40NDMyIDE4LjIyOS01LjYwMzYgMjcuMjc1LTQuMDUwOCAxNy4wODEtOC4xNjkxIDM0LjE2Mi0xMi4zNTUgNTEuMjQzLTMuMDM4MSAxMi40MjItNC42NTg0IDI1LjA0OC00LjU5MDkgMzcuMzM1IDAuNDcyNiA4LjAzNDEgMC45NDUxOSAxNS41MjggMS41NTI4IDIzLjA5em0xNTQtMzg0LjM1Yy0wLjA2OC0zLjMwODItMC42NzUxLTYuMTQzOC0xLjQ4NTMtOC45NzkzLTEuMjgyOC00LjM4ODQtMi45MDMxLTguNTc0My01LjA2MzUtMTIuNjI1LTMuOTE1OC03LjM1ODktOC4zMDQyLTE0LjM4LTEzLjQzNS0yMC45MjktOC4yMzY3LTEwLjUzMi0xOC4xNjEtMTkuMDM5LTMwLjA0NC0yNS4xODMtNC44NjEtMi40OTgtOS45MjQ2LTQuNzkzNS0xNC44NTMtNy4xNTY0LTAuNjc1MTQtMC4zMzc1Ni0xLjM1MDMtMC42MDc2Mi0yLjAyNTQtMS4wMTI3LTAuMjAyNTQtMC4xMzUwMy0wLjMzNzU3LTAuNjA3NjItMC4yNzAwNS0wLjgxMDE2IDAuMDY3NS0wLjI3MDA2IDAuNDA1MDgtMC41NDAxMSAwLjY3NTEzLTAuNjA3NjIgMC42MDc2Mi0wLjI3MDA2IDEuMjgyOCAwIDEuODkwNCAwLjEzNTAyIDEzLjc3MyAyLjU2NTUgMjYuODcgNy4wODg5IDM5LjU2MyAxMy4wMyAxMi41NTggNS44NzM3IDI0LjM3MiAxMi45NjMgMzUuNzgyIDIwLjc5NCAxMi4yMiA4LjM3MTYgMjQuMDM1IDE3LjI4MyAzNS45ODUgMjUuOTI1IDYuNTQ4OCA0LjcyNTkgMTMuMTY1IDkuMzg0MyAxOS44NDkgMTMuOTc1IDguMzA0MiA1LjY3MTEgMTYuODExIDEwLjkzNyAyNS43OSAxNS41MjggMi42MzMgMS4zNTAzIDIuNzY4MSAxLjg5MDQgMS42ODc5IDQuNTkwOS0wLjMzNzYgMC44MTAyLTAuNjc1MiAxLjU1MjgtMS4xNDc4IDIuMzYzLTYuNDEzOCAxMS42OC0xMy4yMzMgMjMuMDIyLTIxLjEzMiAzMy42ODktOC45MTE4IDEyLjA4NS0xOS4yNDEgMjIuNzUyLTMxLjA1NiAzMi4wMDItNS44NzM3IDQuNTkwOS0xMS43NDcgOS4xODE4LTE3Ljc1NiAxMy41MDMtNi4zNDYzIDQuNTIzNC0xMy4wOTggOC4zMDQyLTE5LjkxNiAxMi4xNTItMTkuNDQ0IDEwLjg3LTQwLjEwMyAxOC40MzEtNjEuOTEgMjMuMDktMC40MDUwOCAwLjA2Ny0wLjg3NzcgMC4xMzUtMS4yODI4IDAuMTM1LTAuMTM1MDIgMC0wLjMzNzU2LTAuMjctMC40MDUwOC0wLjQwNS0wLjA2NzUtMC4xMzUxIDAtMC40NzI2IDAuMTM1MDMtMC41NDAxIDAuNDA1MDgtMC4zMzc2IDAuODc3Ny0wLjYwNzcgMS4zNTAzLTAuODc3NyAxLjc1NTQtMC44Nzc3IDMuNTEwNy0xLjY4NzkgNS4xOTg1LTIuNTY1NSA2LjA3NjItMy4xMDU3IDExLjk1LTYuNDEzOCAxNy42MjEtMTAuMjYyIDcuNzY0MS01LjI2NjEgMTQuNDQ4LTExLjY4IDE5Ljg0OS0xOS4zMDkgMS44OTA0LTIuNjMzIDMuNzEzMi01LjMzMzUgNS40Njg2LTguMDM0MSA0LjUyMzQtNi45NTM5IDcuMjkxNS0xNC42NSA4LjkxMTgtMjIuNzUyIDAuNDA1MS0yLjA5MjkgMC44MTAxLTQuMjUzNCAxLjE0NzctNi4zNDYzIDAuMTM1LTAuNzQyNyAwLjIwMjYtMS40ODUzIDAuMjAyNi0yLjIyNzkgMC0yLjIyOC0xLjAxMjctMy42NDU4LTIuOTcwNi00LjA1MDktMi4yMjgtMC40NzI2LTQuMjUzNCAwLjQwNTEtNS4xMzExIDIuMzYzLTAuNDA1MSAwLjg3NzctMC42MDc2IDEuODIyOS0wLjgxMDEgMi43NjgxLTEuMzUwMyA2Ljk1MzktNC4xMTg0IDEzLjM2OC03LjgzMTYgMTkuMzc2LTMuMzA4MiA1LjQ2ODYtNy4yOTE1IDEwLjQ2NS0xMS43NDcgMTUuMDU2LTExLjE0IDExLjU0NS0yMy44MzIgMjAuOTI5LTM4LjQxNSAyNy42OC01LjY3MTEgMi42MzMtMTEuNDEgNS4xMzEtMTcuNTU0IDYuNDgxMy03LjgzMTYgMS43NTU0LTE1Ljc5OCAyLjI5NTUtMjMuODMyIDEuNzU1NC02Ljg4NjQtMC40NzI2LTEzLjc3My0xLjI4MjgtMjAuNDU3LTMuMDM4MS0yMy40OTUtNi4wNzYzLTQzLjM0NC0xNy44OTEtNTguNTM0LTM3LjA2NS01LjczODYtNy4yMjM5LTEwLjEyNy0xNS4yNTgtMTMuMjMzLTIzLjk2Ny0xLjAxMjctMi44MzU1LTIuMDkyOS01LjY3MTEtMy41MTA3LTguMzcxNy0wLjYwNzYzLTEuMDgwMi0xLjM1MDMtMS45NTc4LTIuNjMzLTIuMDkyOS0xLjc1NTQtMC4yMDI1LTMuMTczMSAwLjYwNzYtMy45MTU4IDIuMjI4LTAuNjA3NjIgMS4yODI3LTAuNzQyNjUgMi43MDA1LTAuNTQwMTEgNC4xMTgzIDEuMDEyNyA3LjU2MTUgMi45MDMxIDE0Ljg1MyA2LjQxMzggMjEuNjA0IDQuNzkzNSA5LjI0OTQgMTEuMDA1IDE3LjU1NCAxNy45NTkgMjUuMjUgMy41MTA3IDMuODQ4MiA3LjYyOSA3LjAyMTQgMTEuODgyIDkuOTI0NSA1Ljk0MTIgMy45ODMzIDEyLjIyIDcuMzU5IDE4LjQzMSAxMC43MzUgMS4xNDc3IDAuNjA3NyAyLjc2ODEgMC42NzUyIDMuMDM4MSAyLjQzMDUtMS4yODI4IDAuNjc1Mi0yLjQ5OCAwLjA2Ny0zLjcxMzItMC4xMzUtMTIuMTUyLTIuMTYwNC0yNC4wMzUtNS4yNjYxLTM1LjUxMi05Ljc4OTUtNy40MjY1LTIuOTAzMS0xNC41ODMtNi40ODEzLTIxLjI2Ny0xMC44Ny02Ljg4NjQtNC40NTU5LTEzLjg0LTguODQ0Mi0yMC42NTktMTMuMzY4LTMuNTc4Mi0yLjM2My03LjA4ODktNC44NjEtMTAuNi03LjQyNjUtMTAuNi03LjYyOS0xOS45MTYtMTYuNjA4LTI3LjgxNi0yNi45MzgtNi44MTg5LTguOTExOC0xMy41MDMtMTcuOTU5LTIwLjExOS0yNy4wMDUtMi44MzU2LTMuODQ4My01LjE5ODYtNy44OTkxLTcuMzU5LTEyLjE1Mi0wLjg3NzY4LTEuNzU1My0xLjQxNzgtMy41NzgyLTEuODkwNC01LjQ2ODYtMC40NzI1OS0xLjg5MDMtMC4wNjc1LTMuNjQ1NyAxLjA4MDItNS4xOTg1IDAuODc3NjctMS4wODAyIDEuODIyOS0yLjE2MDQgMi44MzU2LTMuMTA1NiAzMS44NjYtMjkuNzA2IDY2LjYzNi01NS4xNTkgMTA2LjQtNzMuNTIyIDExLjIwNy01LjEzMSAyMi42MTctOS42NTQ0IDM0LjQ5OS0xMi44OTUgMi4xNjA0LTAuNjA3NjIgNC4zODg0LTEuMDgwMiA2LjYxNjMtMS40ODUzIDAuODEwMTYtMC4yMDI1NCAxLjY4NzgtMC4yMDI1NCAyLjU2NTUtMC4yMDI1NCAwLjQwNTA4IDAgMC44Nzc2NyAwLjA2NzUgMS4wMTI3IDAuNTQwMTEgMC4yMDI1NCAwLjYwNzYyLTAuMTM1MDMgMS4wMTI3LTAuNjA3NjIgMS4zNTAzLTEuMzUwMyAwLjk0NTE5LTIuODM1NiAxLjU1MjgtNC4zMjA5IDIuMjI4LTE3LjE0OCA3LjAyMTQtMzEuMzI2IDE4LjE2MS00My4wMDYgMzIuNDA2LTkuMzE2OSAxMS4yNzUtMTUuMjU4IDI0LjIzNy0xOC4zNjQgMzguNDgzLTAuNjA3NjIgMi44MzU2LTEuMDEyNyA1LjczODctMC44Nzc2NyA4LjcwOTMgMC4xMzUwMiAxLjk1NzkgMC44Nzc2NyAzLjQ0MzIgMi43MDA1IDQuNDU1OSAxLjc1NTQgMC44Nzc3IDMuMjQwNiAwLjI3IDQuMDUwOC0xLjM1MDMgMC40MDUwOC0wLjg3NzcgMC42NzUxNC0xLjgyMjkgMC45NDUxOS0yLjc2OCAxLjgyMjktNi4xNDM4IDMuOTgzMy0xMi4wODUgNi42MTYzLTE3Ljg5MSA1LjQwMTEtMTIuMDE3IDEyLjQyMi0yMi45NTUgMjEuNTM3LTMyLjQ3NCA4LjU3NDItOC45NzkzIDE4LjQ5OS0xNi4yMDMgMjkuODQxLTIxLjQwMiA0LjU5MDktMi4xNjA0IDkuMTgxOC00LjMyMDkgMTMuOTc1LTUuODczNyA1LjMzMzYtMS43NTU0IDEwLjg3LTIuNzY4MSAxNi40NzMtMy4xMDU2IDQuOTI4NS0wLjI3MDA1IDkuOTI0NS0wLjQwNTA4IDE0LjkyLTAuMTM1MDIgMTkuMDM5IDAuODc3NjcgMzYuMzkgNi42MTYzIDUyLjE4OCAxNy4yODMgMTMuOTA4IDkuMzg0NCAyNC45OCAyMS41MzcgMzMuNzU3IDM1Ljc4MiAzLjk4MzMgNi40MTM4IDcuNDI2NSAxMy4xNjUgMTAuNDY1IDIwLjExOSAwLjQwNTEgMS4wMTI3IDAuODc3NyAxLjk1NzkgMS4zNTAzIDIuOTAzMSAwLjYwNzYgMS4xNDc3IDEuNDg1MyAxLjgyMjkgMi45MDMxIDEuNjIwMyAxLjY4NzgtMC4yMDI1IDMuMDM4MS0xLjI4MjcgMy4zMDgyLTIuNzAwNSAwLjEzNS0wLjk0NTIgMC4xMzUtMS42ODc5IDAuMTM1LTIuMDkyOXptNC4wNTA4IDMwLjA0NGMtMC4yNzAxLTMuMjQwNy0yLjI5NTUtNi4wMDg3LTUuNDAxMS02Ljg4NjQtMi45MDMxLTAuODEwMi01Ljk0MTItMC41NDAxLTcuNjk2NSAzLjM3NTctMC43NDI3IDEuNTUyOC0xLjA4MDIgMy4zMDgxLTEuMDgwMiA0Ljk5NiAwLjEzNSA0LjQ1NTkgMy43MTMyIDguNzA5MiA5Ljc4OTQgNy40OTQgMS42ODc5LTAuMzM3NiAyLjgzNTYtMS40MTc4IDMuNjQ1OC0yLjk3MDYgMC42NzUxLTEuNDE3OCAwLjgxMDEtMi45MDMxIDAuODEwMS00LjM4ODQtMC4wNjgtMC41NDAxLTAuMDY4LTEuMDgwMi0wLjA2OC0xLjYyMDN6bS0yMTEuOTMgMTAuODAyYzMuMzA4Mi0xLjIxNTMgNS4wNjM1LTUuMDYzNiAzLjk4MzMtOC41MDY4LTEuMTQ3Ny0zLjUxMDctNC4xODU4LTUuNDAxLTguMDM0MS00LjkyODQtMy42NDU3IDAuNDA1LTYuMjc4OCAzLjI0MDYtNi40MTM4IDYuOTUzOS0wLjEzNTAzIDQuNjU4NCAyLjAyNTQgNy4xNTY0IDYuOTUzOSA3LjIyMzkgMS4wODAyIDAuMTM1IDIuMjk1NS0wLjI3MDEgMy41MTA3LTAuNzQyNnptMTY3LjctMzkuNDk2Yy0xMC4zOTctMjUuNzIzLTI5LjM2OC00MC42NDMtNTYuOTgxLTQ0LjM1Ni04LjM3MTctMS4xNDc3LTE2LjgxMS0wLjY3NTEzLTI1LjExNSAxLjE0NzctMTguMDI2IDMuODQ4Mi0zMi43NDQgMTMuMDMtNDMuNTQ2IDI4LjA4Ni02LjgxODkgOS40NTE5LTEwLjg3IDIwLjA1Mi0xMi40OSAzMS41OTYtMS40MTc4IDEwLjA2LTEuMDgwMiAyMC4wNTIgMS44MjI5IDI5Ljg0MSA1LjczODYgMTkuNTExIDE3Ljc1NiAzNC4wOTQgMzUuNDQ1IDQzLjg4NCAxNS44NjYgOC43NzY4IDMyLjk0NyAxMS4yMDcgNTAuNzcgOC4wMzQxIDEzLjA5OC0yLjI5NTQgMjQuNjQyLTcuODk5MSAzNC4yOTctMTcuMDEzIDE0LjUxNS0xMy43NzMgMjEuMTk5LTMwLjg1NCAyMS4xOTktNTAuNzAzIDAuMDY3LTEwLjYtMS40ODUzLTIwLjc5NC01LjQwMTEtMzAuNTE2em0tNjcuMzc5IDUyLjMyM2MtMy4xNzMxLTAuMTM1LTYuMjc4OC0wLjU0MDEtOS4yNDk0LTEuNjIwMy01LjMzMzYtMS44OTA0LTkuMzg0NC01LjI2NjEtMTEuNjgtMTAuNTMyLTIuNzAwNS02LjA3NjItMy44NDgzLTEyLjQyMi0yLjAyNTQtMTguOTA0IDIuODM1Ni05Ljk5MiA5LjcyMi0xNS43MzEgMTkuNzgxLTE3LjgyNCAzLjM3NTctMC42NzUxIDYuODE4OS0wLjc0MjYgMTAuMzMtMC4xMzUgNy4zNTkgMS4yODI4IDEyLjgyOCA1LjEzMSAxNS45MzMgMTEuODgyIDMuNzEzMiA3Ljk2NjYgMy43ODA4IDE2LjIwMy0wLjMzNzU3IDI0LjAzNS00Ljc5MzUgOS4xMTQzLTEyLjU1OCAxMy4zLTIyLjc1MiAxMy4wOTh6XCJcbiAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICBzdHJva2VXaWR0aD1cIi42NzUxNFwiXG4gICAgICAgIC8+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBFbnRyeSwgUGljdHVyZSwgUHJpc21hLCBVc2VyLCBDb21tZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmV4cG9ydCB0eXBlIEVudHJ5SW5QYWdlID0gUGljazxcbiAgRW50cnksXG4gICdpZCcgfCAnc2x1ZycgfCAndGl0bGUnIHwgJ2NvbnRlbnQnIHwgJ2NyZWF0ZWRBdCdcbj4gJiB7XG4gIHVzZXI6IFBpY2s8VXNlciwgJ2lkJyB8ICd1c2VybmFtZSc+XG4gIHBpY3R1cmVzOiBQaWNrPFBpY3R1cmUsICdmaWxlJz5bXVxuICBjb21tZW50czogKFBpY2s8Q29tbWVudCwgJ2lkJyB8ICdib2R5JyB8ICdjcmVhdGVkQXQnPiAmIHsgdXNlcjogVXNlciB9KVtdXG4gIGxpa2VkQnk6IHsgaWQ6IFVzZXJbJ2lkJ10gfVtdXG4gIF9jb3VudDogeyBsaWtlZEJ5OiBudW1iZXIgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJpc21hU2VsZWN0RW50cnlJblBhZ2UoKSB7XG4gIHJldHVybiBQcmlzbWEudmFsaWRhdG9yPFByaXNtYS5FbnRyeVNlbGVjdD4oKSh7XG4gICAgaWQ6IHRydWUsXG4gICAgc2x1ZzogdHJ1ZSxcbiAgICB0aXRsZTogdHJ1ZSxcbiAgICBjb250ZW50OiB0cnVlLFxuICAgIGNyZWF0ZWRBdDogdHJ1ZSxcbiAgICB1c2VyOiB7XG4gICAgICBzZWxlY3Q6IHtcbiAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgIHVzZXJuYW1lOiB0cnVlLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHBpY3R1cmVzOiB7XG4gICAgICBzZWxlY3Q6IHtcbiAgICAgICAgZmlsZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjb21tZW50czoge1xuICAgICAgc2VsZWN0OiB7XG4gICAgICAgIGlkOiB0cnVlLFxuICAgICAgICBib2R5OiB0cnVlLFxuICAgICAgICB1c2VyOiB0cnVlLFxuICAgICAgICBjcmVhdGVkQXQ6IHRydWUsXG4gICAgICB9LFxuICAgICAgb3JkZXJCeToge1xuICAgICAgICBjcmVhdGVkQXQ6ICdkZXNjJyBhcyBQcmlzbWEuU29ydE9yZGVyLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGxpa2VkQnk6IHtcbiAgICAgIHNlbGVjdDoge1xuICAgICAgICBpZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfY291bnQ6IHtcbiAgICAgIHNlbGVjdDoge1xuICAgICAgICBsaWtlZEJ5OiB0cnVlLFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxufVxuIiwgImltcG9ydCB7IFVzZXIgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcbmltcG9ydCB7IHVzZU1hdGNoZXMgfSBmcm9tICdyZW1peCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQ3VycmVudFVzZXIoKTogVXNlciB7XG5cdGxldCBtYXRjaGVzID0gdXNlTWF0Y2hlcygpXG5cblx0bGV0IHtcblx0XHRkYXRhOiB7IGN1cnJlbnRVc2VyIH0sXG5cdH0gPSBtYXRjaGVzLmZpbmQobSA9PiAnY3VycmVudFVzZXInIGluIChtLmRhdGEgPz8ge30pKSA/PyB7XG5cdFx0ZGF0YTogeyBjdXJyZW50VXNlcjogdW5kZWZpbmVkIH0sXG5cdH1cblxuXHRyZXR1cm4gY3VycmVudFVzZXJcbn1cbiIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgbGlrZUFjdGlvbiB9IGZyb20gJ34vZmVhdHVyZXMvZW50cmllcy9hcGkvbGlrZS5zZXJ2ZXInXG5cbmV4cG9ydCBsZXQgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IChhcmdzKSA9PiAgbGlrZUFjdGlvbihhcmdzKVxuIiwgImltcG9ydCB7IFByaXNtYSB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIHJlZGlyZWN0IH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyB6IH0gZnJvbSAnem9kJ1xuaW1wb3J0IHsgZGIgfSBmcm9tICd+L3V0aWxzL2RiLnNlcnZlcidcbmltcG9ydCB7IHBhcnNlRm9ybURhdGEgfSBmcm9tICcuLi8uLi8uLi91dGlscy9mb3JtZGF0YS51dGlscy5zZXJ2ZXInXG5pbXBvcnQgeyBnZXRVc2VyIH0gZnJvbSAnfi91dGlscy9zZXNzaW9uLnNlcnZlcidcblxubGV0IGZvcm1WYWxpZGF0b3IgPSB6Lm9iamVjdCh7XG5cdGFscmVhZHlMaWtlZDogei5ib29sZWFuKCkuZGVmYXVsdChmYWxzZSksXG59KVxuXG5leHBvcnQgbGV0IGxpa2VBY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zLCByZXF1ZXN0IH0pID0+IHtcblx0aWYgKCFwYXJhbXMuc2x1Zykge1xuXHRcdHJldHVybiBudWxsXG5cdH1cblxuXHRjb25zb2xlLmxvZygnUmVxdWVzdCB0byBsaWtlL3VubGlrZSBwb3N0JywgcGFyYW1zLnNsdWcpXG5cblx0bGV0IGZvcm1EYXRhID0gYXdhaXQgcGFyc2VGb3JtRGF0YShyZXF1ZXN0LCBmb3JtVmFsaWRhdG9yKVxuXG5cdGxldCB1c2VyID0gYXdhaXQgZ2V0VXNlcihyZXF1ZXN0KVxuXG5cdGlmICghdXNlcikge1xuXHRcdHJldHVybiByZWRpcmVjdCgnL2xvZ2luJylcblx0fVxuXG5cdGxldCB1cGRhdGVBY3Rpb246IHtcblx0XHRbayBpblxuXHRcdFx0fCAnY29ubmVjdCdcblx0XHRcdHwgJ2Rpc2Nvbm5lY3QnXT86IFByaXNtYS5Vc2VyVXBkYXRlTWFueVdpdGhvdXRFbnRyaWVzSW5wdXRbJ2Nvbm5lY3QnXVxuXHR9XG5cblx0aWYgKGZvcm1EYXRhLmFscmVhZHlMaWtlZCkge1xuXHRcdHVwZGF0ZUFjdGlvbiA9IHtcblx0XHRcdGRpc2Nvbm5lY3Q6IHtcblx0XHRcdFx0aWQ6IHVzZXIuaWQsXG5cdFx0XHR9LFxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHR1cGRhdGVBY3Rpb24gPSB7XG5cdFx0XHRjb25uZWN0OiB7XG5cdFx0XHRcdGlkOiB1c2VyLmlkLFxuXHRcdFx0fSxcblx0XHR9XG5cdH1cblxuXHRhd2FpdCBkYi5lbnRyeS51cGRhdGUoe1xuXHRcdGRhdGE6IHtcblx0XHRcdGxpa2VkQnk6IHtcblx0XHRcdFx0Li4udXBkYXRlQWN0aW9uLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHdoZXJlOiB7XG5cdFx0XHRzbHVnOiBwYXJhbXMuc2x1Zyxcblx0XHR9LFxuXHR9KVxuXG5cdHJldHVybiAhZm9ybURhdGEuYWxyZWFkeUxpa2VkXG59XG4iLCAiaW1wb3J0IHsgVXNlciB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuaW1wb3J0IHsgRmlMb2dPdXQgfSBmcm9tICdyZWFjdC1pY29ucy9maSdcbmltcG9ydCB7IEhpQmVsbCwgSGlDYW1lcmEsIEhpSGVhcnQgfSBmcm9tICdyZWFjdC1pY29ucy9oaSdcbmltcG9ydCB7XG5cdEZvcm0sXG5cdExvYWRlckZ1bmN0aW9uLFxuXHRNZXRhRnVuY3Rpb24sXG5cdE5hdkxpbmssXG5cdE91dGxldCxcblx0cmVkaXJlY3QsXG5cdHVzZUxvYWRlckRhdGEsXG59IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgZGVzZXJpYWxpemUsIHNlcmlhbGl6ZSB9IGZyb20gJ3N1cGVyanNvbidcbmltcG9ydCB1c2VDdXJyZW50VXNlciBmcm9tICd+L2hvb2tzL3VzZUN1cnJlbnRVc2VyJ1xuaW1wb3J0IHsgZGIgfSBmcm9tICd+L3V0aWxzL2RiLnNlcnZlcidcblxuZXhwb3J0IGxldCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoeyBkYXRhIH0pID0+IHtcblx0bGV0IHVzZXIgPSBkZXNlcmlhbGl6ZTxQaWNrPFVzZXIsICdpZCcgfCAndXNlcm5hbWUnPj4oZGF0YSlcblx0cmV0dXJuIHtcblx0XHR0aXRsZTogYCR7dXNlci51c2VybmFtZX0ncyBQYWdlIHwgU2hlaWthaCBEaWFyeWAsXG5cdH1cbn1cblxuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcblx0aWYgKCFwYXJhbXMudXNlcm5hbWUpIHtcblx0XHRyZXR1cm4gcmVkaXJlY3QoJy9hcHAvZW50cmllcycpXG5cdH1cblxuXHRsZXQgZm91bmRVc2VyRnJvbURiID0gYXdhaXQgZGIudXNlci5maW5kRmlyc3Qoe1xuXHRcdHNlbGVjdDoge1xuXHRcdFx0aWQ6IHRydWUsXG5cdFx0XHR1c2VybmFtZTogdHJ1ZSxcblx0XHR9LFxuXHRcdHdoZXJlOiB7XG5cdFx0XHR1c2VybmFtZTogcGFyYW1zLnVzZXJuYW1lLFxuXHRcdH0sXG5cdH0pXG5cblx0aWYgKCFmb3VuZFVzZXJGcm9tRGIpIHtcblx0XHRyZXR1cm4gcmVkaXJlY3QoJy9hcHAvZW50cmllcycpXG5cdH1cblxuXHRyZXR1cm4gc2VyaWFsaXplKGZvdW5kVXNlckZyb21EYilcbn1cblxuZnVuY3Rpb24gZ2V0TmF2TGlua0NsYXNzTmFtZSh7IGlzQWN0aXZlIH06IHsgaXNBY3RpdmU6IGJvb2xlYW4gfSkge1xuXHRsZXQgcmVzdWx0ID0gYHNoZWlrYSBidXR0b24gZmxleC1jb2wgIXNwYWNlLXgtMCBzcGFjZS15LTNgXG5cblx0aWYgKCFpc0FjdGl2ZSkge1xuXHRcdHJlc3VsdCArPSAnIG9wYWNpdHktNTAnXG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJQYWdlKCkge1xuXHRsZXQgdXNlciA9IGRlc2VyaWFsaXplPFBpY2s8VXNlciwgJ2lkJyB8ICd1c2VybmFtZSc+Pih1c2VMb2FkZXJEYXRhKCkpXG5cdGxldCBjdXJyZW50VXNlciA9IHVzZUN1cnJlbnRVc2VyKClcblxuXHRyZXR1cm4gKFxuXHRcdDxhcnRpY2xlIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm10LTEwIGZsZXggbXgtYXV0byBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIGZpbHRlciBkcm9wLXNoYWRvdy1wcmltYXJ5IHRleHQtcHJpbWFyeS01MDBcIj5cblx0XHRcdFx0XHR7dXNlci51c2VybmFtZX1cblx0XHRcdFx0PC9oMT5cblx0XHRcdFx0e2N1cnJlbnRVc2VyPy51c2VybmFtZSA9PSB1c2VyLnVzZXJuYW1lID8gKFxuXHRcdFx0XHRcdDxGb3JtIGNsYXNzTmFtZT1cIm1sLTEwXCIgYWN0aW9uPVwiL2xvZ291dFwiIG1ldGhvZD1cInBvc3RcIj5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInJlZGlyZWN0VG9cIiByZWFkT25seSB2YWx1ZT1cIi9hcHAvZW50cmllc1wiIC8+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cInNoZWlrYSBidXR0b24gZGFuZ2VyXCIgdHlwZT1cInN1Ym1pdFwiPlxuXHRcdFx0XHRcdFx0XHQ8RmlMb2dPdXQgLz5cblx0XHRcdFx0XHRcdFx0PHNwYW4+TG9nb3V0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0PC9Gb3JtPlxuXHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHR7Y3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIudXNlcm5hbWUgPT0gdXNlci51c2VybmFtZSA/IChcblx0XHRcdFx0PG5hdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG14LWF1dG8gbXktMTBcIj5cblx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTVcIj5cblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJmbGV4LTFcIj5cblx0XHRcdFx0XHRcdFx0PE5hdkxpbmsgY2xhc3NOYW1lPXtnZXROYXZMaW5rQ2xhc3NOYW1lfSB0bz1cImVudHJpZXNcIj5cblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5FbnRyaWVzPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxIaUNhbWVyYSBzaXplPVwiMS45cmVtXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9OYXZMaW5rPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJmbGV4LTFcIj5cblx0XHRcdFx0XHRcdFx0PE5hdkxpbmsgY2xhc3NOYW1lPXtnZXROYXZMaW5rQ2xhc3NOYW1lfSB0bz1cIm5vdGlmaWNhdGlvbnNcIj5cblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5Ob3RpZmljYXRpb25zPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxIaUJlbGwgc2l6ZT1cIjEuOXJlbVwiIC8+XG5cdFx0XHRcdFx0XHRcdDwvTmF2TGluaz5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG5cdFx0XHRcdFx0XHRcdDxOYXZMaW5rIGNsYXNzTmFtZT17Z2V0TmF2TGlua0NsYXNzTmFtZX0gdG89XCJsaWtlc1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPkxpa2VzPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxIaUhlYXJ0IHNpemU9XCIxLjlyZW1cIiAvPlxuXHRcdFx0XHRcdFx0XHQ8L05hdkxpbms+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0PGhyIGNsYXNzTmFtZT1cIiFteS0xXCIgLz5cblx0XHRcdFx0PC9uYXY+XG5cdFx0XHQpIDogbnVsbH1cblx0XHRcdDxPdXRsZXQgLz5cblx0XHQ8L2FydGljbGU+XG5cdClcbn1cbiIsICJpbXBvcnQge1xuXHRBY3Rpb25GdW5jdGlvbixcblx0Rm9ybSxcblx0cmVkaXJlY3QsXG5cdExvYWRlckZ1bmN0aW9uLFxuXHR1c2VMb2FkZXJEYXRhLFxuXHRMaW5rLFxufSBmcm9tICdyZW1peCdcbmltcG9ydCB7IGRlc2VyaWFsaXplLCBzZXJpYWxpemUgfSBmcm9tICdzdXBlcmpzb24nXG5pbXBvcnQgeyBkYiB9IGZyb20gJ34vdXRpbHMvZGIuc2VydmVyJ1xuaW1wb3J0IHsgcmVxdWlyZVVzZXJJZCB9IGZyb20gJ34vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXInXG5pbXBvcnQgeyBOb3RpZmljYXRpb24gfSBmcm9tICdAcHJpc21hL2NsaWVudCdcbmltcG9ydCB7IGRpc3BsYXlEYXRlVGltZSB9IGZyb20gJ34vdXRpbHMvZGF0ZS51dGlscydcbmltcG9ydCB7IEZpQWxlcnRDaXJjbGUsIEZpQ2hlY2tDaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9maSdcbmltcG9ydCB7IHBhcnNlRm9ybURhdGEgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9mb3JtZGF0YS51dGlscy5zZXJ2ZXInXG5pbXBvcnQgeyB6IH0gZnJvbSAnem9kJ1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcblx0bGV0IHVzZXJJZCA9IGF3YWl0IHJlcXVpcmVVc2VySWQocmVxdWVzdClcblxuXHRsZXQgbm90aWZpY2F0aW9ucyA9IGF3YWl0IGRiLm5vdGlmaWNhdGlvbi5maW5kTWFueSh7XG5cdFx0d2hlcmU6IHtcblx0XHRcdHVzZXJJZCxcblx0XHR9LFxuXHRcdG9yZGVyQnk6IHtcblx0XHRcdGNyZWF0ZWRBdDogJ2Rlc2MnLFxuXHRcdH0sXG5cdFx0dGFrZTogMTAsXG5cdH0pXG5cblx0cmV0dXJuIHNlcmlhbGl6ZShub3RpZmljYXRpb25zKVxufVxuXG5sZXQgdmFsaWRhdG9yID0gei5vYmplY3Qoe1xuXHRpZDogei5zdHJpbmcoKS51dWlkKCksXG5cdHJlZGlyZWN0VG86IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbn0pXG5cbmV4cG9ydCBsZXQgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuXHRsZXQgeyBpZCwgcmVkaXJlY3RUbyB9ID0gYXdhaXQgcGFyc2VGb3JtRGF0YShyZXF1ZXN0LCB2YWxpZGF0b3IpXG5cblx0Y29uc29sZS5sb2coXG5cdFx0J1JlcXVlc3QgdG8gbWFyayBub3RpZmljYXRpb24nLFxuXHRcdGlkLFxuXHRcdCdhcyBzZWVuIGFuZCByZWRpcmVjdCB0bycsXG5cdFx0cmVkaXJlY3RUbyxcblx0KVxuXG5cdGF3YWl0IGRiLm5vdGlmaWNhdGlvbi51cGRhdGUoe1xuXHRcdGRhdGE6IHtcblx0XHRcdHNlZW5BdDogbmV3IERhdGUoKSxcblx0XHR9LFxuXHRcdHdoZXJlOiB7XG5cdFx0XHRpZCxcblx0XHR9LFxuXHR9KVxuXG5cdGlmIChyZWRpcmVjdFRvKSB7XG5cdFx0cmV0dXJuIHJlZGlyZWN0KHJlZGlyZWN0VG8pXG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIG51bGxcblx0fVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5Tm90aWZUaXRsZShub3RpZjogTm90aWZpY2F0aW9uKSB7XG5cdC8vIEJ5IGRlZmF1bHQgd2UganN0IGRpc3BsYXkgdGhlIHRpdGxlXG5cdGxldCB0aXRsZSA9IDxoMT57bm90aWYudGl0bGV9PC9oMT5cblxuXHQvLyBUaGVyZSBpcyBhbiBhY3Rpb24gb25seSBpZiB0aGUgdGl0bGUgY2FuIGJlIGNsaWNrZWRcblx0aWYgKG5vdGlmLmxpbmspIHtcblx0XHRpZiAobm90aWYuc2VlbkF0KSB7XG5cdFx0XHQvLyBJZiB0aGUgbm90aWYgaGFzIGFscmVhZHkgYmVlbiBzZWVuLCB3ZSBqdXN0IG1ha2UgYSBsaW5rIHRvIHJlZGlyZWN0XG5cdFx0XHR0aXRsZSA9IChcblx0XHRcdFx0PExpbmsgdG89e25vdGlmLmxpbmt9PlxuXHRcdFx0XHRcdDxoMT57bm90aWYudGl0bGV9PC9oMT5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBJZiB0aGUgbm90aWYgaXMgc3RpbCBuZXcsIGNsaWNrIHdpbGwgdXBkYXRlIHRoZSBzZWVuQXQgQU5EIHJlZGlyZWN0IHRvIHRoZSBsaW5rXG5cdFx0XHR0aXRsZSA9IChcblx0XHRcdFx0PEZvcm0gbWV0aG9kPVwicG9zdFwiPlxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInJlZGlyZWN0VG9cIiByZWFkT25seSB2YWx1ZT17bm90aWYubGlua30gLz5cblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJpZFwiIHJlYWRPbmx5IHZhbHVlPXtub3RpZi5pZH0gLz5cblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cIm5vLXN0eWxlXCI+XG5cdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+e25vdGlmLnRpdGxlfTwvaDE+XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvRm9ybT5cblx0XHRcdClcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdGl0bGVcbn1cblxuZnVuY3Rpb24gZGlzcGxheU5vdGlmKG5vdGlmOiBOb3RpZmljYXRpb24pIHtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LTJ4bCBzcGFjZS14LTNcIj5cblx0XHRcdFx0e25vdGlmLnNlZW5BdCA/IChcblx0XHRcdFx0XHQ8RmlDaGVja0NpcmNsZSBjbGFzc05hbWU9XCJteC00XCI+PC9GaUNoZWNrQ2lyY2xlPlxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdDxGb3JtIG1ldGhvZD1cInBvc3RcIj5cblx0XHRcdFx0XHRcdDxidXR0b24+XG5cdFx0XHRcdFx0XHRcdDxGaUFsZXJ0Q2lyY2xlPjwvRmlBbGVydENpcmNsZT5cblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiaWRcIiByZWFkT25seSB2YWx1ZT17bm90aWYuaWR9IC8+XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L0Zvcm0+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9e1xuXHRcdFx0XHRcdFx0J2ZsZXggZmxleC1jb2wgJyArICghbm90aWYuc2VlbkF0ICYmICdmaWx0ZXIgZHJvcC1zaGFkb3ctcHJpbWFyeScpXG5cdFx0XHRcdFx0fT5cblx0XHRcdFx0XHR7ZGlzcGxheU5vdGlmVGl0bGUobm90aWYpfVxuXHRcdFx0XHRcdDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+b24ge2Rpc3BsYXlEYXRlVGltZShub3RpZi5jcmVhdGVkQXQpfTwvc21hbGw+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8cCBjbGFzc05hbWU9XCJpdGFsaWMgbWwtMTAgbXktNVwiPntub3RpZi5jb250ZW50fTwvcD5cblx0XHRcdDxociBjbGFzc05hbWU9XCJteS0wXCIgLz5cblx0XHQ8Lz5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyTm90aWZpY2F0aW9uc1BhZ2UoKSB7XG5cdGxldCBub3RpZnMgPSBkZXNlcmlhbGl6ZTxOb3RpZmljYXRpb25bXT4odXNlTG9hZGVyRGF0YSgpKVxuXG5cdGlmIChub3RpZnM/Lmxlbmd0aCA+IDApIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHVsIGNsYXNzTmFtZT1cIm14LWF1dG9cIj5cblx0XHRcdFx0e25vdGlmcy5tYXAobm90aWYgPT4gKFxuXHRcdFx0XHRcdDxsaSBrZXk9e25vdGlmLmlkfSBjbGFzc05hbWU9XCJwLTUgdGV4dC1wcmltYXJ5LTUwMCBmb250LWJvbGRcIj5cblx0XHRcdFx0XHRcdHtkaXNwbGF5Tm90aWYobm90aWYpfVxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC91bD5cblx0XHQpXG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0b1wiPlxuXHRcdFx0XHQ8aDE+Tm8gbmV3IG5vdGlmaWNhdGlvbnM8L2gxPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG4iLCAiaW1wb3J0IHsgTGlua3NGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgZGVzZXJpYWxpemUgfSBmcm9tICdzdXBlcmpzb24nXG5pbXBvcnQgeyBzdHlsZXNoZWV0IGFzIGVudHJ5Q2FyZFN0eWxlc2hlZXQgfSBmcm9tICd+L2ZlYXR1cmVzL2VudHJpZXMvY29tcG9uZW50cy9lbnRyeS1jYXJkJ1xuaW1wb3J0IEVudHJ5TGlzdCBmcm9tICd+L2ZlYXR1cmVzL2VudHJpZXMvY29tcG9uZW50cy9lbnRyeS1saXN0J1xuaW1wb3J0IHsgRW50cnlJbkxpc3QgfSBmcm9tICd+L2ZlYXR1cmVzL2VudHJpZXMvdHlwZXMvZW50cnktaW4tbGlzdCdcbmltcG9ydCB7IHVzZXJFbnRyaWVzUGFnZUxvYWRlciB9IGZyb20gJ34vZmVhdHVyZXMvdXNlcnMvYXBpL2VudHJpZXMtcGFnZS5zZXJ2ZXInXG5pbXBvcnQgeyBVc2VyRW50cmllc1BhZ2VEYXRhIH0gZnJvbSAnfi9mZWF0dXJlcy91c2Vycy90eXBlcy9wYWdlJ1xuaW1wb3J0IGVudHJpZXNTdHlsZXNoZWV0IGZyb20gJ34vc3R5bGVzL2VudHJpZXMuY3NzJ1xuaW1wb3J0IHsgUGFnaW5hdGVkIH0gZnJvbSAnfi91dGlscy9wYWdpbmF0aW9uLnNlcnZlcidcblxuZXhwb3J0IGxldCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IFtcblx0ZW50cnlDYXJkU3R5bGVzaGVldCxcblx0eyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogZW50cmllc1N0eWxlc2hlZXQgfSxcbl1cblxuZXhwb3J0IGxldCBsb2FkZXIgPSB1c2VyRW50cmllc1BhZ2VMb2FkZXJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlclBhZ2UoKSB7XG5cdGxldCB7IGl0ZW1zLCBwYWdlLCB0b3RhbEl0ZW1zLCBpdGVtc1BlclBhZ2UgfSA9IGRlc2VyaWFsaXplPFxuXHRcdFBhZ2luYXRlZDxFbnRyeUluTGlzdD5cblx0Pih1c2VMb2FkZXJEYXRhKCkpXG5cblx0cmV0dXJuIChcblx0XHQ8RW50cnlMaXN0XG5cdFx0XHRlbnRyaWVzPXtpdGVtc31cblx0XHRcdHBhZ2U9e3BhZ2V9XG5cdFx0XHR0b3RhbD17dG90YWxJdGVtc31cblx0XHRcdGl0ZW1zUGVyUGFnZT17aXRlbXNQZXJQYWdlfVxuXHRcdC8+XG5cdClcbn1cbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgU2hlaWthaExvZ28gZnJvbSAnfi9jb21wb25lbnRzL3NoZWlrYS1sb2dvJ1xuaW1wb3J0IGVudHJ5Q2FyZFN0eWxlc2hlZXQgZnJvbSAnfi9zdHlsZXMvZW50cnktY2FyZC5jc3MnXG5pbXBvcnQgeyBFbnRyeUluTGlzdCB9IGZyb20gJy4uL3R5cGVzL2VudHJ5LWluLWxpc3QnXG5pbXBvcnQgRW50cnlGcmFtZSBmcm9tICcuL2VudHJ5LWZyYW1lJ1xuaW1wb3J0IEVudHJ5U2VsZWN0b3IgZnJvbSAnLi9lbnRyeS1zZWxlY3RvcidcblxuZXhwb3J0IGxldCBzdHlsZXNoZWV0ID0geyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogZW50cnlDYXJkU3R5bGVzaGVldCB9XG5cbmludGVyZmFjZSBFbnRyeUNhcmRQcm9wcyB7XG4gIGVudHJ5OiBFbnRyeUluTGlzdFxufVxuXG5jb25zdCBFbnRyeUNhcmQgPSAoeyBlbnRyeSB9OiBFbnRyeUNhcmRQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMaW5rXG4gICAgICBwcmVmZXRjaD1cImludGVudFwiXG4gICAgICB0bz17YC9hcHAvZW50cmllcy8ke2VudHJ5LnNsdWd9YH1cbiAgICAgIGNsYXNzTmFtZT1cIm91dGxpbmUtbm9uZVwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbnRyeS1jYXJkXCI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBpY3R1cmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpYy13cmFwcGVyXCI+XG4gICAgICAgICAgICB7ZW50cnkudGh1bWJuYWlsVXJsID8gKFxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBpY3R1cmVcIlxuICAgICAgICAgICAgICAgIHNyYz17ZW50cnkudGh1bWJuYWlsVXJsfVxuICAgICAgICAgICAgICAgIGFsdD17ZW50cnkudGl0bGV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8U2hlaWthaExvZ28gY2xhc3NOYW1lPVwicGljdHVyZSB0ZXh0LXByaW1hcnktNzAwXCIgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEVudHJ5U2VsZWN0b3IgLz5cbiAgICAgICAgICA8RW50cnlGcmFtZSAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXhsXCI+e2VudHJ5LnRpdGxlfTwvaDE+XG4gICAgICAgICAgPGgyPmJ5IHtlbnRyeS5jcmVhdGVkQnl9PC9oMj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9MaW5rPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVudHJ5Q2FyZFxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVudHJ5RnJhbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgY2xhc3NOYW1lPVwiZnJhbWVcIlxuICAgICAgd2lkdGg9XCI0NlwiXG4gICAgICBoZWlnaHQ9XCI0NlwiXG4gICAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgNDYuODgxIDQ2Ljg3OFwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICA+XG4gICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTc3LjE3MSAtMTI5LjcyKVwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9XCJtODAuODc3IDEyOS44OGgzOS40NGwzLjU3MjQgMy40ODg4djM5LjY5OGwtMy41MTA1IDMuMzYyMmgtMzkuNDc0bC0zLjU2NDctMy40MTA2di0zOS41NDl6XCJcbiAgICAgICAgICBmaWxsT3BhY2l0eT1cIjBcIlxuICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9XCIuMzI3NjlcIlxuICAgICAgICAvPlxuICAgICAgICA8ZyBmaWxsPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIHRyYW5zZm9ybT1cInNjYWxlKC4yNjQ1OClcIlxuICAgICAgICAgICAgZD1cIm00NTcuMzQgNDkwLjI3IDExLjUxMiAxMS41MTJ2LTUuNzc1NGgtNS43MjY2di01LjcyNjZsNS43MjY2IDUuNzI2NnYtNS43MzYzelwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cGF0aCBkPVwibTEyNC4wNSAxNzMuNTUtMy4wNDU4IDMuMDQ1OGgxLjUyODF2LTEuNTE1MmgxLjUxNTJsLTEuNTE1MiAxLjUxNTJoMS41MTc3elwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIm04MC4yMTcgMTc2LjU5LTMuMDQ1OC0zLjA0NTh2MS41MjgxaDEuNTE1MnYxLjUxNTJsLTEuNTE1Mi0xLjUxNTJ2MS41MTc3elwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIm03Ny4xNzEgMTMyLjc3IDMuMDQ1OC0zLjA0NThoLTEuNTI4MXYxLjUxNTJoLTEuNTE1MmwxLjUxNTItMS41MTUyaC0xLjUxNzd6XCIgLz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRW50cnlTZWxlY3RvcigpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICBjbGFzc05hbWU9XCJzZWxlY3RvclwiXG4gICAgICB3aWR0aD1cIjE1MFwiXG4gICAgICBoZWlnaHQ9XCIxNTBcIlxuICAgICAgdmlld0JveD1cIjAgMCAxNTAgMTUwXCJcbiAgICAgIHZlcnNpb249XCIxLjFcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgPlxuICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zMC44MjA4MDgsLTY0LjAwNzY2KVwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgIGQ9XCJNIDMwLjgyMDgwOCw2NC4wMDc2NiBIIDQyLjkzOTQ2OSBMIDMwLjgyMDgwOCw3Ni4yMTE0ODcgWlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgZD1cIk0gMTgxLjI1NDcsNjQuMDA3NjYgViA3Ni4xMjYzMjEgTCAxNjkuMDUwODcsNjQuMDA3NjYgWlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgZD1cIk0gMTgxLjI1NDcsMjE0LjU1OTk0IEggMTY5LjEzNjA0IEwgMTgxLjI1NDcsMjAyLjM1NjExIFpcIlxuICAgICAgICAvPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgIGQ9XCJtIDMwLjgyMDgwOCwyMTQuNTU5OTQgdiAtMTIuMTE4NjcgbCAxMi4yMDM4MywxMi4xMTg2NyB6XCJcbiAgICAgICAgLz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IEVudHJ5SW5MaXN0IH0gZnJvbSAnLi4vdHlwZXMvZW50cnktaW4tbGlzdCdcbmltcG9ydCBFbnRyeUNhcmQgZnJvbSAnLi9lbnRyeS1jYXJkJ1xuXG50eXBlIEVudHJ5TGlzdFByb3BzID0ge1xuXHRlbnRyaWVzOiBFbnRyeUluTGlzdFtdXG5cdHBhZ2U6IG51bWJlclxuXHR0b3RhbDogbnVtYmVyXG5cdGl0ZW1zUGVyUGFnZTogbnVtYmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVudHJ5TGlzdCh7XG5cdGVudHJpZXMsXG5cdHBhZ2UsXG5cdHRvdGFsLFxuXHRpdGVtc1BlclBhZ2UsXG59OiBFbnRyeUxpc3RQcm9wcykge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwibWQ6cC0xMCBsZzpwLTIwXCI+XG5cdFx0XHQ8dWwgY2xhc3NOYW1lPVwibWQ6cHgtMTAgbGc6cHgtMjAgZmxleCBmbGV4LXdyYXBcIj5cblx0XHRcdFx0e2VudHJpZXMubWFwKGVudHJ5ID0+IChcblx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMS8zIGxnOnctMS80IHhsOnctMS81IHAtNVwiIGtleT17ZW50cnkuc2x1Z30+XG5cdFx0XHRcdFx0XHQ8RW50cnlDYXJkIGVudHJ5PXtlbnRyeX0gLz5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQpKX1cblx0XHRcdDwvdWw+XG5cdFx0XHQ8bmF2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIHNwYWNlLXgtNVwiPlxuXHRcdFx0XHRcdHtwYWdlIC0gMSA+IDAgPyAoXG5cdFx0XHRcdFx0XHQ8TGluayBwcmVmZXRjaD1cImludGVudFwiIGNsYXNzTmFtZT1cInNoZWlrYSBidXR0b25cIiB0bz17Jz9wPScgKyAocGFnZSAtIDEpfT5cblx0XHRcdFx0XHRcdFx0UHJldmlvdXMgcGFnZVxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdHtwYWdlICsgMSA8PSBNYXRoLmNlaWwodG90YWwgLyBpdGVtc1BlclBhZ2UpID8gKFxuXHRcdFx0XHRcdFx0PExpbmsgcHJlZmV0Y2g9XCJpbnRlbnRcIiBjbGFzc05hbWU9XCJzaGVpa2EgYnV0dG9uXCIgdG89eyc/cD0nICsgKHBhZ2UgKyAxKX0+XG5cdFx0XHRcdFx0XHRcdE5leHQgcGFnZVxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0e3RvdGFsID4gaXRlbXNQZXJQYWdlID8gKFxuXHRcdFx0XHRcdDxzbWFsbCBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgdGV4dC1jZW50ZXIgdGV4dC1wcmltYXJ5LTUwMFwiPlxuXHRcdFx0XHRcdFx0UGFnZSB7cGFnZX0gLyB7TWF0aC5jZWlsKHRvdGFsIC8gaXRlbXNQZXJQYWdlKX1cblx0XHRcdFx0XHQ8L3NtYWxsPlxuXHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdDwvbmF2PlxuXHRcdDwvZGl2PlxuXHQpXG59XG4iLCAiaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24sIHJlZGlyZWN0IH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBzZXJpYWxpemUgfSBmcm9tICdzdXBlcmpzb24nXG5pbXBvcnQge1xuXHRjb21wdXRlRW50cnlJbkxpc3RGaWVsZHMsXG5cdEVudHJ5SW5MaXN0LFxuXHRFbnRyeUluTGlzdEZyb21EYixcblx0cHJpc21hRW50cnlJbkxpc3RTZWxlY3QsXG59IGZyb20gJ34vZmVhdHVyZXMvZW50cmllcy90eXBlcy9lbnRyeS1pbi1saXN0J1xuaW1wb3J0IHsgZGIgfSBmcm9tICd+L3V0aWxzL2RiLnNlcnZlcidcbmltcG9ydCB7IHBhZ2luYXRlTG9hZGVyIH0gZnJvbSAnfi91dGlscy9wYWdpbmF0aW9uLnNlcnZlcidcblxuZXhwb3J0IGxldCB1c2VyRW50cmllc1BhZ2VMb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHtcblx0cGFyYW1zLFxuXHRyZXF1ZXN0LFxufSkgPT4ge1xuXHRpZiAoIXBhcmFtcy51c2VybmFtZSkge1xuXHRcdHJldHVybiByZWRpcmVjdCgnL2FwcC9lbnRyaWVzJylcblx0fVxuXG5cdGxldCBmb3VuZFVzZXJGcm9tRGIgPSBhd2FpdCBkYi51c2VyLmZpbmRGaXJzdCh7XG5cdFx0c2VsZWN0OiB7XG5cdFx0XHRpZDogdHJ1ZSxcblx0XHR9LFxuXHRcdHdoZXJlOiB7XG5cdFx0XHR1c2VybmFtZTogcGFyYW1zLnVzZXJuYW1lLFxuXHRcdH0sXG5cdH0pXG5cblx0aWYgKCFmb3VuZFVzZXJGcm9tRGIpIHtcblx0XHRyZXR1cm4gcmVkaXJlY3QoJy9hcHAvZW50cmllcycpXG5cdH1cblxuXHRsZXQgZ2V0SXRlbXMgPSBhc3luYyAocGFnZU51bWJlcjogbnVtYmVyLCBpdGVtc1BlclBhZ2U6IG51bWJlcikgPT4ge1xuXHRcdGxldCBpdGVtczogRW50cnlJbkxpc3RGcm9tRGJbXSA9IGF3YWl0IGRiLmVudHJ5LmZpbmRNYW55KHtcblx0XHRcdHNlbGVjdDoge1xuXHRcdFx0XHQuLi5wcmlzbWFFbnRyeUluTGlzdFNlbGVjdCxcblx0XHRcdH0sXG5cdFx0XHR0YWtlOiBpdGVtc1BlclBhZ2UsXG5cdFx0XHRza2lwOiBpdGVtc1BlclBhZ2UgKiBwYWdlTnVtYmVyLFxuXHRcdFx0d2hlcmU6IHtcblx0XHRcdFx0dXNlcklkOiBmb3VuZFVzZXJGcm9tRGIhLmlkLFxuXHRcdFx0fSxcblx0XHRcdG9yZGVyQnk6IHtcblx0XHRcdFx0Y3JlYXRlZEF0OiAnZGVzYycsXG5cdFx0XHR9LFxuXHRcdH0pXG5cblx0XHRyZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwoaXRlbXMubWFwKGF3YWl0IGNvbXB1dGVFbnRyeUluTGlzdEZpZWxkcykpXG5cdH1cblxuXHRsZXQgcGFnaW5hdGVkID0gYXdhaXQgcGFnaW5hdGVMb2FkZXI8RW50cnlJbkxpc3Q+KHtcblx0XHRyZXF1ZXN0LFxuXHRcdGdldEl0ZW1zLFxuXHRcdGdldFRvdGFsOiAoKSA9PlxuXHRcdFx0ZGIuZW50cnkuY291bnQoe1xuXHRcdFx0XHR3aGVyZToge1xuXHRcdFx0XHRcdHVzZXJJZDogZm91bmRVc2VyRnJvbURiIS5pZCxcblx0XHRcdFx0fSxcblx0XHRcdH0pLFxuXHR9KVxuXG5cdHJldHVybiBzZXJpYWxpemUocGFnaW5hdGVkKVxufVxuIiwgImltcG9ydCB7IEVudHJ5LCBQaWN0dXJlLCBQcmlzbWEsIFVzZXIgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcbmltcG9ydCB7IGNsb3VkaW5hcnkgfSBmcm9tICd+L3V0aWxzL3N0b3JhZ2Uuc2VydmVyJ1xuXG5leHBvcnQgdHlwZSBFbnRyeUluTGlzdCA9IFBpY2s8RW50cnksICd0aXRsZScgfCAnc2x1Zyc+ICYge1xuXHR0aHVtYm5haWxVcmw/OiBzdHJpbmdcblx0Y3JlYXRlZEJ5OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgRW50cnlJbkxpc3RGcm9tRGIgPSBQaWNrPEVudHJ5LCAnc2x1ZycgfCAndGl0bGUnIHwgJ3NsdWcnPiAmIHtcblx0cGljdHVyZXM6IFBpY2s8UGljdHVyZSwgJ2ZpbGUnPltdXG5cdHVzZXI6IFBpY2s8VXNlciwgJ3VzZXJuYW1lJz5cbn1cblxuZXhwb3J0IGNvbnN0IHByaXNtYUVudHJ5SW5MaXN0U2VsZWN0ID0gUHJpc21hLnZhbGlkYXRvcjxQcmlzbWEuRW50cnlTZWxlY3Q+KCkoe1xuXHR0aXRsZTogdHJ1ZSxcblx0c2x1ZzogdHJ1ZSxcblx0cGljdHVyZXM6IHtcblx0XHRzZWxlY3Q6IHtcblx0XHRcdGZpbGU6IHRydWUsXG5cdFx0fSxcblx0fSxcblx0dXNlcjoge1xuXHRcdHNlbGVjdDoge1xuXHRcdFx0dXNlcm5hbWU6IHRydWUsXG5cdFx0fSxcblx0fSxcbn0pXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb21wdXRlRW50cnlJbkxpc3RGaWVsZHMoXG5cdGVudHJ5OiBFbnRyeUluTGlzdEZyb21EYixcbik6IFByb21pc2U8RW50cnlJbkxpc3Q+IHtcblx0cmV0dXJuIHtcblx0XHQuLi5lbnRyeSxcblx0XHRjcmVhdGVkQnk6IGVudHJ5LnVzZXI/LnVzZXJuYW1lLFxuXHRcdHRodW1ibmFpbFVybDogZW50cnkucGljdHVyZXM/LlswXT8uZmlsZVxuXHRcdFx0PyBjbG91ZGluYXJ5LnVybChlbnRyeS5waWN0dXJlcz8uWzBdLmZpbGUsIHtcblx0XHRcdFx0XHR3aWR0aDogNTAwLFxuXHRcdFx0XHRcdGhlaWdodDogNTAwLFxuXHRcdFx0XHRcdGNyb3A6ICdsaW1pdCcsXG5cdFx0XHQgIH0pXG5cdFx0XHQ6IHVuZGVmaW5lZCxcblx0fVxufVxuIiwgImNvbnN0IGRlZmF1bHRJdGVtc1BlclBhZ2UgPSAyMFxuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2luYXRlZDxJdGVtPiB7XG5cdGl0ZW1zOiBJdGVtW11cblx0dG90YWxJdGVtczogbnVtYmVyXG5cdGl0ZW1zUGVyUGFnZTogbnVtYmVyXG5cdHBhZ2U6IG51bWJlclxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGFnaW5hdGVMb2FkZXI8SXRlbT4oe1xuXHRyZXF1ZXN0LFxuXHRnZXRJdGVtcyxcblx0Z2V0VG90YWwsXG5cdGl0ZW1zUGVyUGFnZSA9IGRlZmF1bHRJdGVtc1BlclBhZ2UsXG59OiB7XG5cdHJlcXVlc3Q6IFJlcXVlc3Rcblx0Z2V0SXRlbXM6IChwYWdlOiBudW1iZXIsIGl0ZW1zUGVyUGFnZTogbnVtYmVyKSA9PiBQcm9taXNlPEl0ZW1bXT5cblx0Z2V0VG90YWw6ICgpID0+IFByb21pc2U8bnVtYmVyPlxuXHRpdGVtc1BlclBhZ2U/OiBudW1iZXJcbn0pOiBQcm9taXNlPFBhZ2luYXRlZDxJdGVtPj4ge1xuXHRsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybClcblx0bGV0IHBhZ2UgPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgncCcpXG5cdGxldCBwYWdlTnVtYmVyID0gcGFnZSAmJiBOdW1iZXIocGFnZSkgPiAwID8gTnVtYmVyKHBhZ2UpIC0gMSA6IDBcblxuXHRsZXQgW2l0ZW1zLCB0b3RhbEl0ZW1zXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcblx0XHRnZXRJdGVtcyhwYWdlTnVtYmVyLCBpdGVtc1BlclBhZ2UpLFxuXHRcdGdldFRvdGFsKCksXG5cdF0pXG5cblx0cmV0dXJuIHtcblx0XHRpdGVtczogaXRlbXMgPz8gW10sXG5cdFx0cGFnZTogcGFnZU51bWJlciArIDEsXG5cdFx0dG90YWxJdGVtcyxcblx0XHRpdGVtc1BlclBhZ2UsXG5cdH1cbn1cbiIsICJpbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgcmVkaXJlY3QgfSBmcm9tICdyZW1peCdcblxuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKHsgcGFyYW1zIH0pID0+IHtcblx0cmV0dXJuIHJlZGlyZWN0KGAvYXBwL3VzZXJzLyR7cGFyYW1zLnVzZXJuYW1lfS9lbnRyaWVzYClcbn1cbiIsICJpbXBvcnQgeyBMaW5rc0Z1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgZGVzZXJpYWxpemUsIHNlcmlhbGl6ZSB9IGZyb20gJ3N1cGVyanNvbidcbmltcG9ydCBFbnRyeUxpc3QgZnJvbSAnfi9mZWF0dXJlcy9lbnRyaWVzL2NvbXBvbmVudHMvZW50cnktbGlzdCdcbmltcG9ydCB7XG5cdGNvbXB1dGVFbnRyeUluTGlzdEZpZWxkcyxcblx0RW50cnlJbkxpc3QsXG5cdHByaXNtYUVudHJ5SW5MaXN0U2VsZWN0LFxufSBmcm9tICd+L2ZlYXR1cmVzL2VudHJpZXMvdHlwZXMvZW50cnktaW4tbGlzdCdcbmltcG9ydCB7IGRiIH0gZnJvbSAnfi91dGlscy9kYi5zZXJ2ZXInXG5pbXBvcnQgeyBQYWdpbmF0ZWQsIHBhZ2luYXRlTG9hZGVyIH0gZnJvbSAnfi91dGlscy9wYWdpbmF0aW9uLnNlcnZlcidcbmltcG9ydCB7IHJlcXVpcmVVc2VySWQgfSBmcm9tICd+L3V0aWxzL3Nlc3Npb24uc2VydmVyJ1xuaW1wb3J0IGVudHJpZXNTdHlsZXNoZWV0IGZyb20gJ34vc3R5bGVzL2VudHJpZXMuY3NzJ1xuaW1wb3J0IHsgc3R5bGVzaGVldCBhcyBlbnRyeUNhcmRTdHlsZXNoZWV0IH0gZnJvbSAnfi9mZWF0dXJlcy9lbnRyaWVzL2NvbXBvbmVudHMvZW50cnktY2FyZCdcblxuZXhwb3J0IGxldCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IFtcblx0ZW50cnlDYXJkU3R5bGVzaGVldCxcblx0eyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogZW50cmllc1N0eWxlc2hlZXQgfSxcbl1cblxuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcblx0bGV0IHVzZXJJZCA9IGF3YWl0IHJlcXVpcmVVc2VySWQocmVxdWVzdClcblxuXHRsZXQgZ2V0SXRlbXMgPSBhc3luYyAocGFnZU51bWJlcjogbnVtYmVyLCBpdGVtc1BlclBhZ2U6IG51bWJlcikgPT4ge1xuXHRcdGxldCBiYXNlSXRlbXMgPSBhd2FpdCBkYi5lbnRyeS5maW5kTWFueSh7XG5cdFx0XHRzZWxlY3Q6IHByaXNtYUVudHJ5SW5MaXN0U2VsZWN0LFxuXHRcdFx0dGFrZTogaXRlbXNQZXJQYWdlLFxuXHRcdFx0c2tpcDogaXRlbXNQZXJQYWdlICogcGFnZU51bWJlcixcblx0XHRcdHdoZXJlOiB7XG5cdFx0XHRcdGxpa2VkQnk6IHtcblx0XHRcdFx0XHRzb21lOiB7XG5cdFx0XHRcdFx0XHRpZDogdXNlcklkLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHVzZXJJZDoge1xuXHRcdFx0XHRcdG5vdDogdXNlcklkLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9KVxuXG5cdFx0cmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKGJhc2VJdGVtcy5tYXAoY29tcHV0ZUVudHJ5SW5MaXN0RmllbGRzKSlcblx0fVxuXG5cdGxldCBwYWdpbmF0ZWQgPSBhd2FpdCBwYWdpbmF0ZUxvYWRlcjxFbnRyeUluTGlzdD4oe1xuXHRcdHJlcXVlc3QsXG5cdFx0Z2V0SXRlbXMsXG5cdFx0Z2V0VG90YWw6ICgpID0+XG5cdFx0XHRkYi5lbnRyeS5jb3VudCh7XG5cdFx0XHRcdHdoZXJlOiB7XG5cdFx0XHRcdFx0dXNlcklkLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSksXG5cdH0pXG5cblx0cmV0dXJuIHNlcmlhbGl6ZShwYWdpbmF0ZWQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJMaWtlZFBhZ2UoKSB7XG5cdGxldCB7IHRvdGFsSXRlbXMsIGl0ZW1zUGVyUGFnZSwgcGFnZSwgaXRlbXMgfSA9IGRlc2VyaWFsaXplPFxuXHRcdFBhZ2luYXRlZDxFbnRyeUluTGlzdD5cblx0Pih1c2VMb2FkZXJEYXRhKCkpXG5cblx0cmV0dXJuIChcblx0XHQ8RW50cnlMaXN0XG5cdFx0XHRlbnRyaWVzPXtpdGVtc31cblx0XHRcdHRvdGFsPXt0b3RhbEl0ZW1zfVxuXHRcdFx0cGFnZT17cGFnZX1cblx0XHRcdGl0ZW1zUGVyUGFnZT17aXRlbXNQZXJQYWdlfVxuXHRcdC8+XG5cdClcbn1cbiIsICJpbXBvcnQgeyBVc2VyIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5pbXBvcnQgeyBGaVBsdXMgfSBmcm9tICdyZWFjdC1pY29ucy9maSdcbmltcG9ydCB7XG5cdExpbmssXG5cdExpbmtzRnVuY3Rpb24sXG5cdExvYWRlckZ1bmN0aW9uLFxuXHRNZXRhRnVuY3Rpb24sXG5cdHVzZUxvYWRlckRhdGEsXG59IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgZGVzZXJpYWxpemUsIHNlcmlhbGl6ZSB9IGZyb20gJ3N1cGVyanNvbidcbmltcG9ydCBTaGVpa2FoTG9nbyBmcm9tICd+L2NvbXBvbmVudHMvc2hlaWthLWxvZ28nXG5pbXBvcnQgeyBzdHlsZXNoZWV0IGFzIGVudHJ5Q2FyZFN0eWxlc2hlZXQgfSBmcm9tICd+L2ZlYXR1cmVzL2VudHJpZXMvY29tcG9uZW50cy9lbnRyeS1jYXJkJ1xuaW1wb3J0IEVudHJ5TGlzdCBmcm9tICd+L2ZlYXR1cmVzL2VudHJpZXMvY29tcG9uZW50cy9lbnRyeS1saXN0J1xuaW1wb3J0IHtcblx0Y29tcHV0ZUVudHJ5SW5MaXN0RmllbGRzLFxuXHRFbnRyeUluTGlzdCxcblx0RW50cnlJbkxpc3RGcm9tRGIsXG5cdHByaXNtYUVudHJ5SW5MaXN0U2VsZWN0LFxufSBmcm9tICd+L2ZlYXR1cmVzL2VudHJpZXMvdHlwZXMvZW50cnktaW4tbGlzdCdcbmltcG9ydCB1c2VDdXJyZW50VXNlciBmcm9tICd+L2hvb2tzL3VzZUN1cnJlbnRVc2VyJ1xuaW1wb3J0IHsgZGIgfSBmcm9tICd+L3V0aWxzL2RiLnNlcnZlcidcbmltcG9ydCB7IGdldFVzZXIgfSBmcm9tICd+L3V0aWxzL3Nlc3Npb24uc2VydmVyJ1xuXG5jb25zdCBpdGVtc1BlclBhZ2UgPSAyMFxuXG5leHBvcnQgbGV0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW2VudHJ5Q2FyZFN0eWxlc2hlZXRdXG5cbmV4cG9ydCBsZXQgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHRpdGxlOiAnRW50cmllcyB8IFNoZWlrYWggRGlhcnknLFxuXHR9XG59XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuXHRsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybClcblx0bGV0IHBhZ2UgPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgncCcpXG5cdGxldCBwYWdlTnVtYmVyID0gcGFnZSAmJiBOdW1iZXIocGFnZSkgPiAwID8gTnVtYmVyKHBhZ2UpIC0gMSA6IDBcblxuXHRsZXQgdG90YWwgPSBhd2FpdCBkYi5lbnRyeS5jb3VudCgpXG5cblx0bGV0IGRhdGE6IEVudHJ5SW5MaXN0RnJvbURiW10gPSBhd2FpdCBkYi5lbnRyeS5maW5kTWFueSh7XG5cdFx0c2VsZWN0OiBwcmlzbWFFbnRyeUluTGlzdFNlbGVjdCxcblx0XHR0YWtlOiBpdGVtc1BlclBhZ2UsXG5cdFx0c2tpcDogaXRlbXNQZXJQYWdlICogcGFnZU51bWJlcixcblx0XHRvcmRlckJ5OiB7XG5cdFx0XHRjcmVhdGVkQXQ6ICdkZXNjJyxcblx0XHR9LFxuXHR9KVxuXG5cdGxldCBlbnRyaWVzOiBFbnRyeUluTGlzdFtdID0gYXdhaXQgUHJvbWlzZS5hbGwoXG5cdFx0ZGF0YS5tYXAoYXdhaXQgY29tcHV0ZUVudHJ5SW5MaXN0RmllbGRzKSxcblx0KVxuXG5cdHJldHVybiBzZXJpYWxpemUoe1xuXHRcdHBhZ2U6IHBhZ2VOdW1iZXIgKyAxLFxuXHRcdHRvdGFsLFxuXHRcdGVudHJpZXMsXG5cdH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVudHJpZXNJbmRleFBhZ2UoKSB7XG5cdGxldCB7IHBhZ2UsIHRvdGFsLCBlbnRyaWVzIH0gPSBkZXNlcmlhbGl6ZTx7XG5cdFx0cGFnZTogbnVtYmVyXG5cdFx0dG90YWw6IG51bWJlclxuXHRcdGVudHJpZXM6IEVudHJ5SW5MaXN0W11cblx0fT4odXNlTG9hZGVyRGF0YSgpKVxuXG5cdGxldCBjdXJyZW50VXNlciA9IHVzZUN1cnJlbnRVc2VyKClcblxuXHRpZiAodG90YWwgPiAwKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxFbnRyeUxpc3Rcblx0XHRcdFx0ZW50cmllcz17ZW50cmllc31cblx0XHRcdFx0cGFnZT17cGFnZX1cblx0XHRcdFx0dG90YWw9e3RvdGFsfVxuXHRcdFx0XHRpdGVtc1BlclBhZ2U9e2l0ZW1zUGVyUGFnZX1cblx0XHRcdC8+XG5cdFx0KVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgZmxleFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm0tYXV0byBmbGV4IGZsZXgtY29sIHRleHQtcHJpbWFyeS01MDBcIj5cblx0XHRcdFx0XHQ8U2hlaWthaExvZ28gY2xhc3NOYW1lPVwidy02MCBoLTYwIGZpbHRlciBkcm9wLXNoYWRvdy1wcmltYXJ5XCIgLz5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0yeGwgbXgtYXV0byB0ZXh0LXNoYWRvdy1wcmltYXJ5XCI+XG5cdFx0XHRcdFx0XHRObyBlbnRyaWVzIHlldFxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHR7IWN1cnJlbnRVc2VyID8gbnVsbCA6IChcblx0XHRcdFx0XHRcdDxMaW5rIHRvPVwiL2FwcC9lbnRyaWVzL25ld1wiIGNsYXNzTmFtZT1cInNoZWlrYSBidXR0b24gZmxleCBteC1hdXRvIG10LTVcIj5cblx0XHRcdFx0XHRcdFx0PEZpUGx1cyBzaXplPVwiMS41cmVtXCIgY2xhc3NOYW1lPVwibXItM1wiIC8+XG5cdFx0XHRcdFx0XHRcdEFkZCBhbiBlbnRyeVxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3NGdW5jdGlvbixcbiAgTWV0YUZ1bmN0aW9uLFxuICB1c2VBY3Rpb25EYXRhLFxuICB1c2VUcmFuc2l0aW9uLFxufSBmcm9tICdyZW1peCdcbmltcG9ydCB7IGNyZWF0ZUFjdGlvbiwgRm9ybUVycm9yIH0gZnJvbSAnfi9mZWF0dXJlcy9lbnRyaWVzL2FwaS91cGRhdGUuc2VydmVyJ1xuaW1wb3J0IEVudHJ5Rm9ybSBmcm9tICd+L2ZlYXR1cmVzL2VudHJpZXMvY29tcG9uZW50cy9lbnRyeS1mb3JtJ1xuaW1wb3J0IGZvcm1TdHlsZXNoZWV0IGZyb20gJ34vc3R5bGVzL2Zvcm1zLmNzcydcblxuZXhwb3J0IGxldCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IFtcbiAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogZm9ybVN0eWxlc2hlZXQgfSxcbl1cblxuZXhwb3J0IGxldCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdOZXcgRW50cnkgfCBTaGVpa2FoIERpYXJ5JyxcbiAgfVxufVxuXG5leHBvcnQgbGV0IGFjdGlvbiA9IGNyZWF0ZUFjdGlvblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdFbnRyeVBhZ2UoKSB7XG4gIGxldCBlcnJvcnMgPSB1c2VBY3Rpb25EYXRhPEZvcm1FcnJvcj4oKVxuICBsZXQgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKVxuXG4gIHJldHVybiAoXG4gICAgPEVudHJ5Rm9ybVxuICAgICAgZXJyb3JzPXtlcnJvcnN9XG4gICAgICB0cmFuc2l0aW9uPXt0cmFuc2l0aW9ufVxuICAgICAgc3VibWl0TGFiZWw9e3sgZGVmYXVsdDogJ0NyZWF0ZSBlbnRyeScsIHNlbmRpbmc6ICdDcmVhdGluZyBlbnRyeScgfX1cbiAgICAgIGFjdGlvbj1cIi9hcHAvZW50cmllcy9uZXdcIlxuICAgIC8+XG4gIClcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxRQUFRLFFBQVE7QUFJcEIsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsU0FBUztBQUFBLE1BQ3RDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlB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
