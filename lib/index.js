"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveToCollection_Lazy_Piped = exports.closeConnection = exports.deleteCollection_Lazy_InLog = exports.useCollection = exports.saveToCollection_Lazy = exports.connectMongoDb_Lazy_InLog = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
var mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
function connectMongoDb_Lazy_InLog() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("--------------");
                    console.log("INFO: Connecting to database.");
                    // console.log("Temp log: ",process.env.MONGO_DB_URI) // mylog.
                    return [4 /*yield*/, mongoose_1.default
                            .connect(process.env.MONGO_DB_URI, {
                            useNewUrlParser: true,
                            useUnifiedTopology: true,
                            useFindAndModify: false,
                            useCreateIndex: true,
                        })
                            .then(function () {
                            console.log("SUCCESS: ☻ Connection successful ☺.");
                        })
                            .catch(function (error) {
                            console.log("error connection to MongoDB:", error.message);
                        })];
                case 1:
                    // console.log("Temp log: ",process.env.MONGO_DB_URI) // mylog.
                    _a.sent();
                    return [2 /*return*/, "THANKS: For awaiting connectMongoDb().\n--------------"];
            }
        });
    });
}
exports.connectMongoDb_Lazy_InLog = connectMongoDb_Lazy_InLog;
function saveToCollection_Lazy(collection, data) {
    return __awaiter(this, void 0, void 0, function () {
        var savedData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (typeof collection == "string") {
                        collection = exports.useCollection(collection, null);
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, new collection(data).save()];
                case 2:
                    savedData = _a.sent();
                    console.log("INFO: ", savedData);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log("==NAKED ERROR== " + error_1.message + " ==produced by== " + error_1.name + ".");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.saveToCollection_Lazy = saveToCollection_Lazy;
exports.useCollection = function (collectionName, schemaObject) {
    return mongoose_1.default.model(collectionName, new mongoose_1.default.Schema(schemaObject, schemaObject || { strict: false }));
};
exports.deleteCollection_Lazy_InLog = function (collection) {
    if (typeof collection == "string")
        collection = exports.useCollection(collection, null);
    return collection.deleteMany({});
};
exports.closeConnection = function () { return mongoose_1.default.connection.close(); };
exports.saveToCollection_Lazy_Piped = function (collection) {
    var val = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        val[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var pipe;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    pipe = function (collection) {
                        var val = [];
                        for (var _i = 1; _i < arguments.length; _i++) {
                            val[_i - 1] = arguments[_i];
                        }
                        console.log(val);
                        var objectx = JSON.parse(JSON.stringify(collection.schema.obj));
                        var schema = Object.keys(collection.schema.obj);
                        var i = 0;
                        for (var _a = 0, schema_1 = schema; _a < schema_1.length; _a++) {
                            var key = schema_1[_a];
                            objectx[key] = val[i++];
                        }
                        return objectx;
                    };
                    return [4 /*yield*/, saveToCollection_Lazy(collection, pipe.apply(void 0, __spreadArrays([collection], val)))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.default = {
    connectMongoDb_Lazy_InLog: connectMongoDb_Lazy_InLog,
    saveToCollection_Lazy: saveToCollection_Lazy,
    useCollection: exports.useCollection,
    deleteCollection_Lazy_InLog: exports.deleteCollection_Lazy_InLog,
    closeConnection: exports.closeConnection,
    saveToCollection_Lazy_Piped: exports.saveToCollection_Lazy_Piped,
};
