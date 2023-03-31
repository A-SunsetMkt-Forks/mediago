import { Video } from "electron";
import { type Favorite } from "entity/Favorite";
import {
  DownloadItem,
  DownloadItemPagination,
  VideoResponse,
} from "interfaces";

declare interface EnvPath {
  binPath: string;
  dbPath: string;
  workspace: string;
  platform: string;
  local: string;
}

declare interface ElectronAPI {
  getEnvPath: () => Promise<EnvPath>;
  getFavorites: () => Promise<Favorite>;
  addFavorite: (favorite: Favorite) => Promise<Favorite>;
  removeFavorite: (id: number) => Promise<void>;
  setWebviewBounds: (rect: Electron.Rectangle) => Promise<void>;
  webviewLoadURL: (url?: string) => Promise<void>;
  webviewGoBack: () => Promise<boolean>;
  webviewReload: () => Promise<void>;
  webwiewGoHome: () => Promise<void>;
  getAppStore: () => Promise<AppStore>;
  onSelectDownloadDir: () => Promise<string>;
  setAppStore: (key: keyof AppStore, val: any) => Promise<void>;
  openDir: (dir: string) => Promise<void>;
  addDownloadItem: (video: DownloadItem) => Promise<Video>;
  getDownloadItems: (
    pagiantion: DownloadItemPagination
  ) => Promise<VideoResponse>;
  startDownload: (vid: number) => Promise<void>;
  openUrl: (url: string) => Promise<void>;
  stopDownload: (id: number) => Promise<void>;
  onDownloadListContextMenu: (id: number) => Promise<void>;
  onFavoriteItemContextMenu: (id: number) => Promise<void>;
  deleteDownloadItem: (id: number) => Promise<void>;
  rendererEvent: (channel: string, eventName: string, listener: any) => void;
  removeEventListener: (channel: string, eventName: string) => void;
}

declare interface LinkMessage {
  url: string;
  title: string;
}

declare interface AppStore {
  // 本地存储地址
  local: string;
  // 下载完成提示音
  promptTone: boolean;
  // 代理地址
  proxy: string;
  // 是否开启代理
  useProxy: boolean;
}