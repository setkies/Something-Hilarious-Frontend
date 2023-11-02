import React from 'react';
import theme from '../../styles/theme';

interface SVGAttributeProps extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
  color?: string;
}

const Logo = ({
  width = 114,
  height = 32,
  color = theme.black,
}: SVGAttributeProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 101 39'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15.0497 6C12.0732 6 9.16348 6.8614 6.68857 8.47526C4.21367 10.0891 2.28467 12.383 1.1456 15.0667C0.00652022 17.7505 -0.291513 20.7036 0.289182 23.5527C0.869882 26.4018 2.30324 29.0188 4.40797 31.0727C6.51271 33.1268 9.19436 34.5257 12.1137 35.0925C15.0331 35.6592 18.0591 35.3683 20.8091 34.2568C23.5591 33.145 25.9093 31.2625 27.5632 28.8472C29.2169 26.4319 30.0995 23.5922 30.0995 20.6873C30.0995 16.792 28.514 13.0562 25.6915 10.3018C22.8691 7.54741 19.0412 6 15.0497 6ZM24.2945 22.8338C24.2945 23.1275 22.9357 23.1695 22.9357 23.4632C22.9357 23.757 24.2796 24.1556 24.2796 24.5607C24.2796 25.0557 21.5103 25.1291 21.5103 25.6244C21.5103 26.1532 23.6108 25.9894 23.6108 26.5623C23.6108 27.2379 18.3349 26.9231 18.3349 27.626C18.3349 27.8945 19.01 28.0058 19.855 28.094C20.3194 28.1443 20.2182 28.3667 19.9539 28.5137C18.4768 29.3931 16.78 29.8585 15.0497 29.8585C13.3195 29.8585 11.6227 29.3931 10.1457 28.5137C9.88337 28.3563 9.78017 28.1339 10.2446 28.094C11.0895 28.0058 11.7668 27.8842 11.7668 27.626C11.7668 26.9231 6.48858 27.2379 6.48858 26.5623C6.48858 25.9894 8.59127 26.1426 8.59127 25.6244C8.59127 25.1291 5.81998 25.0557 5.81998 24.5607C5.81998 24.1556 7.16587 23.7633 7.16587 23.4632C7.16587 23.1632 5.80492 23.1296 5.80492 22.8338C5.80492 22.5379 6.79822 22.347 6.79822 22.1372C6.79822 21.7406 5.64366 22.4624 5.64366 20.6873C5.64366 18.2528 6.6347 15.9179 8.39867 14.1964C10.1627 12.4749 12.5551 11.5077 15.0497 11.5077C17.5444 11.5077 19.9369 12.4749 21.7009 14.1964C23.4649 15.9179 24.4558 18.2528 24.4558 20.6873C24.4558 22.4624 23.3014 21.7364 23.3014 22.1372C23.3014 22.347 24.2945 22.517 24.2945 22.8338Z'
        fill={color}
      />
      <path
        d='M44.368 21.676H34.792V12.044C34.792 10.868 35.1373 9.93467 35.828 9.244C36.5187 8.55333 37.452 8.208 38.628 8.208H50.5L47.112 12.772H39.972V17.308H49.548V27.192C49.548 28.3493 49.2027 29.2733 48.512 29.964C47.84 30.6547 46.9067 31 45.712 31H34.736V26.436H44.368V21.676ZM58.6843 8.208V31H53.4203V8.208H58.6843ZM67.8373 12.772V31H62.7413V12.044C62.7413 10.868 63.0866 9.93467 63.7773 9.244C64.4679 8.55333 65.4013 8.208 66.5773 8.208H79.2333V31H74.1373V12.772H67.8373ZM88.4577 12.772V19.968H93.8337V12.772H88.4577ZM83.2777 31V15.74L85.8537 12.772H81.3737L84.7057 8.208H95.3177C96.4937 8.208 97.3991 8.53467 98.0337 9.188C98.6871 9.82267 99.0137 10.7 99.0137 11.82V20.92C99.0137 22.04 98.6871 22.9267 98.0337 23.58C97.3991 24.2147 96.4937 24.532 95.3177 24.532H88.4577V31H83.2777Z'
        fill={color}
      />
    </svg>
  );
};

export default Logo;
