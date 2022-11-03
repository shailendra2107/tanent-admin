export interface ITimesheetItem {
    id          :number;
    value       :string;
    collapse    :number;
    account?    :string|null;
    project?    :string|null;
    task?       :string|null;
    entered?  :number|null;
    estimated?:number|null;
    consumed? :number|null;
    remaining? :number|null;
    hrsDetail? :any|null;
}
export interface IDescItem {
    id: number;
    name?: string|null;
    icon?: string|null;
    badge?: string|null;
}

export interface IProjectItem {
	ID         : number;
	value      : number;
	text       : string;
	accountName: string;
	projectName: string;
	taskName   : string;
	status     : string;
}
export interface IAccountItem {
	value      : number;
	text       : string;
}
export interface ITaskItem {
	value      : number;
	text       : string;
}