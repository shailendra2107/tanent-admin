export interface IHeaderData {
  account: string;
}

export interface IListItem {
  value: number;
  text: string;
}

export interface IAccountList {
  value: string | number;
  text: string;
  ID?: number;
  AccountId?: string | null;
}

export interface IProjectList {
  value: string | number;
  text: string;
  ID?: number;
  Project?: string | null;
}

export interface ITaskTypeList {
  value: string | number;
  text: string;
  disabled?: boolean;
  sText?: string;
  ID?: number;
  Tasks?: string | null;
}

export interface IStatusList {
  value: string | number;
  text: string;
  disabled?: boolean;
  sText?: string;
  ID?: number;
  Status?: string | null;
}

export interface ITimeEntryItemList {
  ID: number;
  value: number | null;
  account?: string | null;
  project?: string | null;
  task?: string | null;
  date?: string | null;
  status?: string | null;
  taskType?: string | null;
  devBillableHours?: string | null;
  devNonBillableHours?: string | null;
  devInternalHours?: string | null;
  invoiceNote?: string | null;
  internalNote?: string | null;
}
export interface IReviewManagerTimesheetList {
  timesheetId?: number;
  isSubmitted?: boolean;
  isApprovedByManager?: boolean;
  isApprovedByAccountant?: boolean;
  manager?: string | null;
  userName?: string | null;
  project?: string | null;
  task?: string | null;
  dateOfWork?: string | null;
  note?: string | null;
  internalNote?: string | null;
  devBillableHours?: number | null;
  devNonBillableHours?: number | null;
  devInternalHours?: number | null;
  pmBillableHours?: number | null;
  pmNonBillableHours?: number | null;
  pmInternalHours?: number | null;
}
export interface IBudgetCheckList {
  clientName?: string | null;
  projectName?: string | null;
  taskSummary?: string | null;
  estimatedHours?: number | null;
  unsubmittedBillableHours?: number | null;
  unsubmittedNonBillableHours?: number | null;
  unsubmittedInternalHours?: number | null;
  submittedBillableHours?: number | null;
  submittedNonBillableHours?: number | null;
  submittedInternalHours?: number | null;
  approvedBillableHours?: number | null;
  approvedNonBillableHours?: number | null;
  approvedInternalHours?: number | null;
  pmReviewedBillableHours?: number | null;
  pmReviewedNonBillableHours?: number | null;
  pmReviewedInternalHours?: number | null;
}

export interface Summary {
  resource: string | null;
  days: number | null;
  hours: number | null;
  average: number | null;
}
export interface IResourceCheckList {
  totalWorkdays?: string | null;
  summary?: Summary[];
}
