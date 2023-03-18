import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={props.size || 25}
            height={props.size || 25}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M11.049 5.927c.3-.921 1.603-.921 1.902 0l.845 2.6a1 1 0 00.951.692h2.735c.968 0 1.371 1.24.588 1.809l-2.213 1.607a1 1 0 00-.363 1.118l.845 2.601c.3.921-.755 1.688-1.539 1.118l-2.212-1.607a1 1 0 00-1.176 0L9.2 17.472c-.784.57-1.839-.197-1.54-1.118l.846-2.6a1 1 0 00-.363-1.119L5.93 11.028c-.783-.57-.38-1.81.588-1.81h2.735a1 1 0 00.95-.69l.846-2.601z"
                fill={props.fill || "#fff"}

            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.24 5.664c.554-1.704 2.966-1.704 3.52 0l.844 2.601a.15.15 0 00.143.104h2.735c1.792 0 2.537 2.293 1.087 3.347l-2.212 1.607a.15.15 0 00-.055.168l.845 2.6c.554 1.705-1.397 3.122-2.846 2.069l-2.213-1.608a.15.15 0 00-.176 0L9.699 18.16c-1.45 1.053-3.4-.364-2.846-2.069l.845-2.6a.15.15 0 00-.055-.168l-2.212-1.607c-1.45-1.054-.705-3.347 1.087-3.347h2.735a.15.15 0 00.142-.104l.846-2.6zm1.669.447c-.014.01-.035.028-.052.079l-.845 2.6a1.85 1.85 0 01-1.76 1.279H6.519c-.053 0-.077.014-.09.025a.163.163 0 00-.053.079.163.163 0 00-.004.094c.005.016.016.042.059.073l2.212 1.608a1.85 1.85 0 01.672 2.068l-.845 2.6c-.016.051-.01.079-.004.095.008.022.027.05.059.074a.164.164 0 00.088.033c.017 0 .045-.002.088-.034l2.213-1.607a1.85 1.85 0 012.174 0l2.213 1.608c.042.03.07.033.088.033.024-.001.056-.01.088-.034a.164.164 0 00.059-.073c.006-.016.012-.044-.005-.094l-.845-2.601a1.85 1.85 0 01.672-2.068l2.213-1.608c.043-.03.054-.057.059-.073a.163.163 0 00-.005-.095.163.163 0 00-.052-.078c-.013-.01-.037-.025-.09-.025h-2.735a1.85 1.85 0 01-1.76-1.278l-.844-2.601c-.017-.05-.038-.07-.052-.079A.164.164 0 0012 6.086a.163.163 0 00-.091.025z"
                fill={props.fill|| "#000"}
            />
        </Svg>
    )
}

export default SvgComponent
