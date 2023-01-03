import './App.css';
import { ScheduleChartView } from './DlhSoft.ProjectData.GanttChart.React.Components';

function App() {
  let resource1 = { content: 'Diane' };
  let resource2 = { content: 'John' };
  let resource3 = { content: 'Sarah' };
  let resource4 = { content: 'Michael' };
  let resource5 = { content: 'Mark' };
  let resource6 = { content: 'Jessica' };
  let resource7 = { content: 'Emily' };
  let resource8 = { content: 'Matthew' };
  let resource9 = { content: 'James' };
  let resource10 = { content: 'Madison' };
  let resource11 = { content: 'Olivia' };
  let resource12 = { content: 'William' };
  let resource13 = { content: 'Rachel' };
  let resource14 = { content: 'Samantha' };
  let resource15 = { content: 'Benjamin' };
  let resource16 = { content: 'Taylor' };
  let resources = [
      resource1, resource2, resource3, resource4, resource5, resource6, resource7, resource8,
      resource9, resource10, resource11, resource12, resource13, resource14, resource15, resource16 ];

  let task1_1 = { content: 'Web-Based To-Do List App', start: new Date(2023, 1-1, 2, 8), finish: new Date(2023, 1-1, 3, 16) };
  let task1_2 = { content: 'Restaurant Review Forum', start: new Date(2023, 1-1, 5, 8), finish: new Date(2023, 1-1, 6, 16) };
  let task1_3 = { content: 'Real-Time Chat Room', start: new Date(2023, 1-1, 10, 8), finish: new Date(2023, 1-1, 12, 16) };
  let task2_1 = { content: 'E-Commerce Site for Handmade Goods', start: new Date(2023, 1-1, 4, 8), finish: new Date(2023, 1-1, 6, 16) };
  let task2_2 = { content: 'Online Course Platform', start: new Date(2023, 1-1, 9, 8), finish: new Date(2023, 1-1, 12, 16) };
  let task3_1 = { content: 'Recipe Management and Meal Planning Tool', start: new Date(2023, 1-1, 9, 8), finish: new Date(2023, 1-1, 10, 16) };
  let task3_2 = { content: 'Virtual Event Planning and Scheduling System', start: new Date(2023, 1-1, 12, 8), finish: new Date(2023, 1-1, 13, 16) };
  let task3_3 = { content: 'Personal Budgeting and Financial Planning App', start: new Date(2023, 1-1, 17, 8), finish: new Date(2023, 1-1, 19, 16) };
  let task4_1 = { content: 'Travel Itinerary and Trip Planning Website', start: new Date(2023, 1-1, 11, 8), finish: new Date(2023, 1-1, 13, 16) };
  let task4_2 = { content: 'Image Editing and Management Software', start: new Date(2023, 1-1, 16, 8), finish: new Date(2023, 1-1, 19, 16) };
  let task5_1 = { content: 'Language Translation App', start: new Date(2023, 1-1, 2, 8), finish: new Date(2023, 1-1, 3, 16) };
  let task5_2 = { content: 'Real Estate Listing and Search Engine', start: new Date(2023, 1-1, 5, 8), finish: new Date(2023, 1-1, 6, 16) };
  let task5_3 = { content: 'Video Streaming and Sharing Platform', start: new Date(2023, 1-1, 10, 8), finish: new Date(2023, 1-1, 12, 16) };
  let task6_1 = { content: 'Online Gaming Community and Tournament Hub', start: new Date(2023, 1-1, 4, 8), finish: new Date(2023, 1-1, 6, 16) };
  let task6_2 = { content: 'Music Streaming Service', start: new Date(2023, 1-1, 9, 8), finish: new Date(2023, 1-1, 12, 16) };
  let task7_1 = { content: 'Virtual Pet Simulation Game', start: new Date(2023, 1-1, 9, 8), finish: new Date(2023, 1-1, 10, 16) };
  let task7_2 = { content: 'Weather Forecasting and Alerts System', start: new Date(2023, 1-1, 12, 8), finish: new Date(2023, 1-1, 13, 16) };
  let task7_3 = { content: 'News Aggregation and Personalization Website', start: new Date(2023, 1-1, 17, 8), finish: new Date(2023, 1-1, 19, 16) };
  let task8_1 = { content: 'Online Collaborative Text and Code Editor', start: new Date(2023, 1-1, 11, 8), finish: new Date(2023, 1-1, 13, 16) };
  let task8_2 = { content: 'Book Club and Reading Tracker', start: new Date(2023, 1-1, 16, 8), finish: new Date(2023, 1-1, 19, 16) };
  let task9_1 = { content: 'Grocery Delivery and Meal Kit Service', start: new Date(2023, 1-1, 2, 8), finish: new Date(2023, 1-1, 3, 16) };
  let task9_2 = { content: 'Online Fitness and Health Tracking App', start: new Date(2023, 1-1, 5, 8), finish: new Date(2023, 1-1, 6, 16) };
  let task9_3 = { content: 'Car Sharing and Rental Marketplace', start: new Date(2023, 1-1, 10, 8), finish: new Date(2023, 1-1, 12, 16) };
  let task10_1 = { content: 'Event Ticketing and Management System', start: new Date(2023, 1-1, 4, 8), finish: new Date(2023, 1-1, 6, 16) };
  let task10_2 = { content: 'Dating and Social Networking App', start: new Date(2023, 1-1, 9, 8), finish: new Date(2023, 1-1, 12, 16) };
  let task11_1 = { content: 'Real-Time Traffic and Navigation App', start: new Date(2023, 1-1, 9, 8), finish: new Date(2023, 1-1, 10, 16) };
  let task11_2 = { content: 'Virtual Reality and Augmented Reality Experience Platform', start: new Date(2023, 1-1, 12, 8), finish: new Date(2023, 1-1, 13, 16) };
  let task11_3 = { content: 'Online Tutoring and Education Portal', start: new Date(2023, 1-1, 17, 8), finish: new Date(2023, 1-1, 19, 16) };
  let task12_1 = { content: 'Remote Work and Team Collaboration Tool', start: new Date(2023, 1-1, 11, 8), finish: new Date(2023, 1-1, 13, 16) };
  let task12_2 = { content: 'Home Automation and Smart Home Control System', start: new Date(2023, 1-1, 16, 8), finish: new Date(2023, 1-1, 19, 16) };
  let task13_1 = { content: 'Pet Adoption and Rescue Platform', start: new Date(2023, 1-1, 2, 8), finish: new Date(2023, 1-1, 3, 16) };
  let task13_2 = { content: 'Sports Team and League Management Website', start: new Date(2023, 1-1, 5, 8), finish: new Date(2023, 1-1, 6, 16) };
  let task13_3 = { content: 'Election Polling and Voter Information Website', start: new Date(2023, 1-1, 10, 8), finish: new Date(2023, 1-1, 12, 16) };
  let task14_1 = { content: 'Community Bulletin Board and Classifieds Website', start: new Date(2023, 1-1, 4, 8), finish: new Date(2023, 1-1, 6, 16) };
  let task14_2 = { content: 'Online Therapy and Counseling Service', start: new Date(2023, 1-1, 9, 8), finish: new Date(2023, 1-1, 12, 16) };
  let task15_1 = { content: 'Virtual Reality and Augmented Reality Experience Platform', start: new Date(2023, 1-1, 9, 8), finish: new Date(2023, 1-1, 10, 16) };
  let task15_2 = { content: 'Online Tutoring and Education Portal', start: new Date(2023, 1-1, 12, 8), finish: new Date(2023, 1-1, 13, 16) };
  let task15_3 = { content: 'Remote Work and Team Collaboration Tool', start: new Date(2023, 1-1, 17, 8), finish: new Date(2023, 1-1, 19, 16) };
  let task16_1 = { content: 'Home Automation and Smart Home Control System', start: new Date(2023, 1-1, 11, 8), finish: new Date(2023, 1-1, 13, 16) };
  let task16_2 = { content: 'Pet Adoption and Rescue Platform', start: new Date(2023, 1-1, 16, 8), finish: new Date(2023, 1-1, 19, 16) };

  resource1.ganttChartItems = [ task1_1, task1_2, task1_3 ];
  resource2.ganttChartItems = [ task2_1, task2_2 ];
  resource3.ganttChartItems = [ task3_1, task3_2, task3_3 ];
  resource4.ganttChartItems = [ task4_1, task4_2 ]; 
  resource5.ganttChartItems = [ task5_1, task5_2, task5_3 ];
  resource6.ganttChartItems = [ task6_1, task6_2 ];
  resource7.ganttChartItems = [ task7_1, task7_2, task7_3 ];
  resource8.ganttChartItems = [ task8_1, task8_2 ]; 
  resource9.ganttChartItems = [ task9_1, task9_2, task9_3 ];
  resource10.ganttChartItems = [ task10_1, task10_2 ];
  resource11.ganttChartItems = [ task11_1, task11_2, task11_3 ];
  resource12.ganttChartItems = [ task12_1, task12_2 ]; 
  resource13.ganttChartItems = [ task13_1, task13_2, task13_3 ];
  resource14.ganttChartItems = [ task14_1, task14_2 ];
  resource15.ganttChartItems = [ task15_1, task15_2, task15_3 ];
  resource16.ganttChartItems = [ task16_1, task16_2 ]; 

  task1_2.predecessors = [ { item: task1_1 } ];
  task2_2.predecessors = [ { item: task1_2 }, { item: task2_1 } ];
  task3_2.predecessors = [ { item: task3_1 } ];
  task4_2.predecessors = [ { item: task3_2 }, { item: task4_1 } ];
  task5_2.predecessors = [ { item: task5_1 } ];
  task6_2.predecessors = [ { item: task5_2 }, { item: task6_1 } ];
  task7_2.predecessors = [ { item: task7_1 } ];
  task8_2.predecessors = [ { item: task7_2 }, { item: task8_1 } ];
  task9_2.predecessors = [ { item: task9_1 } ];
  task10_2.predecessors = [ { item: task9_2 }, { item: task10_1 } ];
  task11_2.predecessors = [ { item: task11_1 } ];
  task12_2.predecessors = [ { item: task11_2 }, { item: task12_1 } ];
  task13_2.predecessors = [ { item: task13_1 } ];
  task14_2.predecessors = [ { item: task13_2 }, { item: task14_1 } ];
  task15_2.predecessors = [ { item: task15_1 } ];
  task16_2.predecessors = [ { item: task15_2 }, { item: task16_1 } ];

  for (let resource of resources) {
    for (let task of resource.ganttChartItems) {
      task.label = task.content;
    }
  }

  let settings = { 
    gridWidth: '120px',
    timelineStart: new Date(2023, 1-1, 1),
    timelineFinish: new Date(2023, 2-1, 1),
    currentTime: new Date(2023, 1-1, 1, 12),
    itemHeight: 32,
    hourWidth: 7.5,
    isTaskCompletionReadOnly: true,
    areStandardTaskLabelsVisible: true,
    standardBarStyle: 'fill: #d9d2e980; stroke: #005c9e;',
    standardLabelStyle: 'color: #333; background: #d9d2e9;',
    areTaskPredecessorsReadOnly: true,
    areTaskDependenciesVisible: true,
    areTaskDependencyConstraintsEnabled: true,
    isMouseWheelZoomEnabled: false,
    alternativeItemStyle: 'background-color: #f0f0f080',
    alternativeChartItemStyle: 'fill: #f4f4f480'
  };

  let license = '…';

  function onItemChanged(item, propertyName, isDirect, isFinal) {
    console.log(propertyName + ' changed for ' + item.content + '.');
  }

  window['initializeGanttChartTheme'](settings, 'Generic-bright');

  return (
    <div>
      <h1>Scheduler</h1>
      <div>
        <ScheduleChartView items={resources} settings={settings} license={license}
                           change={onItemChanged}>
          …
        </ScheduleChartView>
      </div>
    </div>
  );
}

export default App;
