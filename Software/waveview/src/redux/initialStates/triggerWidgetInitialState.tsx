import TriggerType from '../../configuration/enums/triggerType';
import VoltageUnit from '../../configuration/enums/voltageUnit';

const TriggerWidgetInitialState = {
  triggerChannel: 1,
  triggerType: [
    TriggerType.RisingEdge,
    TriggerType.RisingEdge,
    TriggerType.RisingEdge,
    TriggerType.RisingEdge
  ],
  triggerLevel: [
    {
      value: 200.0,
      unit: VoltageUnit.MilliVolt
    },
    {
      value: 200.0,
      unit: VoltageUnit.MilliVolt
    },
    {
      value: 200.0,
      unit: VoltageUnit.MilliVolt
    },
    {
      value: 200.0,
      unit: VoltageUnit.MilliVolt
    }
  ]
};

export default TriggerWidgetInitialState;