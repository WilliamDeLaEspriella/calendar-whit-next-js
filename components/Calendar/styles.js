export const Styles= ({dayWeek}) =>(
    <style jsx>
    {
        `
        .day-of-week,
        .date-grid {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            border: 1px solid #dfdfdf;
            grid-gap: 1px;
            justify-content: center;
            align-content: center;
        }
        .day-of-week {
            height: 40px;
            border: 4px solid #ffff;
            background: #F4F4F4 0% 0% no-repeat padding-box;
            // border: 1px solid #EAF0F4;
            opacity: 1;
        }
        .date-grid div:first-child {
            grid-column: ${dayWeek === 0 ? 7 : dayWeek};
        }
        .box-date {
            display: inline;
            text-align: initial;
            background: rgba(255, 255, 255, .9);
            padding: 10px;
            // border-radius: 10px;
            // border: 1px solid #000;
            // border-top: 1px solid #dfdfdf;
              border: 1px solid #dfdfdf;
            align-content: flex-start;
            line-height: 150px;
            /* text-align: center; */
        }
        .content {
            line-height: 1;
            display: inline-block;
            vertical-align: top;
            text-align: left;
        }
        .content-week {
            display: inline-block;
            // top: 346px;
            // left: 1233px;
            // width: 52px;
            // height: 13px;
            text-align: center;
            border-left: 1px solid black;
            // font: Bold 10px/13px Source Sans Pro;
            // letter-spacing: 0;
            // color: #A3A6B4;
            // opacity: 1;
        }
        @media screen and (max-width: 1300px) {
            .day-of-week,
            .date-grid {
                grid-template-columns: repeat(7, 100px);
            }
           }
        //    @media (min-width: 768px) { 
        //     .box-date { 
        //       border-top: 1px solid #f2f2f2; 
        //       borde izquierdo: 1px sólido #f2f2f2; 
        //       &: nth-child (-n + 2) { 
        //         border-top: none; 
        //       } 
        //       &: nth-child (impar) { 
        //         border-left: none; 
        //       } 
        //     } 
        //   }
        //   @media (min-width: 992px) { 
        //     .box-date { 
        //       border-top: 1px solid #000; 
        //       borde izquierdo: 1px sólido #000; 
        //       &: nth-child (-n + 2) { 
        //         border-top: 1px solid #000; 
        //       } 
        //       &: nth-child (impar) { 
        //         border-left: 1px solid #000; 
        //       } 
        //       &: nth-child (-n + 3) { 
        //         border-top: none; 
        //       } 
        //       &: primer hijo, 
        //       &: nth-child (3n + 1) { 
        //         border-left: none; 
        //       } 
        //     } 
        //   }
        `
    }
    </style>
)