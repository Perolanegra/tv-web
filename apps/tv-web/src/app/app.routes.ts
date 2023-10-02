import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'schedule',
    loadChildren: () =>
      import('modules/schedule/src/lib/schedule.module').then((m) => m.ScheduleModule),
  },
];
