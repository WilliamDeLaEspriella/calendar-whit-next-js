import { Calendar } from "../Calendar";

export const CardCalendar = () => (
  <div className="card">
    <Calendar time={new Date()}/>
    <style jsx>
      {`
        .card {
            /* Add shadows to create the "card" effect */
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
            margin: 200px;
            padding-bottom: 50px;
            padding-top: 10px;
            padding-left: 50px;
            padding-right: 50px;
          }
          
          /* On mouse-over, add a deeper shadow */
          .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
          }
          @media screen and (max-width: 1300px) {
            .card {
                /* Add shadows to create the "card" effect */
                width: 750px;
                margin: 100px;
              }
           }
      `}
    </style>
  </div>
);
