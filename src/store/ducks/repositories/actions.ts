/* eslint-disable import/extensions */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { action } from 'typesafe-actions'
import { Repository, RepositoriesTypes } from './types'

export const loadRequest = () => action(RepositoriesTypes.LOAD_REQUEST)
export const loadSucess = (data: Repository[]) => action(RepositoriesTypes.LOAD_SUCCESS, data)
export const loadFailed = () => action(RepositoriesTypes.LOAD_FAILED)