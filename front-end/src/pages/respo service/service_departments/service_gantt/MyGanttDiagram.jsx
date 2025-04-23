import * as React from 'react';
import { GanttComponent, DayMarkers, Inject, Selection, Toolbar, Edit, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { Filter } from '@syncfusion/ej2-react-gantt';
import { taskModeData } from './compatibleData.js'; // Ensure this data is correctly structured

export default function MyGanttDiagram({data}){
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        status: 'Status',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        endDate: 'EndDate',
        dependency: 'Predecessor',
        child: 'Children',
        manual: 'isManual'
    };

    const labelSettings = {
        leftLabel: 'TaskName'
    };

    const splitterSettings = {
        position: "35%"
    };

    const editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    };

    const toolbar = [
        'Add', 'Edit', 'Update', 'Delete', 'Cancel',
        'ExpandAll', 'CollapseAll', 'ZoomIn', 'ZoomOut', 'ZoomToFit'
    ];

    const projectStartDate = new Date('02/20/2024');
    const projectEndDate = new Date('03/30/2024');

    // Task mode options for the dropdown
    const taskModeOptions = [
        { id: true, mode: 'Manual' },
        { id: false, mode: 'Auto' }
    ];

    // Custom editor for Task Mode column
    const taskModeEditor = (props) => {
        return (
            <DropDownListComponent
                dataSource={taskModeOptions}
                fields={{ value: 'id', text: 'mode' }}
                value={props.value} // Bind the current value
                change={(e) => props.setCellValue(e.value)} // Update the value when changed
            />
        );
    };

    return (
        <div className='control-pane'>
{/*
            {data}
*/}
            <div className='control-section bg-red-300 '>
                <GanttComponent
                    id='TaskMode'
                    dataSource={taskModeData}
                    treeColumnIndex={1}
                    allowSelection={true}
                    highlightWeekends={true}
                    toolbar={toolbar}
                    editSettings={editSettings}
                    splitterSettings={splitterSettings}
                    height='500px'
                    taskMode='Custom'
                    taskFields={taskFields}
                    labelSettings={labelSettings}
                    projectStartDate={projectStartDate}
                    projectEndDate={projectEndDate}
                    allowFiltering={true}

                >
                    <ColumnsDirective >
                        <ColumnDirective field='TaskID' visible={false}></ColumnDirective>
                        <ColumnDirective field='TaskName' headerText='Task Name'></ColumnDirective>
                        <ColumnDirective field='Status' headerText='Task Status'></ColumnDirective>
                        {/* Custom Editor for Task Mode */}
                        <ColumnDirective
                            field='isManual'
                            headerText='Task Mode'
                            edit={{
                                create: taskModeEditor, // Use custom editor
                                read: (args) => args.rowData.isManual, // Read the current value
                            }}
                        />
                    </ColumnsDirective>
                    <Inject services={[Edit, Selection, Toolbar, DayMarkers, Filter]} />
                </GanttComponent>
            </div>
        </div>
    );
}
