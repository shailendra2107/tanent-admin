export interface ITimesheetItem {
    hrs?: any;
    collapse?    :number;

    account?    :string|null;
    accountId?: number|null;
    
    project?    :string|null;
    projectName?:string|null;
    projectId?: number|null;

    task?       :string|null;
    taskId?: number|null;  
    taskCode?: string|null; 

    enteredHrs?  :number|null;
    estimatedHrs?:number|null;
    consumedHrs? :number|null;
    remainingHrs? :number|null;
    
    timeEntryTimeSheetModels? :any|null;
    totalHrs?:number | null;  
    text?:string|null; 
    dateOfWork?:any;
    value?:boolean;
    workingDay? :any | null;
    workingDayTasks?: any | null;  
    timeEntryTimeSheetModel? :any|null;  
    
   timesheetTimeTypeId? :string|null;
    
}

export interface ITimesheetItemDays {
  workingDay? :any | null;
  workingDayTasks?: any | null;    
 
  hrs?: any;
  collapse?    :number;
  account?    :string|null;
  accountId?: number|null;
  project?    :string|null;
  projectName?:string|null;
  projectId?: number|null;
  task?       :string|null;
  taskId?: number|null;
  enteredHrs?  :number|null;
  estimatedHrs?:number|null;
  consumedHrs? :number|null;
  remainingHrs? :number|null;
  timeEntryTimeSheetModels? :any|null;
  totalHrs?:number | null;    
  taskCode?: string|null; 
  text?:string|null; 
  dateOfWork?:any;
  value?:boolean;
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
export interface IEntityType {
    value      : number;
    text       : string;
    style      :string;
}
export interface ITaskItem {
	value      : number;
	text       : string;
}

export interface IWorkingHrs {
  dateOfWork   : string|null;
  hrs          : string|null;
  value        : boolean;
  text         : string|null;
}

export interface INewTimesheetEntry {
  checkIndex?   :any|null;
  uuid?         :any|null;
  data?         :any|null;
  hrsData?      :any|null;
  descTypeData? :any|null;
  submitToggle? :(v:any)=>void;
  onDescriptionChange?  :(v:any,vs:any,vlArray:any,typeText:any,)=>void;
}
export interface INewTimes {
  devBillable?         :string|null,
  devNonBillable?      :string|null,
  devInternal?         :string|null,
  timesheetTimeTypeId? :string|null,
  timesheetId?         :number|null,
  note?                :string|null,
  workingDay?          :string|null,
  totalHrs?            :string|null,
}