// License: LGPL-3.0-or-later
import * as React from 'react';
import {WizardPanel, WizardPanelProps, WizardTabPanelProps} from "../common/wizard/WizardPanel";

import {Form, Field, FieldHooks} from 'mobx-react-form'

import { inject, observer } from 'mobx-react';
import { action, computed } from 'mobx';
import {WizardState, WizardTabPanelState} from "../common/wizard/wizard_state";
import {InjectedIntlProps, injectIntl, InjectedIntl} from 'react-intl';
import {ThreeColumnFields, TwoColumnFields} from "../common/layout";

import {BasicField} from "../common/fields";
import {Validations} from "../../lib/vjf_rules";
import NonprofitInfoForm from "./NonprofitInfoForm";

export interface NonprofitInfoPanelProps extends WizardTabPanelProps
{
    buttonText:string
}

class NonprofitInfoPanel extends React.Component<NonprofitInfoPanelProps & InjectedIntlProps, {}>  {

  @computed
  get wizardTab(): WizardTabPanelState {
    return this.props.tab
  }

  @computed
  get form():Field{
      return this.wizardTab.form
  }
  @computed
  get submit(){
      return this.form.onSubmit
  }


  render() {
      var self = this
      return <WizardPanel
       tab={this.wizardTab} key={this.wizardTab.tabName}
      >
        <NonprofitInfoForm form={this.form} buttonText={this.props.buttonText}/>
      </WizardPanel>
      
  }


}

export default injectIntl(observer(NonprofitInfoPanel))
