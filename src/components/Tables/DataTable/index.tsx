import * as React from 'react';
import DataGrid, {
  Column,
  Pager,
  Paging,
  Scrolling,
} from 'devextreme-react/data-grid';



const DataTable = ({
  columns,
  isEditMode,
  loading,
  pageSize,
  ...props
}: any) => {
  return (
    <DataGrid
      dataSource={props.dataSource}
      {...props}
      showRowLines={true}
      showColumnLines={false}
      showBorders={false}
      columnAutoWidth={false}
      allowColumnResizing={false}
      columnResizingMode="widget"
      height="auto"

    >
      {columns?.map((column: any, idx: any) => {
        if (column?.cellRender) {
          return (
            <Column
              key={idx}
              width={column.width}
              minWidth={column.width === undefined ? 150 : ''}
              caption={column.caption}
              cssClass={column.cssClass}
              dataField={column.dataField}
              cellRender={(cellData: any) => column.cellRender(cellData)}
            />
          );
        } else {
          return (
            <Column
              key={idx}
              width={column.width}
              minWidth={column.width === undefined ? 150 : ''}
              caption={column.caption}
              cssClass={column.cssClass}
              dataField={column.dataField}
              allowResizing={!!column.allowResizing}
            />
          )
        }

      })}
      <Paging defaultPageSize={5} />
      <Scrolling showScrollbar="always" scrollByThumb={true} />
      <Pager
        showInfo={true}
        showNavigationButtons
        visible={true}
      />
    </DataGrid>
  );
};

export default DataTable;
