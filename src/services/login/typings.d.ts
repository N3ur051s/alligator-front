// @ts-ignore
/* eslint-disable */

declare namespace API {
  type CurrentUser = {
    id?: number;
    name?: string;
    avatar?: string;
    email?: string;
    group?: string;
    tags?: { key?: string; label?: string }[];
    isAdmin?: boolean;
    access?: string;
    phone?: string;
  };

  type LoginParams = {
    username?: string;
    password?: string;
  };

  type LoginResult = {
    status?: string;
    token?: string;
  };

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type GroupListItem = {
    id?: number;
    name?: string;
    desc?: string;
    nodes: number;
    mainConf?: string;
  };

  type GroupList = {
    data?: GroupListItem[];
    total?: number;
    success?: boolean;
  };

  type NodeListItem = {
    id?: number;
    name?: string;
    nodeAddr?: string;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
  };

  type NodeList = {
    data?: NodeListItem[];
    total?: number;
    success?: boolean;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}
