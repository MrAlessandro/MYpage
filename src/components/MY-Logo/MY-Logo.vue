<template>
  <div ref="logo" class="MY:brand-logo" :class="{
    'MY\:brand-logo\:collapse-Y': collapseY,
    'MY\:brand-logo\:collapse-X': collapseX,
  }">
    <div class="MY:brand-logo:left-bracket:shell">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 123" class="MY:brand-logo:left-bracket">
        <title>LeftBracket</title>
        <g class="MY:brand-logo:left-bracket:paths:group">
          <path
              d="M26.06,123a23.15,23.15,0,0,1-5.9-.84l-.19,0a11.08,11.08,0,0,1-4.76-2.88c-.11-.12-.22-.23-.33-.36a13.41,13.41,0,0,1-2.68-5.22,18.58,18.58,0,0,1-.5-2.21,31.92,31.92,0,0,1-.39-3.22q-.12-1.76-.12-3.51,0-8,.58-14.94t.57-14.38a19,19,0,0,0-.5-4.29,1,1,0,0,0,0-.14A8.23,8.23,0,0,0,8,65.7a11.68,11.68,0,0,0-1.8-.91,9.53,9.53,0,0,0-1.24-.42,15.7,15.7,0,0,0-2.36-.45A24.57,24.57,0,0,0,0,63.79V59.21a20.64,20.64,0,0,0,4-.35,11.85,11.85,0,0,0,2.2-.65,12.29,12.29,0,0,0,2.05-1.06A8.42,8.42,0,0,0,10,55.64a8.62,8.62,0,0,0,1.87-3.58,17.21,17.21,0,0,0,.5-4.15q0-7.72-.57-14.66-.24-2.79-.36-5.58-.23-4.68-.22-9.36a41.67,41.67,0,0,1,.39-6,23.74,23.74,0,0,1,.62-2.9L12.32,9a15.71,15.71,0,0,1,1-2.56,11.13,11.13,0,0,1,1.85-2.61,11.57,11.57,0,0,1,1.1-1A11.19,11.19,0,0,1,20.16.86,21.29,21.29,0,0,1,23.92.15C25,.05,26.05,0,27.12,0H32V4.15H27.55A14.57,14.57,0,0,0,22,5.08a6.65,6.65,0,0,0-3.23,2.64,7.37,7.37,0,0,0-.48.87,18.59,18.59,0,0,0-1.57,6.35c-.12,1.31-.18,2.63-.18,3.94,0,1.15,0,2.31,0,3.46q.07,5,.4,9.91.43,6.36.43,14.09v.27c0,4.16-.54,7.41-1.58,9.74a8.22,8.22,0,0,1-2.88,3.51A10.41,10.41,0,0,1,10,61.21v.58a8.61,8.61,0,0,1,5.74,5,25.52,25.52,0,0,1,1.58,9.87q0,7.73-.43,14.09t-.43,13.37q0,7.57,2.23,11.16,1.66,2.67,5.8,3.35a19.1,19.1,0,0,0,3,.22H32V123H27.12Z"/>
        </g>
      </svg>
    </div>
    <div class="MY:brand-logo:content">
      <div class="MY:brand-logo:bar-code:shell">
        <svg ref="barCode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 436 60" class="MY:brand-logo:bar-code"
             preserveAspectRatio="none">
          <title>BarCode</title>
          <g class="MY:brand-logo:bar-code:rectangles:group">
            <rect class="MY:brand-logo:bar-code:rectangle" width="9.15" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="18.29" width="9.15" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="48.78" width="9.15" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="67.08" width="9.15" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="103.66" width="9.15" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="134.15" width="9.15" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="195.13" width="9.15" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="213.43" width="9.15" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="256.11" width="9.15" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="280.5" width="9.15" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="292.7" width="9.15" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="310.99" width="9.15" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="353.68" width="9.15" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="378.07" width="9.15" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="390.27" width="9.15" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="408.56" width="9.15" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="30.49" width="3.05" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="36.59" width="3.05" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="42.69" width="3.05" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="60.98" width="3.05" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="85.37" width="3.05" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="91.47" width="3.05" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="97.57" width="3.05" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="115.86" width="3.05" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="128.06" width="3.05" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="146.35" width="3.05" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="152.45" width="3.05" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="164.64" width="3.05" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="176.84" width="3.05" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="189.03" width="3.05" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="207.33" width="3.05" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="225.62" width="3.05" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="237.82" width="3.05" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="243.92" width="3.05" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="250.01" width="3.05" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="274.41" width="3.05" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="304.9" width="3.05" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="323.19" width="3.05" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="335.38" width="3.05" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="341.48" width="3.05" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="347.58" width="3.05" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="365.87" width="3.05" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="402.46" width="3.05" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="426.85" width="3.05" height="60"/>
            <rect class="MY:brand-logo:bar-code:rectangle" x="432.95" width="3.05" height="60"/>
          </g>
        </svg>
      </div>
      <div class="MY:brand-logo:text:shell">
        <div class="MY:brand-logo:text:web:shell">
          <div class="MY:brand-logo:text:web:W:shell MY:brand-logo:text:letter">
            <svg ref="textWebLetterW" class="MY:brand-logo:text:web:W" xmlns="http://www.w3.org/2000/svg"
                 viewBox="-0.1 -0.1 21.18 23.2">
              <title>TextWeb-W</title>
              <defs>
                <linearGradient id="MY:brand-logo:text:web:W:gradient" x1="0%" y1="0%" x2="100%" y2="0"
                                gradientTransform="translate(-1 0)">
                  <stop offset="0%" :style="{'stop-color': colorPrimary}"/>
                  <stop offset="50%" :style="{'stop-color': colorDark}"/>
                  <stop offset="100%" :style="{'stop-color': colorPrimary}"/>
                  <animateTransform id="MY:brand-logo:text:web:W:gradient" attributeName="gradientTransform"
                                    ref="textAnimationWebW"
                                    type="translate"
                                    from="-1 0"
                                    to="1 0"
                                    begin="indefinite"
                                    :dur="`${textShiningAnimationsDurations.webW}ms`"
                                    repeatCount="1"/>
                </linearGradient>
              </defs>
              <g class="MY:brand-logo:text:web:W:polygons:group">
                <path fill="url(#MY:brand-logo:text:web:W:gradient)"
                      d="M10.47,4.64,6.9,23H3.43L0,0H2.48l2.9,19.43L9.16,0h2.66L15.6,19.43,18.51,0H21L17.55,23H14.08Z"/>
              </g>
            </svg>
          </div>
          <div class="MY:brand-logo:text:web:E:shell MY:brand-logo:text:letter">
            <svg ref="textWebLetterE" class="MY:brand-logo:text:web:E" xmlns="http://www.w3.org/2000/svg"
                 viewBox="-0.1 -0.1 10.64 23.2">
              <title>TextWeb-E</title>
              <defs>
                <linearGradient id="MY:brand-logo:text:web:E:gradient" x1="0%" y1="0%" x2="100%" y2="0"
                                gradientTransform="translate(-1 0)">
                  <stop offset="0%" :style="{'stop-color': colorPrimary}"/>
                  <stop offset="50%" :style="{'stop-color': colorDark}"/>
                  <stop offset="100%" :style="{'stop-color': colorPrimary}"/>
                  <animateTransform attributeName="gradientTransform"
                                    ref="textAnimationWebE"
                                    type="translate"
                                    from="-1 0"
                                    to="1 0"
                                    begin="indefinite"
                                    :dur="`${textShiningAnimationsDurations.webE}ms`"
                                    repeatCount="1"/>
                </linearGradient>
              </defs>
              <g class="MY:brand-logo:text:web:E:polygons:group">
                <path fill="url(#MY:brand-logo:text:web:E:gradient)"
                      d="M10.44,20.88V23H0V0H10.08V2.12H2.48v8.14H8.67v2.12H2.48v8.5Z"/>
              </g>
            </svg>
          </div>
          <div class="MY:brand-logo:text:web:B:shell MY:brand-logo:text:letter">
            <svg ref="textWebLetterB" class="MY:brand-logo:text:web:B" xmlns="http://www.w3.org/2000/svg"
                 viewBox="-0.1 -0.1 11.52 23.2">
              <title>TextWeb-B</title>
              <defs>
                <linearGradient id="MY:brand-logo:text:web:B:gradient" x1="0%" y1="0%" x2="100%" y2="0"
                                gradientTransform="translate(-1 0)">
                  <stop offset="0%" :style="{'stop-color': colorPrimary}"/>
                  <stop offset="50%" :style="{'stop-color': colorDark}"/>
                  <stop offset="100%" :style="{'stop-color': colorPrimary}"/>
                  <animateTransform attributeName="gradientTransform"
                                    ref="textAnimationWebB"
                                    type="translate"
                                    from="-1 0"
                                    to="1 0"
                                    begin="indefinite"
                                    :dur="`${textShiningAnimationsDurations.webB}ms`"
                                    repeatCount="1"/>
                </linearGradient>
              </defs>
              <g class="MY:brand-logo:text:web:B:paths:group">
                <path fill="url(#MY:brand-logo:text:web:B:gradient)"
                      d="M0,23V0H5.34a9.51,9.51,0,0,1,1.6.13A6.1,6.1,0,0,1,8.47.6a4.2,4.2,0,0,1,2.38,3.11A6.51,6.51,0,0,1,11,5V7.08a3.63,3.63,0,0,1-2.51,3.85,4.56,4.56,0,0,1,1.45.67,3.37,3.37,0,0,1,1.31,2.16,5.06,5.06,0,0,1,.1,1.1v3.19a6.24,6.24,0,0,1-.16,1.49,4.26,4.26,0,0,1-1.25,2.17A5.42,5.42,0,0,1,6.79,23c-.36,0-.73.05-1.09.05Zm8.85-4.95V14.86a3,3,0,0,0-.6-1.76c-.08-.1-.16-.21-.25-.31a3,3,0,0,0-2.3-.94H2.48v9H5.7A3.13,3.13,0,0,0,8,20.05a2.73,2.73,0,0,0,.84-2Zm-.36-11V5a2.67,2.67,0,0,0-.82-2V3a2.75,2.75,0,0,0-1.33-.74,4.67,4.67,0,0,0-1-.11H2.48v8H5.34a3.6,3.6,0,0,0,1-.11,2.71,2.71,0,0,0,1.34-.81,3.08,3.08,0,0,0,.63-1A2.87,2.87,0,0,0,8.49,7.08Z"/>
              </g>
            </svg>
          </div>
        </div>
        <div class="MY:brand-logo:text:done:shell">
          <div class="MY:brand-logo:text:done:D:shell MY:brand-logo:text:letter">
            <svg ref="textDoneLetterD" class="MY:brand-logo:text:done:D" xmlns="http://www.w3.org/2000/svg"
                 viewBox="-0.1 -0.1 11.52 23.2">
              <title>TextDone-D</title>
              <defs>
                <linearGradient id="MY:brand-logo:text:done:D:gradient" x1="0%" y1="0%" x2="100%" y2="0"
                                gradientTransform="translate(-1 0)">
                  <stop offset="0%" :style="{'stop-color': colorPrimary}"/>
                  <stop offset="50%" :style="{'stop-color': colorDark}"/>
                  <stop offset="100%" :style="{'stop-color': colorPrimary}"/>
                  <animateTransform attributeName="gradientTransform"
                                    ref="textAnimationDoneD"
                                    type="translate"
                                    from="-1 0"
                                    to="1 0"
                                    begin="indefinite"
                                    :dur="`${textShiningAnimationsDurations.doneD}ms`"
                                    repeatCount="1"/>
                </linearGradient>
              </defs>
              <g class="MY:brand-logo:text:done:D:paths:group">
                <path fill="url(#MY:brand-logo:text:done:D:gradient)"
                      d="M5.7,23H0V0H5.7A9.39,9.39,0,0,1,7.29.13,6.18,6.18,0,0,1,8.83.6a4.19,4.19,0,0,1,1.06.71,4.28,4.28,0,0,1,1.32,2.4A5.78,5.78,0,0,1,11.32,5v13.1a6.24,6.24,0,0,1-.16,1.49,4.26,4.26,0,0,1-1.25,2.17A5.42,5.42,0,0,1,6.79,23C6.43,23,6.06,23,5.7,23Zm3.15-4.95V5A2.75,2.75,0,0,0,8,3L8,3a2.7,2.7,0,0,0-1.33-.74,4.67,4.67,0,0,0-.95-.11H2.48V20.88H5.7A3.13,3.13,0,0,0,8,20.05a2.73,2.73,0,0,0,.84-2Z"/>
              </g>
            </svg>
          </div>
          <div class="MY:brand-logo:text:done:O:shell MY:brand-logo:text:letter">
            <svg ref="textDoneLetterO" class=" MY:brand-logo:text:done:O" xmlns="http://www.w3.org/2000/svg"
                 viewBox="-0.1 -0.1 11.7 23.2">
              <title>TextDone-O</title>
              <defs>
                <linearGradient id="MY:brand-logo:text:done:O:gradient" x1="0%" y1="0%" x2="100%" y2="0"
                                gradientTransform="translate(-1 0)">
                  <stop offset="0%" :style="{'stop-color': colorPrimary}"/>
                  <stop offset="50%" :style="{'stop-color': colorDark}"/>
                  <stop offset="100%" :style="{'stop-color': colorPrimary}"/>
                  <animateTransform attributeName="gradientTransform"
                                    ref="textAnimationDoneO"
                                    type="translate"
                                    from="-1 0"
                                    to="1 0"
                                    begin="indefinite"
                                    :dur="`${textShiningAnimationsDurations.doneO}ms`"
                                    repeatCount="1"/>
                </linearGradient>
              </defs>
              <g class="MY:brand-logo:text:done:O:paths:group">
                <path fill="url(#MY:brand-logo:text:done:O:gradient)"
                      d="M11.5,4.74V18.26a5.79,5.79,0,0,1-.17,1.44,4,4,0,0,1-1.27,2.07,5.54,5.54,0,0,1-3,1.16A10.86,10.86,0,0,1,5.77,23a6.55,6.55,0,0,1-4.32-1.23A4.1,4.1,0,0,1,.09,19.35,6.59,6.59,0,0,1,0,18.26V4.74A5.79,5.79,0,0,1,.17,3.3,4,4,0,0,1,1.44,1.23a5.54,5.54,0,0,1,3-1.16A11,11,0,0,1,5.73,0a6.55,6.55,0,0,1,4.32,1.23,4.1,4.1,0,0,1,1.36,2.42A6.59,6.59,0,0,1,11.5,4.74ZM9.13,18.26V4.74c0-1.63-.91-2.53-2.75-2.68q-.32,0-.63,0a6.32,6.32,0,0,0-1.23.11,2.4,2.4,0,0,0-2.15,2.6V18.26c0,1.63.92,2.53,2.75,2.68q.32,0,.63,0A6.32,6.32,0,0,0,7,20.86,2.4,2.4,0,0,0,9.13,18.26Z"/>
              </g>
            </svg>
          </div>
          <div class="MY:brand-logo:text:done:N:shell MY:brand-logo:text:letter">
            <svg ref="textDoneLetterN" class=" MY:brand-logo:text:done:N" xmlns="http://www.w3.org/2000/svg"
                 viewBox="-0.1 -0.1 12.83 23.2">
              <title>TextDone-N</title>
              <defs>
                <linearGradient id="MY:brand-logo:text:done:N:gradient" x1="0%" y1="0%" x2="100%" y2="0"
                                gradientTransform="translate(-1 0)">
                  <stop offset="0%" :style="{'stop-color': colorPrimary}"/>
                  <stop offset="50%" :style="{'stop-color': colorDark}"/>
                  <stop offset="100%" :style="{'stop-color': colorPrimary}"/>
                  <animateTransform attributeName="gradientTransform"
                                    ref="textAnimationDoneN"
                                    type="translate"
                                    from="-1 0"
                                    to="1 0"
                                    begin="indefinite"
                                    :dur="`${textShiningAnimationsDurations.doneN}ms`"
                                    repeatCount="1"/>
                </linearGradient>
              </defs>
              <g class="MY:brand-logo:text:done:N:polygons:group">
                <path fill="url(#MY:brand-logo:text:done:N:gradient)"
                      d="M2.48,5.31V23H0V0H2.48l7.68,17.69V0h2.47V23H10.16Z"/>
              </g>
            </svg>
          </div>
          <div class="MY:brand-logo:text:done:E:shell MY:brand-logo:text:letter">
            <svg class=" MY:brand-logo:text:done:E" xmlns="http://www.w3.org/2000/svg"
                 viewBox="-0.1 -0.1 10.64 23.2">
              <title>TextDone-E</title>
              <defs>
                <linearGradient id="MY:brand-logo:text:done:E:gradient" x1="0%" y1="0%" x2="100%" y2="0"
                                gradientTransform="translate(-1 0)">
                  <stop offset="0%" :style="{'stop-color': colorPrimary}"/>
                  <stop offset="50%" :style="{'stop-color': colorDark}"/>
                  <stop offset="100%" :style="{'stop-color': colorPrimary}"/>
                  <animateTransform attributeName="gradientTransform"
                                    ref="textAnimationDoneE"
                                    type="translate"
                                    from="-1 0"
                                    to="1 0"
                                    begin="indefinite"
                                    :dur="`${textShiningAnimationsDurations.doneE}ms`"
                                    repeatCount="1"/>
                </linearGradient>
              </defs>
              <g class="MY:brand-logo:text:done:E:polygons:group">
                <path fill="url(#MY:brand-logo:text:done:E:gradient)"
                      d="M10.44,20.88V23H0V0H10.08V2.12H2.48v8.14H8.67v2.12H2.48v8.5Z"/>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="MY:brand-logo:right-bracket:shell">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 123" class="MY:brand-logo:right-bracket">
        <title>RightBracket</title>
        <g class="MY:brand-logo:right-bracket:paths:group">
          <path
              d="M4.88,123H0v-4.15H4.45a19.1,19.1,0,0,0,3-.22q4.14-.67,5.8-3.35,2.23-3.59,2.23-11.16,0-7-.43-13.37t-.43-14.09a25.52,25.52,0,0,1,1.58-9.87,8.61,8.61,0,0,1,5.74-5v-.58a10.41,10.41,0,0,1-2.86-1.35,8.22,8.22,0,0,1-2.88-3.51c-1-2.33-1.56-5.58-1.58-9.74v-.27q0-7.73.43-14.09.33-5,.4-9.91c0-1.15,0-2.31,0-3.46,0-1.31-.06-2.63-.18-3.94a18.59,18.59,0,0,0-1.57-6.35,7.37,7.37,0,0,0-.48-.87A6.65,6.65,0,0,0,10,5.08a14.57,14.57,0,0,0-5.59-.93H0V0H4.88C6,0,7,.05,8.08.15a21.29,21.29,0,0,1,3.76.71A11.19,11.19,0,0,1,15.69,2.8a11.57,11.57,0,0,1,1.1,1A11.13,11.13,0,0,1,18.64,6.4a15.71,15.71,0,0,1,1,2.56l.12.41a23.74,23.74,0,0,1,.62,2.9,41.67,41.67,0,0,1,.39,6q0,4.68-.22,9.36-.12,2.79-.36,5.58-.57,6.95-.57,14.66a17.21,17.21,0,0,0,.5,4.15A8.62,8.62,0,0,0,22,55.64a8.42,8.42,0,0,0,1.75,1.51,12.29,12.29,0,0,0,2,1.06,11.85,11.85,0,0,0,2.2.65,20.64,20.64,0,0,0,4,.35v4.58a24.57,24.57,0,0,0-2.57.13,15.7,15.7,0,0,0-2.36.45,9.53,9.53,0,0,0-1.24.42,11.68,11.68,0,0,0-1.8.91,8.23,8.23,0,0,0-3.83,5.24,1,1,0,0,0,0,.14,19,19,0,0,0-.5,4.29q0,7.44.57,14.38t.58,14.94q0,1.75-.12,3.51a31.92,31.92,0,0,1-.39,3.22,18.58,18.58,0,0,1-.5,2.21,13.41,13.41,0,0,1-2.68,5.22c-.11.13-.22.24-.33.36A11.08,11.08,0,0,1,12,122.09l-.19,0a23.15,23.15,0,0,1-5.9.84Z"/>
        </g>
      </svg>

    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, toRefs} from "vue";
import {usePulse} from "@/components/MY-Logo/composables/usePulse";
import {useShine} from "@/components/MY-Logo/composables/useShineText";

export default defineComponent({
  props: {
    collapseY: {
      type: Boolean,
      required: false,
      default: false
    },
    collapseX: {
      type: Boolean,
      required: false,
      default: false
    },
    barcodePulse: {
      type: Boolean,
      required: false,
      default: false
    },
    textShine: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(props) {
    const {barcodePulse, textShine} = toRefs(props);

    return {
      ...usePulse(barcodePulse),
      ...useShine(textShine)
    }
  }
})
</script>

<style lang="scss" scoped>
@import "../../assets/styles/variables";
@import "../../assets/styles/mixins";

.MY\:brand-logo {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  --animation-duration: 1s;

  .MY\:brand-logo\:left-bracket\:shell,
  .MY\:brand-logo\:right-bracket\:shell, {
    width: 6.400%;
    fill: $MY-color-primary;
  }

  .MY\:brand-logo\:content {
    width: 87.200%;

    .MY\:brand-logo\:bar-code\:shell {
      position: relative;
      width: 100%;
      padding-top: 13.761%;
      fill: $MY-color-primary;
      transition: padding-top $MY-animations-duration-extra-long $MY-animations-style;

      .MY\:brand-logo\:bar-code {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;


        .MY\:brand-logo\:bar-code\:rectangle {
          &.MY\:brand-logo\:bar-code\:pulse {
            transform-origin: center;
            animation-name: pulse;
            animation-duration: var(--animation-duration);
            animation-timing-function: $MY-animations-style;
            animation-direction: alternate;
            animation-iteration-count: infinite;
            animation-fill-mode: forwards;

            @keyframes pulse {
              0% {
                transform: scaleY(1);
              }
              50% {
                transform: scaleY(var(--scale-factor));
              }
              100% {
                transform: scaleY(1);
              }
            }
          }
        }
      }
    }

    .MY\:brand-logo\:text\:shell {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding-top: 1.858%;
      padding-left: 3.717%;
      padding-right: 3.717%;
      transition: padding-top $MY-animations-duration-extra-long $MY-animations-style;

      .MY\:brand-logo\:text\:letter {
        stroke: $MY-color-primary;
        stroke-width: 0;
        fill-opacity: 1;
        transition: width $MY-animations-duration-extra-long $MY-animations-style,
        fill-opacity $MY-animations-duration-extra-long $MY-animations-style,
        stroke-width $MY-animations-duration-extra-long $MY-animations-style;
      }

      .MY\:brand-logo\:text\:web\:shell {
        width: 24.852%;
        display: flex;
        justify-content: space-between;
        transition: width $MY-animations-duration-extra-long $MY-animations-style;

        .MY\:brand-logo\:text\:web\:W\:shell {
          width: 19.365%;
        }

        .MY\:brand-logo\:text\:web\:E\:shell {
          width: 9.633%;
        }

        .MY\:brand-logo\:text\:web\:B\:shell {
          width: 10.449%;
        }
      }

      .MY\:brand-logo\:text\:done\:shell {
        width: 35.571%;
        display: flex;
        justify-content: space-between;
        transition: width $MY-animations-duration-extra-long $MY-animations-style;

        .MY\:brand-logo\:text\:done\:D\:shell {
          width: 7.300%;
        }

        .MY\:brand-logo\:text\:done\:O\:shell {
          width: 7.415%;
        }

        .MY\:brand-logo\:text\:done\:N\:shell {
          width: 8.144%;
        }

        .MY\:brand-logo\:text\:done\:E\:shell {
          width: 6.730%;
        }
      }
    }
  }

  /* COLLAPSED STYLE */
  // TODO: Rivedere Hardware acceleration
  &.MY\:brand-logo\:collapse-Y {
    .MY\:brand-logo\:content {
      .MY\:brand-logo\:bar-code\:shell {
        @include MY\:hardware-accelerate(padding-top);
        padding-top: 0;
      }

      .MY\:brand-logo\:text\:shell {
        @include MY\:hardware-accelerate(padding-top);
        padding-top: 0;

        .MY\:brand-logo\:text\:letter\:expanded {
          stroke-width: 0.2;
          //fill-opacity: 0;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .MY\:brand-logo\:text\:web\:shell {
          @include MY\:hardware-accelerate(padding-top);
          width: 45.493%;

          .MY\:brand-logo\:text\:web\:W\:shell {
            @extend .MY\:brand-logo\:text\:letter\:expanded;
            width: 46.721%;
          }

          .MY\:brand-logo\:text\:web\:E\:shell {
            @extend .MY\:brand-logo\:text\:letter\:expanded;
            width: 23.242%;
          }

          .MY\:brand-logo\:text\:web\:B\:shell {
            @extend .MY\:brand-logo\:text\:letter\:expanded;
            width: 25.212%;
          }
        }

        .MY\:brand-logo\:text\:done\:shell {
          @include MY\:hardware-accelerate(padding-top);
          width: 49.781%;

          .MY\:brand-logo\:text\:done\:D\:shell {
            @extend .MY\:brand-logo\:text\:letter\:expanded;
            width: 23.041%;
          }

          .MY\:brand-logo\:text\:done\:O\:shell {
            @extend .MY\:brand-logo\:text\:letter\:expanded;
            width: 23.401%;
          }

          .MY\:brand-logo\:text\:done\:N\:shell {
            @extend .MY\:brand-logo\:text\:letter\:expanded;
            width: 25.705%;
          }

          .MY\:brand-logo\:text\:done\:E\:shell {
            @extend .MY\:brand-logo\:text\:letter\:expanded;
            width: 21.240%;
          }
        }

      }
    }
  }
}
</style>
