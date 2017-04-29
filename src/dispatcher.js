import { Dispatcher } from 'fulux';

const dispatcher = new Dispatcher();

export default dispatcher;
export const dispatch = dispatcher.dispatch.bind(dispatcher);
