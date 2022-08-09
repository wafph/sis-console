import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AicompetenceRoutingModule } from './aicompetence-routing.module';
import { AicompetenceComponent } from './aicompetence.component';
import { ContractextractionComponent } from '../aicompetence/components/contractextraction/contractextraction.component';
import { ContractextractiondetailComponent } from './components/contractextractiondetail/contractextractiondetail.component';
import { ContractextractiondataComponent } from './components/contractextractiondata/contractextractiondata.component';
import { ContractextractionretrievalComponent } from './components/contractextractionretrieval/contractextractionretrieval.component';
import { AiapplyComponent } from './components/aiapply/aiapply.component';
import { ApiserveComponent } from './components/apiserve/apiserve.component';
import { ApisetComponent } from './components/apiset/apiset.component';
import { DiyocrComponent } from './components/diyocr/diyocr.component';
import { ControlabilityComponent } from './components/controlability/controlability.component';
import { AihelpComponent } from './components/aihelp/aihelp.component';
import { AbilitybasicComponent } from './components/abilitybasic/abilitybasic.component';
import { AbilitydetailComponent } from './components/abilitydetail/abilitydetail.component';
import { ContractextractionmodelComponent } from './components/contractextractionmodel/contractextractionmodel.component';
import { ContractextractioneffectComponent } from './components/contractextractioneffect/contractextractioneffect.component';
import { ContractextractionmodeleditComponent } from './components/contractextractionmodeledit/contractextractionmodeledit.component';
import { ContractextractionmodelhomeComponent } from './components/contractextractionmodelhome/contractextractionmodelhome.component';
import { CreateappComponent } from './components/createapp/createapp.component';
import { AppoverviewComponent } from './components/appoverview/appoverview.component';
import { AppdetailComponent } from './components/appdetail/appdetail.component';
import { UpdateappComponent } from './components/updateapp/updateapp.component';
import { ModelconfigComponent } from './components/modelconfig/modelconfig.component';
import { ModelmarkComponent } from './components/modelmark/modelmark.component';
import { DiypdfComponent } from './components/diypdf/diypdf.component';
import { NzProgressModule } from 'ng-zorro-antd/progress';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { FormsModule } from '@angular/forms';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NgxEchartsModule } from 'ngx-echarts';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';

import * as echarts from 'echarts';
import { DiytxtComponent } from './components/diytxt/diytxt.component';
import { HtmlPipe } from '../../innerhtml/innerhtmlpipe';

import { DiyprogressComponent } from './components/diyprogress/diyprogress.component';
import { WorkflowsComponent } from './components/workflows/workflows.component';
import { ExtractappComponent } from './components/extractapp/extractapp.component';
import { CommonmoduleModule } from '../CommonModule/commonmodule.module';
import { TranslateModule } from '@ngx-translate/core';
import { AuthpipeModule } from '../../pipe/authpipe.module';

@NgModule({
  declarations: [
    AicompetenceComponent,
    ContractextractionComponent,
    ContractextractiondetailComponent,
    ContractextractiondataComponent,
    ContractextractionretrievalComponent,
    ContractextractionmodelComponent,
    ContractextractioneffectComponent,
    ContractextractionmodeleditComponent,
    ContractextractionmodelhomeComponent,
    AiapplyComponent,
    ApiserveComponent,
    ApisetComponent,
    DiyocrComponent,
    ControlabilityComponent,
    AihelpComponent,
    AbilitybasicComponent,
    AbilitydetailComponent,
    CreateappComponent,
    AppoverviewComponent,
    AppdetailComponent,
    UpdateappComponent,
    ModelconfigComponent,
    ModelmarkComponent,
    DiypdfComponent,
    DiytxtComponent,
    HtmlPipe,
    DiyprogressComponent,
    WorkflowsComponent,
    ExtractappComponent,
  ],
  imports: [
    NzNotificationModule,
    CommonModule,
    AicompetenceRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzModalModule,
    NzInputModule,
    NzIconModule,
    NzTabsModule,
    NzSelectModule,
    NzSwitchModule,
    NzCheckboxModule,
    FormsModule,
    NzButtonModule,
    NzRadioModule,
    NzPaginationModule,
    NzEmptyModule,
    NzUploadModule,
    NzCollapseModule,
    NzMenuModule,
    NzMessageModule,
    NzDropDownModule,
    NzProgressModule,
    NzBackTopModule,
    NgxEchartsModule.forRoot({ echarts }),
    NzToolTipModule,
    NzSpinModule,
    CommonmoduleModule,
    NzDatePickerModule,
    TranslateModule,
    AuthpipeModule,
  ],
})
export class AicompetenceModule {}
