import { getBookclubsHandler } from './bookclub/getBookclubsHandler';
import { getclubDetailHandler } from './bookclub/getClubDetailHandler';

export const handlers = [...getBookclubsHandler, ...getclubDetailHandler];
