import React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {IconProps} from './types';

export default function AvatarIcon({color, size}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 17 16" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.49941 4C5.49941 3.20435 5.81548 2.44129 6.37809 1.87868C6.9407 1.31607 7.70376 1 8.49941 1C9.29506 1 10.0581 1.31607 10.6207 1.87868C11.1833 2.44129 11.4994 3.20435 11.4994 4C11.4994 4.79565 11.1833 5.55871 10.6207 6.12132C10.0581 6.68393 9.29506 7 8.49941 7C7.70376 7 6.9407 6.68393 6.37809 6.12132C5.81548 5.55871 5.49941 4.79565 5.49941 4ZM3.00008 13.4033C3.02256 11.9596 3.61184 10.5827 4.64072 9.56972C5.6696 8.55674 7.05555 7.98897 8.49941 7.98897C9.94327 7.98897 11.3292 8.55674 12.3581 9.56972C13.387 10.5827 13.9763 11.9596 13.9987 13.4033C14.0005 13.5005 13.9738 13.5961 13.9221 13.6784C13.8704 13.7607 13.7958 13.8261 13.7074 13.8667C12.0735 14.6158 10.2969 15.0024 8.49941 15C6.64208 15 4.87741 14.5947 3.29141 13.8667C3.20307 13.8261 3.12846 13.7607 3.07672 13.6784C3.02498 13.5961 2.99835 13.5005 3.00008 13.4033Z"
        fill={color}
      />
    </Svg>
  );
}