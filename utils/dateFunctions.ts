import { formatDistanceToNow } from "date-fns";
import { enIN} from "date-fns/locale";

export const getFormatDistanceToNow = (date: number) => {
  const fromNow = formatDistanceToNow(date, { locale: enIN });

  return `${fromNow}`;
};
