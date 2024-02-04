import { Guild } from "discord-types/general";
import { Store } from "replugged/dist/renderer/modules/common/flux";

export interface GuildMemberCountStore extends Store {
  getMemberCount: (guildId: string) => number;
  getMemberCounts: () => Record<string, number>;
}

export interface GuildPopoutStore extends Store {
  getGuild: (id: string) =>
    | (Guild & {
        presenceCount: number | null;
        memberCount: number | null;
      })
    | null;
  isFetchingGuild: (id: string) => boolean;
}

export interface SelectedChannelStore extends Store {
  getChannelId: () => string | null;
}

export type GuildTooltip = (args: { disabled: boolean; guild: Guild }) => React.ReactNode;
