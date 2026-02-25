import { Routes } from '@angular/router';
import { Contentprojection } from './learning_components/contentprojection/contentprojection';
import { Databinding } from './learning_components/databinding/databinding';
import { SignalLearning } from './learning_components/signal-learning/signal-learning';
import { FileUpload } from './learning_components/file-upload/file-upload';
import { DependentDropdown } from './learning_components/dependent-dropdown/dependent-dropdown';
import { ChangeDetection } from './learning_components/change-detection/change-detection';
import { ConditionalStatements } from './learning_components/conditional-statements/conditional-statements';

export const routes: Routes = [
    { path: 'content-projection', component: Contentprojection},
    { path: 'data-binding', component: Databinding},
    { path: 'signal-learning', component: SignalLearning},
    { path: 'file-upload', component: FileUpload},
    { path: 'dep-dropdown', component: DependentDropdown},
    { path: 'change-detection', component: ChangeDetection},
    { path: 'conditional-statements', component: ConditionalStatements},
];
