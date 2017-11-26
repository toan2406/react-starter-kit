import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { switchMap } from 'rxjs/operator/switchMap';
import { debounceTime } from 'rxjs/operator/debounceTime';
import { map } from 'rxjs/operator/map';
import { searchRepos as searchReposApi } from './api';
import {
  enterSearchKeyword as enterSearchKeywordAction,
  searchRepos as searchReposAction
} from './actions';

export function searchReposEpic(action$) {
  const enterSearchKeywordType = enterSearchKeywordAction.toString();
  const searchReposType = searchReposAction.toString();

  return action$
    .ofType(enterSearchKeywordType)
    ::debounceTime(500)
    ::switchMap(action =>
      Observable::fromPromise(searchReposApi(action.payload))
    )
    ::map(result => ({
      type: `${searchReposType}_FULFILLED`,
      payload: result
    }));
}
