import {usePowellConfig} from "@powell/hooks/usePowellConfig";
import {PowellConfig} from "@powell/models";

interface CommonConfigProps {
  rtl?: PowellConfig["rtl"];
  showRequiredStar?: PowellConfig["showRequiredStar"];
  size?: PowellConfig["inputSize"];
  labelPosition?: PowellConfig["labelPosition"];
}

export const useConfigHandler = (props: CommonConfigProps, isFixLabel?: boolean) => {
  const [config] = usePowellConfig();

  const result = {
    ...props,
    rtl: props.rtl ?? config.rtl,
    showRequiredStar: props.showRequiredStar ?? config.showRequiredStar,
    labelPosition: props.labelPosition ?? config.labelPosition,
    size: props.size ?? config.inputSize,
  }

  if (isFixLabel) {
    result.labelPosition = config.fixLabelPosition;
  }

  return result;
}
