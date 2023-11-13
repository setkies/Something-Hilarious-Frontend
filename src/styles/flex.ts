import { css, SerializedStyles } from '@emotion/react';
import { CSSProperties } from 'react';

type FlexOptions = {
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  direction?: CSSProperties['flexDirection'];
};

function flex(options: FlexOptions): SerializedStyles;
function flex(
  align: CSSProperties['alignItems'],
  justify?: CSSProperties['justifyContent'],
  direction?: CSSProperties['flexDirection'],
): SerializedStyles;

function flex(
  optionsOrAlign: FlexOptions | CSSProperties['alignItems'],
  justify?: CSSProperties['justifyContent'],
  direction?: CSSProperties['flexDirection'],
): SerializedStyles {
  if (typeof optionsOrAlign === 'object') {
    const { align, justify, direction } = optionsOrAlign;
    return css`
      display: flex;
      align-items: ${align};
      justify-content: ${justify};
      flex-direction: ${direction};
    `;
  } else {
    return css`
      display: flex;
      align-items: ${optionsOrAlign};
      justify-content: ${justify};
      flex-direction: ${direction};
    `;
  }
}
