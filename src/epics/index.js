import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import { map, mergeMap, retry } from "rxjs/operators";
import { newsSuccess } from "../slice";

export const requestEpic = (action$) =>
  action$.pipe(
    ofType("news/newsRequest"),
    map((o) => o.payload),
    mergeMap((o) => {
      if (o === "") {
        return ajax.getJSON(`http://localhost:7070/api/news`).pipe(
          retry({
            delay: 3000,
          }),
          map((o) => newsSuccess(o))
        );
      } else {
        return ajax
          .getJSON(
            `http://localhost:7070/api/news?${new URLSearchParams({
              lastSeenId: `${o}`,
            })}`
          )
          .pipe(
            retry({
              delay: 3000,
            }),
            map((o) => newsSuccess(o))
          );
      }
    })
  );
