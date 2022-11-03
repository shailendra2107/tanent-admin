export interface NotificationMessage {
  type?: 'custom' | 'error' | 'info' | 'success' | 'warning';
  message: string;
}

export interface ISelectProp {
  text: any;
  value: any;
}

export enum KeyExpressions {
  id = 'id',
}

export enum ValueExpressions {
  value = 'value',
  listValue = 'listvalue',
}
