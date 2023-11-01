import { SVGIconProps, SvgIcon } from "components";

export const CloudDownloadIcon = (props: SVGIconProps) => {
  return (
    <SvgIcon {...props}>
      <path
        d="M18.5,10c-0.2,0-0.4,0-0.6,0.1C17.5,7.2,15,5,12,5C9.8,5,7.8,6.2,6.8,8C6.7,8,6.6,8,6.5,8C3.5,8,1,10.5,1,13.5 S3.5,19,6.5,19h12c2.5,0,4.5-2,4.5-4.5S21,10,18.5,10z"
        opacity=".3"
        fill="currentColor"
      />
      <path d="M12,17l-4-4h3V9h2v4h3L12,17z" fill="currentColor" />
      <path
        d="M18.5,20h-12C2.9,20,0,17.1,0,13.5C0,10,2.8,7.1,6.3,7C7.6,5.1,9.7,4,12,4c3.1,0,5.8,2.1,6.7,5c2.9,0.1,5.3,2.5,5.3,5.5 C24,17.5,21.5,20,18.5,20z M6.5,9C4,9,2,11,2,13.5S4,18,6.5,18h12c1.9,0,3.5-1.6,3.5-3.5S20.4,11,18.5,11c-0.1,0-0.2,0-0.3,0 l-1.1,0.1l-0.2-1C16.5,7.8,14.5,6,12,6c-1.8,0-3.4,1-4.3,2.5L7.4,9L6.5,9z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
