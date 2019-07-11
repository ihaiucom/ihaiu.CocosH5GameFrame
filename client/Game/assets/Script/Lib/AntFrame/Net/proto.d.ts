import * as $protobuf from "protobufjs";
/** Properties of a C2S. */
export interface IC2S {

    /** C2S key */
    key?: (string|null);

    /** C2S gamerLoginC2S */
    gamerLoginC2S?: (IGamerLoginC2S|null);

    /** C2S gamerLoginGetDataC2S */
    gamerLoginGetDataC2S?: (IGamerLoginGetDataC2S|null);

    /** C2S serverTimeC2S */
    serverTimeC2S?: (IServerTimeC2S|null);

    /** C2S gamerSubChatChannelC2S */
    gamerSubChatChannelC2S?: (IGamerSubChatChannelC2S|null);

    /** C2S gamerChangeNameC2S */
    gamerChangeNameC2S?: (IGamerChangeNameC2S|null);

    /** C2S gamerBuyItemC2S */
    gamerBuyItemC2S?: (IGamerBuyItemC2S|null);

    /** C2S gamerUseItemC2S */
    gamerUseItemC2S?: (IGamerUseItemC2S|null);

    /** C2S gamerSellItemC2S */
    gamerSellItemC2S?: (IGamerSellItemC2S|null);

    /** C2S gamerFriendChatC2S */
    gamerFriendChatC2S?: (IGamerFriendChatC2S|null);

    /** C2S gamerWorldChatC2S */
    gamerWorldChatC2S?: (IGamerWorldChatC2S|null);

    /** C2S gamerTestChatC2S */
    gamerTestChatC2S?: (IGamerTestChatC2S|null);

    /** C2S gamerClubRequestC2S */
    gamerClubRequestC2S?: (IGamerClubRequestC2S|null);

    /** C2S gamerNewFriendReqC2S */
    gamerNewFriendReqC2S?: (IGamerNewFriendReqC2S|null);

    /** C2S gamerDelFriendC2S */
    gamerDelFriendC2S?: (IGamerDelFriendC2S|null);

    /** C2S gamerProcessFriendReqC2S */
    gamerProcessFriendReqC2S?: (IGamerProcessFriendReqC2S|null);

    /** C2S gamerNewHeroC2S */
    gamerNewHeroC2S?: (IGamerNewHeroC2S|null);

    /** C2S gamerUpgradeHeroC2S */
    gamerUpgradeHeroC2S?: (IGamerUpgradeHeroC2S|null);

    /** C2S gamerChoseHeroC2S */
    gamerChoseHeroC2S?: (IGamerChoseHeroC2S|null);

    /** C2S gamerMatchC2S */
    gamerMatchC2S?: (IGamerMatchC2S|null);

    /** C2S gamerCancelMatchC2S */
    gamerCancelMatchC2S?: (IGamerCancelMatchC2S|null);

    /** C2S gamerPVPSyncC2S */
    gamerPVPSyncC2S?: (IGamerPVPSyncC2S|null);

    /** C2S gamerPVPStateSyncC2S */
    gamerPVPStateSyncC2S?: (IGamerPVPStateSyncC2S|null);

    /** C2S gamerGetRealTimeRankC2S */
    gamerGetRealTimeRankC2S?: (IGamerGetRealTimeRankC2S|null);

    /** C2S gamerCheckPVPBattleC2S */
    gamerCheckPVPBattleC2S?: (IGamerCheckPVPBattleC2S|null);

    /** C2S gamerUploadWXInfoC2S */
    gamerUploadWXInfoC2S?: (IGamerUploadWXInfoC2S|null);

    /** C2S gamerNewRoomC2S */
    gamerNewRoomC2S?: (IGamerNewRoomC2S|null);

    /** C2S gamerAddRoomC2S */
    gamerAddRoomC2S?: (IGamerAddRoomC2S|null);

    /** C2S gamerLeaveRoomC2S */
    gamerLeaveRoomC2S?: (IGamerLeaveRoomC2S|null);

    /** C2S gamerGetRewardC2S */
    gamerGetRewardC2S?: (IGamerGetRewardC2S|null);

    /** C2S gamerUseIconC2S */
    gamerUseIconC2S?: (IGamerUseIconC2S|null);
}

/** Represents a C2S. */
export class C2S implements IC2S {

    /**
     * Constructs a new C2S.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2S);

    /** C2S key. */
    public key: string;

    /** C2S gamerLoginC2S. */
    public gamerLoginC2S?: (IGamerLoginC2S|null);

    /** C2S gamerLoginGetDataC2S. */
    public gamerLoginGetDataC2S?: (IGamerLoginGetDataC2S|null);

    /** C2S serverTimeC2S. */
    public serverTimeC2S?: (IServerTimeC2S|null);

    /** C2S gamerSubChatChannelC2S. */
    public gamerSubChatChannelC2S?: (IGamerSubChatChannelC2S|null);

    /** C2S gamerChangeNameC2S. */
    public gamerChangeNameC2S?: (IGamerChangeNameC2S|null);

    /** C2S gamerBuyItemC2S. */
    public gamerBuyItemC2S?: (IGamerBuyItemC2S|null);

    /** C2S gamerUseItemC2S. */
    public gamerUseItemC2S?: (IGamerUseItemC2S|null);

    /** C2S gamerSellItemC2S. */
    public gamerSellItemC2S?: (IGamerSellItemC2S|null);

    /** C2S gamerFriendChatC2S. */
    public gamerFriendChatC2S?: (IGamerFriendChatC2S|null);

    /** C2S gamerWorldChatC2S. */
    public gamerWorldChatC2S?: (IGamerWorldChatC2S|null);

    /** C2S gamerTestChatC2S. */
    public gamerTestChatC2S?: (IGamerTestChatC2S|null);

    /** C2S gamerClubRequestC2S. */
    public gamerClubRequestC2S?: (IGamerClubRequestC2S|null);

    /** C2S gamerNewFriendReqC2S. */
    public gamerNewFriendReqC2S?: (IGamerNewFriendReqC2S|null);

    /** C2S gamerDelFriendC2S. */
    public gamerDelFriendC2S?: (IGamerDelFriendC2S|null);

    /** C2S gamerProcessFriendReqC2S. */
    public gamerProcessFriendReqC2S?: (IGamerProcessFriendReqC2S|null);

    /** C2S gamerNewHeroC2S. */
    public gamerNewHeroC2S?: (IGamerNewHeroC2S|null);

    /** C2S gamerUpgradeHeroC2S. */
    public gamerUpgradeHeroC2S?: (IGamerUpgradeHeroC2S|null);

    /** C2S gamerChoseHeroC2S. */
    public gamerChoseHeroC2S?: (IGamerChoseHeroC2S|null);

    /** C2S gamerMatchC2S. */
    public gamerMatchC2S?: (IGamerMatchC2S|null);

    /** C2S gamerCancelMatchC2S. */
    public gamerCancelMatchC2S?: (IGamerCancelMatchC2S|null);

    /** C2S gamerPVPSyncC2S. */
    public gamerPVPSyncC2S?: (IGamerPVPSyncC2S|null);

    /** C2S gamerPVPStateSyncC2S. */
    public gamerPVPStateSyncC2S?: (IGamerPVPStateSyncC2S|null);

    /** C2S gamerGetRealTimeRankC2S. */
    public gamerGetRealTimeRankC2S?: (IGamerGetRealTimeRankC2S|null);

    /** C2S gamerCheckPVPBattleC2S. */
    public gamerCheckPVPBattleC2S?: (IGamerCheckPVPBattleC2S|null);

    /** C2S gamerUploadWXInfoC2S. */
    public gamerUploadWXInfoC2S?: (IGamerUploadWXInfoC2S|null);

    /** C2S gamerNewRoomC2S. */
    public gamerNewRoomC2S?: (IGamerNewRoomC2S|null);

    /** C2S gamerAddRoomC2S. */
    public gamerAddRoomC2S?: (IGamerAddRoomC2S|null);

    /** C2S gamerLeaveRoomC2S. */
    public gamerLeaveRoomC2S?: (IGamerLeaveRoomC2S|null);

    /** C2S gamerGetRewardC2S. */
    public gamerGetRewardC2S?: (IGamerGetRewardC2S|null);

    /** C2S gamerUseIconC2S. */
    public gamerUseIconC2S?: (IGamerUseIconC2S|null);

    /**
     * Creates a new C2S instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2S instance
     */
    public static create(properties?: IC2S): C2S;

    /**
     * Encodes the specified C2S message. Does not implicitly {@link C2S.verify|verify} messages.
     * @param message C2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2S message, length delimited. Does not implicitly {@link C2S.verify|verify} messages.
     * @param message C2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2S message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2S;

    /**
     * Decodes a C2S message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2S;

    /**
     * Verifies a C2S message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2S message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2S
     */
    public static fromObject(object: { [k: string]: any }): C2S;

    /**
     * Creates a plain object from a C2S message. Also converts values to other types if specified.
     * @param message C2S
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2S to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerLoginC2S. */
export interface IGamerLoginC2S {

    /** GamerLoginC2S id */
    id?: (number|null);

    /** GamerLoginC2S session */
    session?: (string|null);

    /** GamerLoginC2S addr */
    addr?: (string|null);
}

/** Represents a GamerLoginC2S. */
export class GamerLoginC2S implements IGamerLoginC2S {

    /**
     * Constructs a new GamerLoginC2S.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerLoginC2S);

    /** GamerLoginC2S id. */
    public id: number;

    /** GamerLoginC2S session. */
    public session: string;

    /** GamerLoginC2S addr. */
    public addr: string;

    /**
     * Creates a new GamerLoginC2S instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerLoginC2S instance
     */
    public static create(properties?: IGamerLoginC2S): GamerLoginC2S;

    /**
     * Encodes the specified GamerLoginC2S message. Does not implicitly {@link GamerLoginC2S.verify|verify} messages.
     * @param message GamerLoginC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerLoginC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerLoginC2S message, length delimited. Does not implicitly {@link GamerLoginC2S.verify|verify} messages.
     * @param message GamerLoginC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerLoginC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerLoginC2S message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerLoginC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerLoginC2S;

    /**
     * Decodes a GamerLoginC2S message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerLoginC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerLoginC2S;

    /**
     * Verifies a GamerLoginC2S message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerLoginC2S message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerLoginC2S
     */
    public static fromObject(object: { [k: string]: any }): GamerLoginC2S;

    /**
     * Creates a plain object from a GamerLoginC2S message. Also converts values to other types if specified.
     * @param message GamerLoginC2S
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerLoginC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerLoginC2S to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerLoginS2C. */
export interface IGamerLoginS2C {

    /** GamerLoginS2C error */
    error?: (number|null);

    /** GamerLoginS2C main */
    main?: (IGamerMain|null);
}

/** Represents a GamerLoginS2C. */
export class GamerLoginS2C implements IGamerLoginS2C {

    /**
     * Constructs a new GamerLoginS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerLoginS2C);

    /** GamerLoginS2C error. */
    public error: number;

    /** GamerLoginS2C main. */
    public main?: (IGamerMain|null);

    /**
     * Creates a new GamerLoginS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerLoginS2C instance
     */
    public static create(properties?: IGamerLoginS2C): GamerLoginS2C;

    /**
     * Encodes the specified GamerLoginS2C message. Does not implicitly {@link GamerLoginS2C.verify|verify} messages.
     * @param message GamerLoginS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerLoginS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerLoginS2C message, length delimited. Does not implicitly {@link GamerLoginS2C.verify|verify} messages.
     * @param message GamerLoginS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerLoginS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerLoginS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerLoginS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerLoginS2C;

    /**
     * Decodes a GamerLoginS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerLoginS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerLoginS2C;

    /**
     * Verifies a GamerLoginS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerLoginS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerLoginS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerLoginS2C;

    /**
     * Creates a plain object from a GamerLoginS2C message. Also converts values to other types if specified.
     * @param message GamerLoginS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerLoginS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerLoginS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerLoginGetDataC2S. */
export interface IGamerLoginGetDataC2S {

    /** GamerLoginGetDataC2S id */
    id?: (number|null);
}

/** Represents a GamerLoginGetDataC2S. */
export class GamerLoginGetDataC2S implements IGamerLoginGetDataC2S {

    /**
     * Constructs a new GamerLoginGetDataC2S.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerLoginGetDataC2S);

    /** GamerLoginGetDataC2S id. */
    public id: number;

    /**
     * Creates a new GamerLoginGetDataC2S instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerLoginGetDataC2S instance
     */
    public static create(properties?: IGamerLoginGetDataC2S): GamerLoginGetDataC2S;

    /**
     * Encodes the specified GamerLoginGetDataC2S message. Does not implicitly {@link GamerLoginGetDataC2S.verify|verify} messages.
     * @param message GamerLoginGetDataC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerLoginGetDataC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerLoginGetDataC2S message, length delimited. Does not implicitly {@link GamerLoginGetDataC2S.verify|verify} messages.
     * @param message GamerLoginGetDataC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerLoginGetDataC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerLoginGetDataC2S message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerLoginGetDataC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerLoginGetDataC2S;

    /**
     * Decodes a GamerLoginGetDataC2S message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerLoginGetDataC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerLoginGetDataC2S;

    /**
     * Verifies a GamerLoginGetDataC2S message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerLoginGetDataC2S message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerLoginGetDataC2S
     */
    public static fromObject(object: { [k: string]: any }): GamerLoginGetDataC2S;

    /**
     * Creates a plain object from a GamerLoginGetDataC2S message. Also converts values to other types if specified.
     * @param message GamerLoginGetDataC2S
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerLoginGetDataC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerLoginGetDataC2S to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerLoginGetDataS2C. */
export interface IGamerLoginGetDataS2C {

    /** GamerLoginGetDataS2C error */
    error?: (number|null);

    /** GamerLoginGetDataS2C time */
    time?: (IServerTime|null);

    /** GamerLoginGetDataS2C friendReqs */
    friendReqs?: (IGamerFriendRequest[]|null);

    /** GamerLoginGetDataS2C friends */
    friends?: (IGamerFriend[]|null);

    /** GamerLoginGetDataS2C heros */
    heros?: (IGamerHero[]|null);

    /** GamerLoginGetDataS2C items */
    items?: (IBagItem[]|null);

    /** GamerLoginGetDataS2C lengthRank */
    lengthRank?: (number|null);

    /** GamerLoginGetDataS2C length */
    length?: (number|null);
}

/** Represents a GamerLoginGetDataS2C. */
export class GamerLoginGetDataS2C implements IGamerLoginGetDataS2C {

    /**
     * Constructs a new GamerLoginGetDataS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerLoginGetDataS2C);

    /** GamerLoginGetDataS2C error. */
    public error: number;

    /** GamerLoginGetDataS2C time. */
    public time?: (IServerTime|null);

    /** GamerLoginGetDataS2C friendReqs. */
    public friendReqs: IGamerFriendRequest[];

    /** GamerLoginGetDataS2C friends. */
    public friends: IGamerFriend[];

    /** GamerLoginGetDataS2C heros. */
    public heros: IGamerHero[];

    /** GamerLoginGetDataS2C items. */
    public items: IBagItem[];

    /** GamerLoginGetDataS2C lengthRank. */
    public lengthRank: number;

    /** GamerLoginGetDataS2C length. */
    public length: number;

    /**
     * Creates a new GamerLoginGetDataS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerLoginGetDataS2C instance
     */
    public static create(properties?: IGamerLoginGetDataS2C): GamerLoginGetDataS2C;

    /**
     * Encodes the specified GamerLoginGetDataS2C message. Does not implicitly {@link GamerLoginGetDataS2C.verify|verify} messages.
     * @param message GamerLoginGetDataS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerLoginGetDataS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerLoginGetDataS2C message, length delimited. Does not implicitly {@link GamerLoginGetDataS2C.verify|verify} messages.
     * @param message GamerLoginGetDataS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerLoginGetDataS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerLoginGetDataS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerLoginGetDataS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerLoginGetDataS2C;

    /**
     * Decodes a GamerLoginGetDataS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerLoginGetDataS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerLoginGetDataS2C;

    /**
     * Verifies a GamerLoginGetDataS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerLoginGetDataS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerLoginGetDataS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerLoginGetDataS2C;

    /**
     * Creates a plain object from a GamerLoginGetDataS2C message. Also converts values to other types if specified.
     * @param message GamerLoginGetDataS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerLoginGetDataS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerLoginGetDataS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ServerTimeC2S. */
export interface IServerTimeC2S {

    /** ServerTimeC2S id */
    id?: (number|null);
}

/** Represents a ServerTimeC2S. */
export class ServerTimeC2S implements IServerTimeC2S {

    /**
     * Constructs a new ServerTimeC2S.
     * @param [properties] Properties to set
     */
    constructor(properties?: IServerTimeC2S);

    /** ServerTimeC2S id. */
    public id: number;

    /**
     * Creates a new ServerTimeC2S instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ServerTimeC2S instance
     */
    public static create(properties?: IServerTimeC2S): ServerTimeC2S;

    /**
     * Encodes the specified ServerTimeC2S message. Does not implicitly {@link ServerTimeC2S.verify|verify} messages.
     * @param message ServerTimeC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IServerTimeC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ServerTimeC2S message, length delimited. Does not implicitly {@link ServerTimeC2S.verify|verify} messages.
     * @param message ServerTimeC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IServerTimeC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ServerTimeC2S message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ServerTimeC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerTimeC2S;

    /**
     * Decodes a ServerTimeC2S message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ServerTimeC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerTimeC2S;

    /**
     * Verifies a ServerTimeC2S message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ServerTimeC2S message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ServerTimeC2S
     */
    public static fromObject(object: { [k: string]: any }): ServerTimeC2S;

    /**
     * Creates a plain object from a ServerTimeC2S message. Also converts values to other types if specified.
     * @param message ServerTimeC2S
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ServerTimeC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ServerTimeC2S to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ServerTimeS2C. */
export interface IServerTimeS2C {

    /** ServerTimeS2C error */
    error?: (number|null);

    /** ServerTimeS2C time */
    time?: (IServerTime|null);
}

/** Represents a ServerTimeS2C. */
export class ServerTimeS2C implements IServerTimeS2C {

    /**
     * Constructs a new ServerTimeS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IServerTimeS2C);

    /** ServerTimeS2C error. */
    public error: number;

    /** ServerTimeS2C time. */
    public time?: (IServerTime|null);

    /**
     * Creates a new ServerTimeS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ServerTimeS2C instance
     */
    public static create(properties?: IServerTimeS2C): ServerTimeS2C;

    /**
     * Encodes the specified ServerTimeS2C message. Does not implicitly {@link ServerTimeS2C.verify|verify} messages.
     * @param message ServerTimeS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IServerTimeS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ServerTimeS2C message, length delimited. Does not implicitly {@link ServerTimeS2C.verify|verify} messages.
     * @param message ServerTimeS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IServerTimeS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ServerTimeS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ServerTimeS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerTimeS2C;

    /**
     * Decodes a ServerTimeS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ServerTimeS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerTimeS2C;

    /**
     * Verifies a ServerTimeS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ServerTimeS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ServerTimeS2C
     */
    public static fromObject(object: { [k: string]: any }): ServerTimeS2C;

    /**
     * Creates a plain object from a ServerTimeS2C message. Also converts values to other types if specified.
     * @param message ServerTimeS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ServerTimeS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ServerTimeS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerNotifyLoginOtherS2C. */
export interface IGamerNotifyLoginOtherS2C {

    /** GamerNotifyLoginOtherS2C error */
    error?: (number|null);
}

/** Represents a GamerNotifyLoginOtherS2C. */
export class GamerNotifyLoginOtherS2C implements IGamerNotifyLoginOtherS2C {

    /**
     * Constructs a new GamerNotifyLoginOtherS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerNotifyLoginOtherS2C);

    /** GamerNotifyLoginOtherS2C error. */
    public error: number;

    /**
     * Creates a new GamerNotifyLoginOtherS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerNotifyLoginOtherS2C instance
     */
    public static create(properties?: IGamerNotifyLoginOtherS2C): GamerNotifyLoginOtherS2C;

    /**
     * Encodes the specified GamerNotifyLoginOtherS2C message. Does not implicitly {@link GamerNotifyLoginOtherS2C.verify|verify} messages.
     * @param message GamerNotifyLoginOtherS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerNotifyLoginOtherS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerNotifyLoginOtherS2C message, length delimited. Does not implicitly {@link GamerNotifyLoginOtherS2C.verify|verify} messages.
     * @param message GamerNotifyLoginOtherS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerNotifyLoginOtherS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerNotifyLoginOtherS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerNotifyLoginOtherS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyLoginOtherS2C;

    /**
     * Decodes a GamerNotifyLoginOtherS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerNotifyLoginOtherS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyLoginOtherS2C;

    /**
     * Verifies a GamerNotifyLoginOtherS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerNotifyLoginOtherS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerNotifyLoginOtherS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerNotifyLoginOtherS2C;

    /**
     * Creates a plain object from a GamerNotifyLoginOtherS2C message. Also converts values to other types if specified.
     * @param message GamerNotifyLoginOtherS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerNotifyLoginOtherS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerNotifyLoginOtherS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerSubChatChannelC2S. */
export interface IGamerSubChatChannelC2S {

    /** GamerSubChatChannelC2S id */
    id?: (number|null);

    /** GamerSubChatChannelC2S channel */
    channel?: (number|null);

    /** GamerSubChatChannelC2S open */
    open?: (boolean|null);
}

/** Represents a GamerSubChatChannelC2S. */
export class GamerSubChatChannelC2S implements IGamerSubChatChannelC2S {

    /**
     * Constructs a new GamerSubChatChannelC2S.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerSubChatChannelC2S);

    /** GamerSubChatChannelC2S id. */
    public id: number;

    /** GamerSubChatChannelC2S channel. */
    public channel: number;

    /** GamerSubChatChannelC2S open. */
    public open: boolean;

    /**
     * Creates a new GamerSubChatChannelC2S instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerSubChatChannelC2S instance
     */
    public static create(properties?: IGamerSubChatChannelC2S): GamerSubChatChannelC2S;

    /**
     * Encodes the specified GamerSubChatChannelC2S message. Does not implicitly {@link GamerSubChatChannelC2S.verify|verify} messages.
     * @param message GamerSubChatChannelC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerSubChatChannelC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerSubChatChannelC2S message, length delimited. Does not implicitly {@link GamerSubChatChannelC2S.verify|verify} messages.
     * @param message GamerSubChatChannelC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerSubChatChannelC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerSubChatChannelC2S message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerSubChatChannelC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerSubChatChannelC2S;

    /**
     * Decodes a GamerSubChatChannelC2S message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerSubChatChannelC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerSubChatChannelC2S;

    /**
     * Verifies a GamerSubChatChannelC2S message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerSubChatChannelC2S message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerSubChatChannelC2S
     */
    public static fromObject(object: { [k: string]: any }): GamerSubChatChannelC2S;

    /**
     * Creates a plain object from a GamerSubChatChannelC2S message. Also converts values to other types if specified.
     * @param message GamerSubChatChannelC2S
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerSubChatChannelC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerSubChatChannelC2S to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerSubChatChannelS2C. */
export interface IGamerSubChatChannelS2C {

    /** GamerSubChatChannelS2C error */
    error?: (number|null);
}

/** Represents a GamerSubChatChannelS2C. */
export class GamerSubChatChannelS2C implements IGamerSubChatChannelS2C {

    /**
     * Constructs a new GamerSubChatChannelS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerSubChatChannelS2C);

    /** GamerSubChatChannelS2C error. */
    public error: number;

    /**
     * Creates a new GamerSubChatChannelS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerSubChatChannelS2C instance
     */
    public static create(properties?: IGamerSubChatChannelS2C): GamerSubChatChannelS2C;

    /**
     * Encodes the specified GamerSubChatChannelS2C message. Does not implicitly {@link GamerSubChatChannelS2C.verify|verify} messages.
     * @param message GamerSubChatChannelS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerSubChatChannelS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerSubChatChannelS2C message, length delimited. Does not implicitly {@link GamerSubChatChannelS2C.verify|verify} messages.
     * @param message GamerSubChatChannelS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerSubChatChannelS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerSubChatChannelS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerSubChatChannelS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerSubChatChannelS2C;

    /**
     * Decodes a GamerSubChatChannelS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerSubChatChannelS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerSubChatChannelS2C;

    /**
     * Verifies a GamerSubChatChannelS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerSubChatChannelS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerSubChatChannelS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerSubChatChannelS2C;

    /**
     * Creates a plain object from a GamerSubChatChannelS2C message. Also converts values to other types if specified.
     * @param message GamerSubChatChannelS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerSubChatChannelS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerSubChatChannelS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerChangeNameC2S. */
export interface IGamerChangeNameC2S {

    /** GamerChangeNameC2S id */
    id?: (number|null);

    /** GamerChangeNameC2S newName */
    newName?: (string|null);
}

/** Represents a GamerChangeNameC2S. */
export class GamerChangeNameC2S implements IGamerChangeNameC2S {

    /**
     * Constructs a new GamerChangeNameC2S.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerChangeNameC2S);

    /** GamerChangeNameC2S id. */
    public id: number;

    /** GamerChangeNameC2S newName. */
    public newName: string;

    /**
     * Creates a new GamerChangeNameC2S instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerChangeNameC2S instance
     */
    public static create(properties?: IGamerChangeNameC2S): GamerChangeNameC2S;

    /**
     * Encodes the specified GamerChangeNameC2S message. Does not implicitly {@link GamerChangeNameC2S.verify|verify} messages.
     * @param message GamerChangeNameC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerChangeNameC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerChangeNameC2S message, length delimited. Does not implicitly {@link GamerChangeNameC2S.verify|verify} messages.
     * @param message GamerChangeNameC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerChangeNameC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerChangeNameC2S message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerChangeNameC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerChangeNameC2S;

    /**
     * Decodes a GamerChangeNameC2S message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerChangeNameC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerChangeNameC2S;

    /**
     * Verifies a GamerChangeNameC2S message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerChangeNameC2S message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerChangeNameC2S
     */
    public static fromObject(object: { [k: string]: any }): GamerChangeNameC2S;

    /**
     * Creates a plain object from a GamerChangeNameC2S message. Also converts values to other types if specified.
     * @param message GamerChangeNameC2S
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerChangeNameC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerChangeNameC2S to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerChangeNameS2C. */
export interface IGamerChangeNameS2C {

    /** GamerChangeNameS2C error */
    error?: (number|null);
}

/** Represents a GamerChangeNameS2C. */
export class GamerChangeNameS2C implements IGamerChangeNameS2C {

    /**
     * Constructs a new GamerChangeNameS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerChangeNameS2C);

    /** GamerChangeNameS2C error. */
    public error: number;

    /**
     * Creates a new GamerChangeNameS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerChangeNameS2C instance
     */
    public static create(properties?: IGamerChangeNameS2C): GamerChangeNameS2C;

    /**
     * Encodes the specified GamerChangeNameS2C message. Does not implicitly {@link GamerChangeNameS2C.verify|verify} messages.
     * @param message GamerChangeNameS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerChangeNameS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerChangeNameS2C message, length delimited. Does not implicitly {@link GamerChangeNameS2C.verify|verify} messages.
     * @param message GamerChangeNameS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerChangeNameS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerChangeNameS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerChangeNameS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerChangeNameS2C;

    /**
     * Decodes a GamerChangeNameS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerChangeNameS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerChangeNameS2C;

    /**
     * Verifies a GamerChangeNameS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerChangeNameS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerChangeNameS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerChangeNameS2C;

    /**
     * Creates a plain object from a GamerChangeNameS2C message. Also converts values to other types if specified.
     * @param message GamerChangeNameS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerChangeNameS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerChangeNameS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerBuyItemC2S. */
export interface IGamerBuyItemC2S {

    /** GamerBuyItemC2S id */
    id?: (number|null);

    /** GamerBuyItemC2S item */
    item?: (number|null);

    /** GamerBuyItemC2S count */
    count?: (number|null);
}

/** Represents a GamerBuyItemC2S. */
export class GamerBuyItemC2S implements IGamerBuyItemC2S {

    /**
     * Constructs a new GamerBuyItemC2S.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerBuyItemC2S);

    /** GamerBuyItemC2S id. */
    public id: number;

    /** GamerBuyItemC2S item. */
    public item: number;

    /** GamerBuyItemC2S count. */
    public count: number;

    /**
     * Creates a new GamerBuyItemC2S instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerBuyItemC2S instance
     */
    public static create(properties?: IGamerBuyItemC2S): GamerBuyItemC2S;

    /**
     * Encodes the specified GamerBuyItemC2S message. Does not implicitly {@link GamerBuyItemC2S.verify|verify} messages.
     * @param message GamerBuyItemC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerBuyItemC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerBuyItemC2S message, length delimited. Does not implicitly {@link GamerBuyItemC2S.verify|verify} messages.
     * @param message GamerBuyItemC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerBuyItemC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerBuyItemC2S message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerBuyItemC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerBuyItemC2S;

    /**
     * Decodes a GamerBuyItemC2S message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerBuyItemC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerBuyItemC2S;

    /**
     * Verifies a GamerBuyItemC2S message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerBuyItemC2S message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerBuyItemC2S
     */
    public static fromObject(object: { [k: string]: any }): GamerBuyItemC2S;

    /**
     * Creates a plain object from a GamerBuyItemC2S message. Also converts values to other types if specified.
     * @param message GamerBuyItemC2S
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerBuyItemC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerBuyItemC2S to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerBuyItemS2C. */
export interface IGamerBuyItemS2C {

    /** GamerBuyItemS2C error */
    error?: (number|null);
}

/** Represents a GamerBuyItemS2C. */
export class GamerBuyItemS2C implements IGamerBuyItemS2C {

    /**
     * Constructs a new GamerBuyItemS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerBuyItemS2C);

    /** GamerBuyItemS2C error. */
    public error: number;

    /**
     * Creates a new GamerBuyItemS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerBuyItemS2C instance
     */
    public static create(properties?: IGamerBuyItemS2C): GamerBuyItemS2C;

    /**
     * Encodes the specified GamerBuyItemS2C message. Does not implicitly {@link GamerBuyItemS2C.verify|verify} messages.
     * @param message GamerBuyItemS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerBuyItemS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerBuyItemS2C message, length delimited. Does not implicitly {@link GamerBuyItemS2C.verify|verify} messages.
     * @param message GamerBuyItemS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerBuyItemS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerBuyItemS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerBuyItemS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerBuyItemS2C;

    /**
     * Decodes a GamerBuyItemS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerBuyItemS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerBuyItemS2C;

    /**
     * Verifies a GamerBuyItemS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerBuyItemS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerBuyItemS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerBuyItemS2C;

    /**
     * Creates a plain object from a GamerBuyItemS2C message. Also converts values to other types if specified.
     * @param message GamerBuyItemS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerBuyItemS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerBuyItemS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerUseItemC2S. */
export interface IGamerUseItemC2S {

    /** GamerUseItemC2S id */
    id?: (number|null);

    /** GamerUseItemC2S item */
    item?: (number|null);

    /** GamerUseItemC2S count */
    count?: (number|null);
}

/** Represents a GamerUseItemC2S. */
export class GamerUseItemC2S implements IGamerUseItemC2S {

    /**
     * Constructs a new GamerUseItemC2S.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerUseItemC2S);

    /** GamerUseItemC2S id. */
    public id: number;

    /** GamerUseItemC2S item. */
    public item: number;

    /** GamerUseItemC2S count. */
    public count: number;

    /**
     * Creates a new GamerUseItemC2S instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerUseItemC2S instance
     */
    public static create(properties?: IGamerUseItemC2S): GamerUseItemC2S;

    /**
     * Encodes the specified GamerUseItemC2S message. Does not implicitly {@link GamerUseItemC2S.verify|verify} messages.
     * @param message GamerUseItemC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerUseItemC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerUseItemC2S message, length delimited. Does not implicitly {@link GamerUseItemC2S.verify|verify} messages.
     * @param message GamerUseItemC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerUseItemC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerUseItemC2S message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerUseItemC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerUseItemC2S;

    /**
     * Decodes a GamerUseItemC2S message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerUseItemC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerUseItemC2S;

    /**
     * Verifies a GamerUseItemC2S message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerUseItemC2S message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerUseItemC2S
     */
    public static fromObject(object: { [k: string]: any }): GamerUseItemC2S;

    /**
     * Creates a plain object from a GamerUseItemC2S message. Also converts values to other types if specified.
     * @param message GamerUseItemC2S
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerUseItemC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerUseItemC2S to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerUseItemS2C. */
export interface IGamerUseItemS2C {

    /** GamerUseItemS2C error */
    error?: (number|null);
}

/** Represents a GamerUseItemS2C. */
export class GamerUseItemS2C implements IGamerUseItemS2C {

    /**
     * Constructs a new GamerUseItemS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerUseItemS2C);

    /** GamerUseItemS2C error. */
    public error: number;

    /**
     * Creates a new GamerUseItemS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerUseItemS2C instance
     */
    public static create(properties?: IGamerUseItemS2C): GamerUseItemS2C;

    /**
     * Encodes the specified GamerUseItemS2C message. Does not implicitly {@link GamerUseItemS2C.verify|verify} messages.
     * @param message GamerUseItemS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerUseItemS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerUseItemS2C message, length delimited. Does not implicitly {@link GamerUseItemS2C.verify|verify} messages.
     * @param message GamerUseItemS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerUseItemS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerUseItemS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerUseItemS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerUseItemS2C;

    /**
     * Decodes a GamerUseItemS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerUseItemS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerUseItemS2C;

    /**
     * Verifies a GamerUseItemS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerUseItemS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerUseItemS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerUseItemS2C;

    /**
     * Creates a plain object from a GamerUseItemS2C message. Also converts values to other types if specified.
     * @param message GamerUseItemS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerUseItemS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerUseItemS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerSellItemC2S. */
export interface IGamerSellItemC2S {

    /** GamerSellItemC2S id */
    id?: (number|null);

    /** GamerSellItemC2S item */
    item?: (number|null);

    /** GamerSellItemC2S count */
    count?: (number|null);
}

/** Represents a GamerSellItemC2S. */
export class GamerSellItemC2S implements IGamerSellItemC2S {

    /**
     * Constructs a new GamerSellItemC2S.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerSellItemC2S);

    /** GamerSellItemC2S id. */
    public id: number;

    /** GamerSellItemC2S item. */
    public item: number;

    /** GamerSellItemC2S count. */
    public count: number;

    /**
     * Creates a new GamerSellItemC2S instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerSellItemC2S instance
     */
    public static create(properties?: IGamerSellItemC2S): GamerSellItemC2S;

    /**
     * Encodes the specified GamerSellItemC2S message. Does not implicitly {@link GamerSellItemC2S.verify|verify} messages.
     * @param message GamerSellItemC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerSellItemC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerSellItemC2S message, length delimited. Does not implicitly {@link GamerSellItemC2S.verify|verify} messages.
     * @param message GamerSellItemC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerSellItemC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerSellItemC2S message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerSellItemC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerSellItemC2S;

    /**
     * Decodes a GamerSellItemC2S message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerSellItemC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerSellItemC2S;

    /**
     * Verifies a GamerSellItemC2S message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerSellItemC2S message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerSellItemC2S
     */
    public static fromObject(object: { [k: string]: any }): GamerSellItemC2S;

    /**
     * Creates a plain object from a GamerSellItemC2S message. Also converts values to other types if specified.
     * @param message GamerSellItemC2S
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerSellItemC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerSellItemC2S to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerSellItemS2C. */
export interface IGamerSellItemS2C {

    /** GamerSellItemS2C error */
    error?: (number|null);
}

/** Represents a GamerSellItemS2C. */
export class GamerSellItemS2C implements IGamerSellItemS2C {

    /**
     * Constructs a new GamerSellItemS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerSellItemS2C);

    /** GamerSellItemS2C error. */
    public error: number;

    /**
     * Creates a new GamerSellItemS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerSellItemS2C instance
     */
    public static create(properties?: IGamerSellItemS2C): GamerSellItemS2C;

    /**
     * Encodes the specified GamerSellItemS2C message. Does not implicitly {@link GamerSellItemS2C.verify|verify} messages.
     * @param message GamerSellItemS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerSellItemS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerSellItemS2C message, length delimited. Does not implicitly {@link GamerSellItemS2C.verify|verify} messages.
     * @param message GamerSellItemS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerSellItemS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerSellItemS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerSellItemS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerSellItemS2C;

    /**
     * Decodes a GamerSellItemS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerSellItemS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerSellItemS2C;

    /**
     * Verifies a GamerSellItemS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerSellItemS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerSellItemS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerSellItemS2C;

    /**
     * Creates a plain object from a GamerSellItemS2C message. Also converts values to other types if specified.
     * @param message GamerSellItemS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerSellItemS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerSellItemS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerFriendChatC2S. */
export interface IGamerFriendChatC2S {

    /** GamerFriendChatC2S id */
    id?: (number|null);

    /** GamerFriendChatC2S toId */
    toId?: (number|null);

    /** GamerFriendChatC2S msg */
    msg?: (string|null);
}

/** Represents a GamerFriendChatC2S. */
export class GamerFriendChatC2S implements IGamerFriendChatC2S {

    /**
     * Constructs a new GamerFriendChatC2S.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerFriendChatC2S);

    /** GamerFriendChatC2S id. */
    public id: number;

    /** GamerFriendChatC2S toId. */
    public toId: number;

    /** GamerFriendChatC2S msg. */
    public msg: string;

    /**
     * Creates a new GamerFriendChatC2S instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerFriendChatC2S instance
     */
    public static create(properties?: IGamerFriendChatC2S): GamerFriendChatC2S;

    /**
     * Encodes the specified GamerFriendChatC2S message. Does not implicitly {@link GamerFriendChatC2S.verify|verify} messages.
     * @param message GamerFriendChatC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerFriendChatC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerFriendChatC2S message, length delimited. Does not implicitly {@link GamerFriendChatC2S.verify|verify} messages.
     * @param message GamerFriendChatC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerFriendChatC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerFriendChatC2S message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerFriendChatC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerFriendChatC2S;

    /**
     * Decodes a GamerFriendChatC2S message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerFriendChatC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerFriendChatC2S;

    /**
     * Verifies a GamerFriendChatC2S message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerFriendChatC2S message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerFriendChatC2S
     */
    public static fromObject(object: { [k: string]: any }): GamerFriendChatC2S;

    /**
     * Creates a plain object from a GamerFriendChatC2S message. Also converts values to other types if specified.
     * @param message GamerFriendChatC2S
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerFriendChatC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerFriendChatC2S to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerFriendChatS2C. */
export interface IGamerFriendChatS2C {

    /** GamerFriendChatS2C error */
    error?: (number|null);
}

/** Represents a GamerFriendChatS2C. */
export class GamerFriendChatS2C implements IGamerFriendChatS2C {

    /**
     * Constructs a new GamerFriendChatS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerFriendChatS2C);

    /** GamerFriendChatS2C error. */
    public error: number;

    /**
     * Creates a new GamerFriendChatS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerFriendChatS2C instance
     */
    public static create(properties?: IGamerFriendChatS2C): GamerFriendChatS2C;

    /**
     * Encodes the specified GamerFriendChatS2C message. Does not implicitly {@link GamerFriendChatS2C.verify|verify} messages.
     * @param message GamerFriendChatS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerFriendChatS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerFriendChatS2C message, length delimited. Does not implicitly {@link GamerFriendChatS2C.verify|verify} messages.
     * @param message GamerFriendChatS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerFriendChatS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerFriendChatS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerFriendChatS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerFriendChatS2C;

    /**
     * Decodes a GamerFriendChatS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerFriendChatS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerFriendChatS2C;

    /**
     * Verifies a GamerFriendChatS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerFriendChatS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerFriendChatS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerFriendChatS2C;

    /**
     * Creates a plain object from a GamerFriendChatS2C message. Also converts values to other types if specified.
     * @param message GamerFriendChatS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerFriendChatS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerFriendChatS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerWorldChatC2S. */
export interface IGamerWorldChatC2S {

    /** GamerWorldChatC2S id */
    id?: (number|null);

    /** GamerWorldChatC2S server */
    server?: (number|null);

    /** GamerWorldChatC2S msg */
    msg?: (string|null);
}

/** Represents a GamerWorldChatC2S. */
export class GamerWorldChatC2S implements IGamerWorldChatC2S {

    /**
     * Constructs a new GamerWorldChatC2S.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerWorldChatC2S);

    /** GamerWorldChatC2S id. */
    public id: number;

    /** GamerWorldChatC2S server. */
    public server: number;

    /** GamerWorldChatC2S msg. */
    public msg: string;

    /**
     * Creates a new GamerWorldChatC2S instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerWorldChatC2S instance
     */
    public static create(properties?: IGamerWorldChatC2S): GamerWorldChatC2S;

    /**
     * Encodes the specified GamerWorldChatC2S message. Does not implicitly {@link GamerWorldChatC2S.verify|verify} messages.
     * @param message GamerWorldChatC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerWorldChatC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerWorldChatC2S message, length delimited. Does not implicitly {@link GamerWorldChatC2S.verify|verify} messages.
     * @param message GamerWorldChatC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerWorldChatC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerWorldChatC2S message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerWorldChatC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerWorldChatC2S;

    /**
     * Decodes a GamerWorldChatC2S message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerWorldChatC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerWorldChatC2S;

    /**
     * Verifies a GamerWorldChatC2S message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerWorldChatC2S message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerWorldChatC2S
     */
    public static fromObject(object: { [k: string]: any }): GamerWorldChatC2S;

    /**
     * Creates a plain object from a GamerWorldChatC2S message. Also converts values to other types if specified.
     * @param message GamerWorldChatC2S
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerWorldChatC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerWorldChatC2S to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerWorldChatS2C. */
export interface IGamerWorldChatS2C {

    /** GamerWorldChatS2C error */
    error?: (number|null);
}

/** Represents a GamerWorldChatS2C. */
export class GamerWorldChatS2C implements IGamerWorldChatS2C {

    /**
     * Constructs a new GamerWorldChatS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerWorldChatS2C);

    /** GamerWorldChatS2C error. */
    public error: number;

    /**
     * Creates a new GamerWorldChatS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerWorldChatS2C instance
     */
    public static create(properties?: IGamerWorldChatS2C): GamerWorldChatS2C;

    /**
     * Encodes the specified GamerWorldChatS2C message. Does not implicitly {@link GamerWorldChatS2C.verify|verify} messages.
     * @param message GamerWorldChatS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerWorldChatS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerWorldChatS2C message, length delimited. Does not implicitly {@link GamerWorldChatS2C.verify|verify} messages.
     * @param message GamerWorldChatS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerWorldChatS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerWorldChatS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerWorldChatS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerWorldChatS2C;

    /**
     * Decodes a GamerWorldChatS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerWorldChatS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerWorldChatS2C;

    /**
     * Verifies a GamerWorldChatS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerWorldChatS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerWorldChatS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerWorldChatS2C;

    /**
     * Creates a plain object from a GamerWorldChatS2C message. Also converts values to other types if specified.
     * @param message GamerWorldChatS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerWorldChatS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerWorldChatS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerTestChatC2S. */
export interface IGamerTestChatC2S {

    /** GamerTestChatC2S id */
    id?: (number|null);

    /** GamerTestChatC2S toId */
    toId?: (number|null);

    /** GamerTestChatC2S msg */
    msg?: (string|null);
}

/** Represents a GamerTestChatC2S. */
export class GamerTestChatC2S implements IGamerTestChatC2S {

    /**
     * Constructs a new GamerTestChatC2S.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerTestChatC2S);

    /** GamerTestChatC2S id. */
    public id: number;

    /** GamerTestChatC2S toId. */
    public toId: number;

    /** GamerTestChatC2S msg. */
    public msg: string;

    /**
     * Creates a new GamerTestChatC2S instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerTestChatC2S instance
     */
    public static create(properties?: IGamerTestChatC2S): GamerTestChatC2S;

    /**
     * Encodes the specified GamerTestChatC2S message. Does not implicitly {@link GamerTestChatC2S.verify|verify} messages.
     * @param message GamerTestChatC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerTestChatC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerTestChatC2S message, length delimited. Does not implicitly {@link GamerTestChatC2S.verify|verify} messages.
     * @param message GamerTestChatC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerTestChatC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerTestChatC2S message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerTestChatC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerTestChatC2S;

    /**
     * Decodes a GamerTestChatC2S message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerTestChatC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerTestChatC2S;

    /**
     * Verifies a GamerTestChatC2S message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerTestChatC2S message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerTestChatC2S
     */
    public static fromObject(object: { [k: string]: any }): GamerTestChatC2S;

    /**
     * Creates a plain object from a GamerTestChatC2S message. Also converts values to other types if specified.
     * @param message GamerTestChatC2S
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerTestChatC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerTestChatC2S to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerTestChatS2C. */
export interface IGamerTestChatS2C {

    /** GamerTestChatS2C error */
    error?: (number|null);

    /** GamerTestChatS2C id */
    id?: (number|null);
}

/** Represents a GamerTestChatS2C. */
export class GamerTestChatS2C implements IGamerTestChatS2C {

    /**
     * Constructs a new GamerTestChatS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerTestChatS2C);

    /** GamerTestChatS2C error. */
    public error: number;

    /** GamerTestChatS2C id. */
    public id: number;

    /**
     * Creates a new GamerTestChatS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerTestChatS2C instance
     */
    public static create(properties?: IGamerTestChatS2C): GamerTestChatS2C;

    /**
     * Encodes the specified GamerTestChatS2C message. Does not implicitly {@link GamerTestChatS2C.verify|verify} messages.
     * @param message GamerTestChatS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerTestChatS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerTestChatS2C message, length delimited. Does not implicitly {@link GamerTestChatS2C.verify|verify} messages.
     * @param message GamerTestChatS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerTestChatS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerTestChatS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerTestChatS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerTestChatS2C;

    /**
     * Decodes a GamerTestChatS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerTestChatS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerTestChatS2C;

    /**
     * Verifies a GamerTestChatS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerTestChatS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerTestChatS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerTestChatS2C;

    /**
     * Creates a plain object from a GamerTestChatS2C message. Also converts values to other types if specified.
     * @param message GamerTestChatS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerTestChatS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerTestChatS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerClubRequestC2S. */
export interface IGamerClubRequestC2S {

    /** GamerClubRequestC2S id */
    id?: (number|null);

    /** GamerClubRequestC2S clubId */
    clubId?: (number|null);

    /** GamerClubRequestC2S msg */
    msg?: (string|null);
}

/** Represents a GamerClubRequestC2S. */
export class GamerClubRequestC2S implements IGamerClubRequestC2S {

    /**
     * Constructs a new GamerClubRequestC2S.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerClubRequestC2S);

    /** GamerClubRequestC2S id. */
    public id: number;

    /** GamerClubRequestC2S clubId. */
    public clubId: number;

    /** GamerClubRequestC2S msg. */
    public msg: string;

    /**
     * Creates a new GamerClubRequestC2S instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerClubRequestC2S instance
     */
    public static create(properties?: IGamerClubRequestC2S): GamerClubRequestC2S;

    /**
     * Encodes the specified GamerClubRequestC2S message. Does not implicitly {@link GamerClubRequestC2S.verify|verify} messages.
     * @param message GamerClubRequestC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerClubRequestC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerClubRequestC2S message, length delimited. Does not implicitly {@link GamerClubRequestC2S.verify|verify} messages.
     * @param message GamerClubRequestC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerClubRequestC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerClubRequestC2S message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerClubRequestC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerClubRequestC2S;

    /**
     * Decodes a GamerClubRequestC2S message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerClubRequestC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerClubRequestC2S;

    /**
     * Verifies a GamerClubRequestC2S message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerClubRequestC2S message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerClubRequestC2S
     */
    public static fromObject(object: { [k: string]: any }): GamerClubRequestC2S;

    /**
     * Creates a plain object from a GamerClubRequestC2S message. Also converts values to other types if specified.
     * @param message GamerClubRequestC2S
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerClubRequestC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerClubRequestC2S to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerClubRequestS2C. */
export interface IGamerClubRequestS2C {

    /** GamerClubRequestS2C error */
    error?: (number|null);

    /** GamerClubRequestS2C id */
    id?: (number|null);

    /** GamerClubRequestS2C ok */
    ok?: (boolean|null);
}

/** Represents a GamerClubRequestS2C. */
export class GamerClubRequestS2C implements IGamerClubRequestS2C {

    /**
     * Constructs a new GamerClubRequestS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerClubRequestS2C);

    /** GamerClubRequestS2C error. */
    public error: number;

    /** GamerClubRequestS2C id. */
    public id: number;

    /** GamerClubRequestS2C ok. */
    public ok: boolean;

    /**
     * Creates a new GamerClubRequestS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerClubRequestS2C instance
     */
    public static create(properties?: IGamerClubRequestS2C): GamerClubRequestS2C;

    /**
     * Encodes the specified GamerClubRequestS2C message. Does not implicitly {@link GamerClubRequestS2C.verify|verify} messages.
     * @param message GamerClubRequestS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerClubRequestS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerClubRequestS2C message, length delimited. Does not implicitly {@link GamerClubRequestS2C.verify|verify} messages.
     * @param message GamerClubRequestS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerClubRequestS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerClubRequestS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerClubRequestS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerClubRequestS2C;

    /**
     * Decodes a GamerClubRequestS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerClubRequestS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerClubRequestS2C;

    /**
     * Verifies a GamerClubRequestS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerClubRequestS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerClubRequestS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerClubRequestS2C;

    /**
     * Creates a plain object from a GamerClubRequestS2C message. Also converts values to other types if specified.
     * @param message GamerClubRequestS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerClubRequestS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerClubRequestS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerNotifyNewChatS2C. */
export interface IGamerNotifyNewChatS2C {

    /** GamerNotifyNewChatS2C error */
    error?: (number|null);

    /** GamerNotifyNewChatS2C chats */
    chats?: (IChatData[]|null);
}

/** Represents a GamerNotifyNewChatS2C. */
export class GamerNotifyNewChatS2C implements IGamerNotifyNewChatS2C {

    /**
     * Constructs a new GamerNotifyNewChatS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerNotifyNewChatS2C);

    /** GamerNotifyNewChatS2C error. */
    public error: number;

    /** GamerNotifyNewChatS2C chats. */
    public chats: IChatData[];

    /**
     * Creates a new GamerNotifyNewChatS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerNotifyNewChatS2C instance
     */
    public static create(properties?: IGamerNotifyNewChatS2C): GamerNotifyNewChatS2C;

    /**
     * Encodes the specified GamerNotifyNewChatS2C message. Does not implicitly {@link GamerNotifyNewChatS2C.verify|verify} messages.
     * @param message GamerNotifyNewChatS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerNotifyNewChatS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerNotifyNewChatS2C message, length delimited. Does not implicitly {@link GamerNotifyNewChatS2C.verify|verify} messages.
     * @param message GamerNotifyNewChatS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerNotifyNewChatS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerNotifyNewChatS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerNotifyNewChatS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyNewChatS2C;

    /**
     * Decodes a GamerNotifyNewChatS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerNotifyNewChatS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyNewChatS2C;

    /**
     * Verifies a GamerNotifyNewChatS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerNotifyNewChatS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerNotifyNewChatS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerNotifyNewChatS2C;

    /**
     * Creates a plain object from a GamerNotifyNewChatS2C message. Also converts values to other types if specified.
     * @param message GamerNotifyNewChatS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerNotifyNewChatS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerNotifyNewChatS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerNewFriendReqC2S. */
export interface IGamerNewFriendReqC2S {

    /** GamerNewFriendReqC2S id */
    id?: (number|null);

    /** GamerNewFriendReqC2S oid */
    oid?: (number|null);

    /** GamerNewFriendReqC2S msg */
    msg?: (string|null);
}

/** Represents a GamerNewFriendReqC2S. */
export class GamerNewFriendReqC2S implements IGamerNewFriendReqC2S {

    /**
     * Constructs a new GamerNewFriendReqC2S.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerNewFriendReqC2S);

    /** GamerNewFriendReqC2S id. */
    public id: number;

    /** GamerNewFriendReqC2S oid. */
    public oid: number;

    /** GamerNewFriendReqC2S msg. */
    public msg: string;

    /**
     * Creates a new GamerNewFriendReqC2S instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerNewFriendReqC2S instance
     */
    public static create(properties?: IGamerNewFriendReqC2S): GamerNewFriendReqC2S;

    /**
     * Encodes the specified GamerNewFriendReqC2S message. Does not implicitly {@link GamerNewFriendReqC2S.verify|verify} messages.
     * @param message GamerNewFriendReqC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerNewFriendReqC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerNewFriendReqC2S message, length delimited. Does not implicitly {@link GamerNewFriendReqC2S.verify|verify} messages.
     * @param message GamerNewFriendReqC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerNewFriendReqC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerNewFriendReqC2S message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerNewFriendReqC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNewFriendReqC2S;

    /**
     * Decodes a GamerNewFriendReqC2S message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerNewFriendReqC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNewFriendReqC2S;

    /**
     * Verifies a GamerNewFriendReqC2S message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerNewFriendReqC2S message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerNewFriendReqC2S
     */
    public static fromObject(object: { [k: string]: any }): GamerNewFriendReqC2S;

    /**
     * Creates a plain object from a GamerNewFriendReqC2S message. Also converts values to other types if specified.
     * @param message GamerNewFriendReqC2S
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerNewFriendReqC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerNewFriendReqC2S to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerNewFriendReqS2C. */
export interface IGamerNewFriendReqS2C {

    /** GamerNewFriendReqS2C error */
    error?: (number|null);
}

/** Represents a GamerNewFriendReqS2C. */
export class GamerNewFriendReqS2C implements IGamerNewFriendReqS2C {

    /**
     * Constructs a new GamerNewFriendReqS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerNewFriendReqS2C);

    /** GamerNewFriendReqS2C error. */
    public error: number;

    /**
     * Creates a new GamerNewFriendReqS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerNewFriendReqS2C instance
     */
    public static create(properties?: IGamerNewFriendReqS2C): GamerNewFriendReqS2C;

    /**
     * Encodes the specified GamerNewFriendReqS2C message. Does not implicitly {@link GamerNewFriendReqS2C.verify|verify} messages.
     * @param message GamerNewFriendReqS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerNewFriendReqS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerNewFriendReqS2C message, length delimited. Does not implicitly {@link GamerNewFriendReqS2C.verify|verify} messages.
     * @param message GamerNewFriendReqS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerNewFriendReqS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerNewFriendReqS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerNewFriendReqS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNewFriendReqS2C;

    /**
     * Decodes a GamerNewFriendReqS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerNewFriendReqS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNewFriendReqS2C;

    /**
     * Verifies a GamerNewFriendReqS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerNewFriendReqS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerNewFriendReqS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerNewFriendReqS2C;

    /**
     * Creates a plain object from a GamerNewFriendReqS2C message. Also converts values to other types if specified.
     * @param message GamerNewFriendReqS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerNewFriendReqS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerNewFriendReqS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerDelFriendC2S. */
export interface IGamerDelFriendC2S {

    /** GamerDelFriendC2S id */
    id?: (number|null);

    /** GamerDelFriendC2S oid */
    oid?: (number|null);
}

/** Represents a GamerDelFriendC2S. */
export class GamerDelFriendC2S implements IGamerDelFriendC2S {

    /**
     * Constructs a new GamerDelFriendC2S.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerDelFriendC2S);

    /** GamerDelFriendC2S id. */
    public id: number;

    /** GamerDelFriendC2S oid. */
    public oid: number;

    /**
     * Creates a new GamerDelFriendC2S instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerDelFriendC2S instance
     */
    public static create(properties?: IGamerDelFriendC2S): GamerDelFriendC2S;

    /**
     * Encodes the specified GamerDelFriendC2S message. Does not implicitly {@link GamerDelFriendC2S.verify|verify} messages.
     * @param message GamerDelFriendC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerDelFriendC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerDelFriendC2S message, length delimited. Does not implicitly {@link GamerDelFriendC2S.verify|verify} messages.
     * @param message GamerDelFriendC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerDelFriendC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerDelFriendC2S message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerDelFriendC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerDelFriendC2S;

    /**
     * Decodes a GamerDelFriendC2S message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerDelFriendC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerDelFriendC2S;

    /**
     * Verifies a GamerDelFriendC2S message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerDelFriendC2S message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerDelFriendC2S
     */
    public static fromObject(object: { [k: string]: any }): GamerDelFriendC2S;

    /**
     * Creates a plain object from a GamerDelFriendC2S message. Also converts values to other types if specified.
     * @param message GamerDelFriendC2S
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerDelFriendC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerDelFriendC2S to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerDelFriendS2C. */
export interface IGamerDelFriendS2C {

    /** GamerDelFriendS2C error */
    error?: (number|null);
}

/** Represents a GamerDelFriendS2C. */
export class GamerDelFriendS2C implements IGamerDelFriendS2C {

    /**
     * Constructs a new GamerDelFriendS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerDelFriendS2C);

    /** GamerDelFriendS2C error. */
    public error: number;

    /**
     * Creates a new GamerDelFriendS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerDelFriendS2C instance
     */
    public static create(properties?: IGamerDelFriendS2C): GamerDelFriendS2C;

    /**
     * Encodes the specified GamerDelFriendS2C message. Does not implicitly {@link GamerDelFriendS2C.verify|verify} messages.
     * @param message GamerDelFriendS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerDelFriendS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerDelFriendS2C message, length delimited. Does not implicitly {@link GamerDelFriendS2C.verify|verify} messages.
     * @param message GamerDelFriendS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerDelFriendS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerDelFriendS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerDelFriendS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerDelFriendS2C;

    /**
     * Decodes a GamerDelFriendS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerDelFriendS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerDelFriendS2C;

    /**
     * Verifies a GamerDelFriendS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerDelFriendS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerDelFriendS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerDelFriendS2C;

    /**
     * Creates a plain object from a GamerDelFriendS2C message. Also converts values to other types if specified.
     * @param message GamerDelFriendS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerDelFriendS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerDelFriendS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerNotifyNewFriendReqS2C. */
export interface IGamerNotifyNewFriendReqS2C {

    /** GamerNotifyNewFriendReqS2C error */
    error?: (number|null);

    /** GamerNotifyNewFriendReqS2C request */
    request?: (IGamerFriendRequest|null);
}

/** Represents a GamerNotifyNewFriendReqS2C. */
export class GamerNotifyNewFriendReqS2C implements IGamerNotifyNewFriendReqS2C {

    /**
     * Constructs a new GamerNotifyNewFriendReqS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerNotifyNewFriendReqS2C);

    /** GamerNotifyNewFriendReqS2C error. */
    public error: number;

    /** GamerNotifyNewFriendReqS2C request. */
    public request?: (IGamerFriendRequest|null);

    /**
     * Creates a new GamerNotifyNewFriendReqS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerNotifyNewFriendReqS2C instance
     */
    public static create(properties?: IGamerNotifyNewFriendReqS2C): GamerNotifyNewFriendReqS2C;

    /**
     * Encodes the specified GamerNotifyNewFriendReqS2C message. Does not implicitly {@link GamerNotifyNewFriendReqS2C.verify|verify} messages.
     * @param message GamerNotifyNewFriendReqS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerNotifyNewFriendReqS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerNotifyNewFriendReqS2C message, length delimited. Does not implicitly {@link GamerNotifyNewFriendReqS2C.verify|verify} messages.
     * @param message GamerNotifyNewFriendReqS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerNotifyNewFriendReqS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerNotifyNewFriendReqS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerNotifyNewFriendReqS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyNewFriendReqS2C;

    /**
     * Decodes a GamerNotifyNewFriendReqS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerNotifyNewFriendReqS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyNewFriendReqS2C;

    /**
     * Verifies a GamerNotifyNewFriendReqS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerNotifyNewFriendReqS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerNotifyNewFriendReqS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerNotifyNewFriendReqS2C;

    /**
     * Creates a plain object from a GamerNotifyNewFriendReqS2C message. Also converts values to other types if specified.
     * @param message GamerNotifyNewFriendReqS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerNotifyNewFriendReqS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerNotifyNewFriendReqS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerProcessFriendReqC2S. */
export interface IGamerProcessFriendReqC2S {

    /** GamerProcessFriendReqC2S id */
    id?: (number|null);

    /** GamerProcessFriendReqC2S oid */
    oid?: (number|null);

    /** GamerProcessFriendReqC2S result */
    result?: (boolean|null);
}

/** Represents a GamerProcessFriendReqC2S. */
export class GamerProcessFriendReqC2S implements IGamerProcessFriendReqC2S {

    /**
     * Constructs a new GamerProcessFriendReqC2S.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerProcessFriendReqC2S);

    /** GamerProcessFriendReqC2S id. */
    public id: number;

    /** GamerProcessFriendReqC2S oid. */
    public oid: number;

    /** GamerProcessFriendReqC2S result. */
    public result: boolean;

    /**
     * Creates a new GamerProcessFriendReqC2S instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerProcessFriendReqC2S instance
     */
    public static create(properties?: IGamerProcessFriendReqC2S): GamerProcessFriendReqC2S;

    /**
     * Encodes the specified GamerProcessFriendReqC2S message. Does not implicitly {@link GamerProcessFriendReqC2S.verify|verify} messages.
     * @param message GamerProcessFriendReqC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerProcessFriendReqC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerProcessFriendReqC2S message, length delimited. Does not implicitly {@link GamerProcessFriendReqC2S.verify|verify} messages.
     * @param message GamerProcessFriendReqC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerProcessFriendReqC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerProcessFriendReqC2S message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerProcessFriendReqC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerProcessFriendReqC2S;

    /**
     * Decodes a GamerProcessFriendReqC2S message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerProcessFriendReqC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerProcessFriendReqC2S;

    /**
     * Verifies a GamerProcessFriendReqC2S message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerProcessFriendReqC2S message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerProcessFriendReqC2S
     */
    public static fromObject(object: { [k: string]: any }): GamerProcessFriendReqC2S;

    /**
     * Creates a plain object from a GamerProcessFriendReqC2S message. Also converts values to other types if specified.
     * @param message GamerProcessFriendReqC2S
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerProcessFriendReqC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerProcessFriendReqC2S to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerProcessFriendReqS2C. */
export interface IGamerProcessFriendReqS2C {

    /** GamerProcessFriendReqS2C error */
    error?: (number|null);
}

/** Represents a GamerProcessFriendReqS2C. */
export class GamerProcessFriendReqS2C implements IGamerProcessFriendReqS2C {

    /**
     * Constructs a new GamerProcessFriendReqS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerProcessFriendReqS2C);

    /** GamerProcessFriendReqS2C error. */
    public error: number;

    /**
     * Creates a new GamerProcessFriendReqS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerProcessFriendReqS2C instance
     */
    public static create(properties?: IGamerProcessFriendReqS2C): GamerProcessFriendReqS2C;

    /**
     * Encodes the specified GamerProcessFriendReqS2C message. Does not implicitly {@link GamerProcessFriendReqS2C.verify|verify} messages.
     * @param message GamerProcessFriendReqS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerProcessFriendReqS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerProcessFriendReqS2C message, length delimited. Does not implicitly {@link GamerProcessFriendReqS2C.verify|verify} messages.
     * @param message GamerProcessFriendReqS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerProcessFriendReqS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerProcessFriendReqS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerProcessFriendReqS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerProcessFriendReqS2C;

    /**
     * Decodes a GamerProcessFriendReqS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerProcessFriendReqS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerProcessFriendReqS2C;

    /**
     * Verifies a GamerProcessFriendReqS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerProcessFriendReqS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerProcessFriendReqS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerProcessFriendReqS2C;

    /**
     * Creates a plain object from a GamerProcessFriendReqS2C message. Also converts values to other types if specified.
     * @param message GamerProcessFriendReqS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerProcessFriendReqS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerProcessFriendReqS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerNotifyNewFriendS2C. */
export interface IGamerNotifyNewFriendS2C {

    /** GamerNotifyNewFriendS2C error */
    error?: (number|null);

    /** GamerNotifyNewFriendS2C friend */
    friend?: (IGamerFriend|null);
}

/** Represents a GamerNotifyNewFriendS2C. */
export class GamerNotifyNewFriendS2C implements IGamerNotifyNewFriendS2C {

    /**
     * Constructs a new GamerNotifyNewFriendS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerNotifyNewFriendS2C);

    /** GamerNotifyNewFriendS2C error. */
    public error: number;

    /** GamerNotifyNewFriendS2C friend. */
    public friend?: (IGamerFriend|null);

    /**
     * Creates a new GamerNotifyNewFriendS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerNotifyNewFriendS2C instance
     */
    public static create(properties?: IGamerNotifyNewFriendS2C): GamerNotifyNewFriendS2C;

    /**
     * Encodes the specified GamerNotifyNewFriendS2C message. Does not implicitly {@link GamerNotifyNewFriendS2C.verify|verify} messages.
     * @param message GamerNotifyNewFriendS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerNotifyNewFriendS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerNotifyNewFriendS2C message, length delimited. Does not implicitly {@link GamerNotifyNewFriendS2C.verify|verify} messages.
     * @param message GamerNotifyNewFriendS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerNotifyNewFriendS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerNotifyNewFriendS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerNotifyNewFriendS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyNewFriendS2C;

    /**
     * Decodes a GamerNotifyNewFriendS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerNotifyNewFriendS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyNewFriendS2C;

    /**
     * Verifies a GamerNotifyNewFriendS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerNotifyNewFriendS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerNotifyNewFriendS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerNotifyNewFriendS2C;

    /**
     * Creates a plain object from a GamerNotifyNewFriendS2C message. Also converts values to other types if specified.
     * @param message GamerNotifyNewFriendS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerNotifyNewFriendS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerNotifyNewFriendS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerNotifyDelFriendS2C. */
export interface IGamerNotifyDelFriendS2C {

    /** GamerNotifyDelFriendS2C error */
    error?: (number|null);

    /** GamerNotifyDelFriendS2C oid */
    oid?: (number|null);
}

/** Represents a GamerNotifyDelFriendS2C. */
export class GamerNotifyDelFriendS2C implements IGamerNotifyDelFriendS2C {

    /**
     * Constructs a new GamerNotifyDelFriendS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerNotifyDelFriendS2C);

    /** GamerNotifyDelFriendS2C error. */
    public error: number;

    /** GamerNotifyDelFriendS2C oid. */
    public oid: number;

    /**
     * Creates a new GamerNotifyDelFriendS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerNotifyDelFriendS2C instance
     */
    public static create(properties?: IGamerNotifyDelFriendS2C): GamerNotifyDelFriendS2C;

    /**
     * Encodes the specified GamerNotifyDelFriendS2C message. Does not implicitly {@link GamerNotifyDelFriendS2C.verify|verify} messages.
     * @param message GamerNotifyDelFriendS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerNotifyDelFriendS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerNotifyDelFriendS2C message, length delimited. Does not implicitly {@link GamerNotifyDelFriendS2C.verify|verify} messages.
     * @param message GamerNotifyDelFriendS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerNotifyDelFriendS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerNotifyDelFriendS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerNotifyDelFriendS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyDelFriendS2C;

    /**
     * Decodes a GamerNotifyDelFriendS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerNotifyDelFriendS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyDelFriendS2C;

    /**
     * Verifies a GamerNotifyDelFriendS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerNotifyDelFriendS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerNotifyDelFriendS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerNotifyDelFriendS2C;

    /**
     * Creates a plain object from a GamerNotifyDelFriendS2C message. Also converts values to other types if specified.
     * @param message GamerNotifyDelFriendS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerNotifyDelFriendS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerNotifyDelFriendS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerNotifyNewMailS2C. */
export interface IGamerNotifyNewMailS2C {

    /** GamerNotifyNewMailS2C error */
    error?: (number|null);

    /** GamerNotifyNewMailS2C mail */
    mail?: (IMail[]|null);
}

/** Represents a GamerNotifyNewMailS2C. */
export class GamerNotifyNewMailS2C implements IGamerNotifyNewMailS2C {

    /**
     * Constructs a new GamerNotifyNewMailS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerNotifyNewMailS2C);

    /** GamerNotifyNewMailS2C error. */
    public error: number;

    /** GamerNotifyNewMailS2C mail. */
    public mail: IMail[];

    /**
     * Creates a new GamerNotifyNewMailS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerNotifyNewMailS2C instance
     */
    public static create(properties?: IGamerNotifyNewMailS2C): GamerNotifyNewMailS2C;

    /**
     * Encodes the specified GamerNotifyNewMailS2C message. Does not implicitly {@link GamerNotifyNewMailS2C.verify|verify} messages.
     * @param message GamerNotifyNewMailS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerNotifyNewMailS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerNotifyNewMailS2C message, length delimited. Does not implicitly {@link GamerNotifyNewMailS2C.verify|verify} messages.
     * @param message GamerNotifyNewMailS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerNotifyNewMailS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerNotifyNewMailS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerNotifyNewMailS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyNewMailS2C;

    /**
     * Decodes a GamerNotifyNewMailS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerNotifyNewMailS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyNewMailS2C;

    /**
     * Verifies a GamerNotifyNewMailS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerNotifyNewMailS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerNotifyNewMailS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerNotifyNewMailS2C;

    /**
     * Creates a plain object from a GamerNotifyNewMailS2C message. Also converts values to other types if specified.
     * @param message GamerNotifyNewMailS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerNotifyNewMailS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerNotifyNewMailS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerNewHeroC2S. */
export interface IGamerNewHeroC2S {

    /** GamerNewHeroC2S id */
    id?: (number|null);

    /** GamerNewHeroC2S heroId */
    heroId?: (number|null);
}

/** Represents a GamerNewHeroC2S. */
export class GamerNewHeroC2S implements IGamerNewHeroC2S {

    /**
     * Constructs a new GamerNewHeroC2S.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerNewHeroC2S);

    /** GamerNewHeroC2S id. */
    public id: number;

    /** GamerNewHeroC2S heroId. */
    public heroId: number;

    /**
     * Creates a new GamerNewHeroC2S instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerNewHeroC2S instance
     */
    public static create(properties?: IGamerNewHeroC2S): GamerNewHeroC2S;

    /**
     * Encodes the specified GamerNewHeroC2S message. Does not implicitly {@link GamerNewHeroC2S.verify|verify} messages.
     * @param message GamerNewHeroC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerNewHeroC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerNewHeroC2S message, length delimited. Does not implicitly {@link GamerNewHeroC2S.verify|verify} messages.
     * @param message GamerNewHeroC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerNewHeroC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerNewHeroC2S message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerNewHeroC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNewHeroC2S;

    /**
     * Decodes a GamerNewHeroC2S message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerNewHeroC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNewHeroC2S;

    /**
     * Verifies a GamerNewHeroC2S message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerNewHeroC2S message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerNewHeroC2S
     */
    public static fromObject(object: { [k: string]: any }): GamerNewHeroC2S;

    /**
     * Creates a plain object from a GamerNewHeroC2S message. Also converts values to other types if specified.
     * @param message GamerNewHeroC2S
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerNewHeroC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerNewHeroC2S to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerNewHeroS2C. */
export interface IGamerNewHeroS2C {

    /** GamerNewHeroS2C error */
    error?: (number|null);

    /** GamerNewHeroS2C hero */
    hero?: (IGamerHero|null);
}

/** Represents a GamerNewHeroS2C. */
export class GamerNewHeroS2C implements IGamerNewHeroS2C {

    /**
     * Constructs a new GamerNewHeroS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerNewHeroS2C);

    /** GamerNewHeroS2C error. */
    public error: number;

    /** GamerNewHeroS2C hero. */
    public hero?: (IGamerHero|null);

    /**
     * Creates a new GamerNewHeroS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerNewHeroS2C instance
     */
    public static create(properties?: IGamerNewHeroS2C): GamerNewHeroS2C;

    /**
     * Encodes the specified GamerNewHeroS2C message. Does not implicitly {@link GamerNewHeroS2C.verify|verify} messages.
     * @param message GamerNewHeroS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerNewHeroS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerNewHeroS2C message, length delimited. Does not implicitly {@link GamerNewHeroS2C.verify|verify} messages.
     * @param message GamerNewHeroS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerNewHeroS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerNewHeroS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerNewHeroS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNewHeroS2C;

    /**
     * Decodes a GamerNewHeroS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerNewHeroS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNewHeroS2C;

    /**
     * Verifies a GamerNewHeroS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerNewHeroS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerNewHeroS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerNewHeroS2C;

    /**
     * Creates a plain object from a GamerNewHeroS2C message. Also converts values to other types if specified.
     * @param message GamerNewHeroS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerNewHeroS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerNewHeroS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerUpgradeHeroC2S. */
export interface IGamerUpgradeHeroC2S {

    /** GamerUpgradeHeroC2S id */
    id?: (number|null);

    /** GamerUpgradeHeroC2S lid */
    lid?: (number|null);
}

/** Represents a GamerUpgradeHeroC2S. */
export class GamerUpgradeHeroC2S implements IGamerUpgradeHeroC2S {

    /**
     * Constructs a new GamerUpgradeHeroC2S.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerUpgradeHeroC2S);

    /** GamerUpgradeHeroC2S id. */
    public id: number;

    /** GamerUpgradeHeroC2S lid. */
    public lid: number;

    /**
     * Creates a new GamerUpgradeHeroC2S instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerUpgradeHeroC2S instance
     */
    public static create(properties?: IGamerUpgradeHeroC2S): GamerUpgradeHeroC2S;

    /**
     * Encodes the specified GamerUpgradeHeroC2S message. Does not implicitly {@link GamerUpgradeHeroC2S.verify|verify} messages.
     * @param message GamerUpgradeHeroC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerUpgradeHeroC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerUpgradeHeroC2S message, length delimited. Does not implicitly {@link GamerUpgradeHeroC2S.verify|verify} messages.
     * @param message GamerUpgradeHeroC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerUpgradeHeroC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerUpgradeHeroC2S message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerUpgradeHeroC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerUpgradeHeroC2S;

    /**
     * Decodes a GamerUpgradeHeroC2S message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerUpgradeHeroC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerUpgradeHeroC2S;

    /**
     * Verifies a GamerUpgradeHeroC2S message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerUpgradeHeroC2S message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerUpgradeHeroC2S
     */
    public static fromObject(object: { [k: string]: any }): GamerUpgradeHeroC2S;

    /**
     * Creates a plain object from a GamerUpgradeHeroC2S message. Also converts values to other types if specified.
     * @param message GamerUpgradeHeroC2S
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerUpgradeHeroC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerUpgradeHeroC2S to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerUpgradeHeroS2C. */
export interface IGamerUpgradeHeroS2C {

    /** GamerUpgradeHeroS2C error */
    error?: (number|null);

    /** GamerUpgradeHeroS2C hero */
    hero?: (IGamerHero|null);
}

/** Represents a GamerUpgradeHeroS2C. */
export class GamerUpgradeHeroS2C implements IGamerUpgradeHeroS2C {

    /**
     * Constructs a new GamerUpgradeHeroS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerUpgradeHeroS2C);

    /** GamerUpgradeHeroS2C error. */
    public error: number;

    /** GamerUpgradeHeroS2C hero. */
    public hero?: (IGamerHero|null);

    /**
     * Creates a new GamerUpgradeHeroS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerUpgradeHeroS2C instance
     */
    public static create(properties?: IGamerUpgradeHeroS2C): GamerUpgradeHeroS2C;

    /**
     * Encodes the specified GamerUpgradeHeroS2C message. Does not implicitly {@link GamerUpgradeHeroS2C.verify|verify} messages.
     * @param message GamerUpgradeHeroS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerUpgradeHeroS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerUpgradeHeroS2C message, length delimited. Does not implicitly {@link GamerUpgradeHeroS2C.verify|verify} messages.
     * @param message GamerUpgradeHeroS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerUpgradeHeroS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerUpgradeHeroS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerUpgradeHeroS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerUpgradeHeroS2C;

    /**
     * Decodes a GamerUpgradeHeroS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerUpgradeHeroS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerUpgradeHeroS2C;

    /**
     * Verifies a GamerUpgradeHeroS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerUpgradeHeroS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerUpgradeHeroS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerUpgradeHeroS2C;

    /**
     * Creates a plain object from a GamerUpgradeHeroS2C message. Also converts values to other types if specified.
     * @param message GamerUpgradeHeroS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerUpgradeHeroS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerUpgradeHeroS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerChoseHeroC2S. */
export interface IGamerChoseHeroC2S {

    /** GamerChoseHeroC2S id */
    id?: (number|null);

    /** GamerChoseHeroC2S lid */
    lid?: (number|null);
}

/** Represents a GamerChoseHeroC2S. */
export class GamerChoseHeroC2S implements IGamerChoseHeroC2S {

    /**
     * Constructs a new GamerChoseHeroC2S.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerChoseHeroC2S);

    /** GamerChoseHeroC2S id. */
    public id: number;

    /** GamerChoseHeroC2S lid. */
    public lid: number;

    /**
     * Creates a new GamerChoseHeroC2S instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerChoseHeroC2S instance
     */
    public static create(properties?: IGamerChoseHeroC2S): GamerChoseHeroC2S;

    /**
     * Encodes the specified GamerChoseHeroC2S message. Does not implicitly {@link GamerChoseHeroC2S.verify|verify} messages.
     * @param message GamerChoseHeroC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerChoseHeroC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerChoseHeroC2S message, length delimited. Does not implicitly {@link GamerChoseHeroC2S.verify|verify} messages.
     * @param message GamerChoseHeroC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerChoseHeroC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerChoseHeroC2S message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerChoseHeroC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerChoseHeroC2S;

    /**
     * Decodes a GamerChoseHeroC2S message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerChoseHeroC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerChoseHeroC2S;

    /**
     * Verifies a GamerChoseHeroC2S message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerChoseHeroC2S message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerChoseHeroC2S
     */
    public static fromObject(object: { [k: string]: any }): GamerChoseHeroC2S;

    /**
     * Creates a plain object from a GamerChoseHeroC2S message. Also converts values to other types if specified.
     * @param message GamerChoseHeroC2S
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerChoseHeroC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerChoseHeroC2S to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerChoseHeroS2C. */
export interface IGamerChoseHeroS2C {

    /** GamerChoseHeroS2C error */
    error?: (number|null);

    /** GamerChoseHeroS2C hero */
    hero?: (IGamerHero|null);
}

/** Represents a GamerChoseHeroS2C. */
export class GamerChoseHeroS2C implements IGamerChoseHeroS2C {

    /**
     * Constructs a new GamerChoseHeroS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerChoseHeroS2C);

    /** GamerChoseHeroS2C error. */
    public error: number;

    /** GamerChoseHeroS2C hero. */
    public hero?: (IGamerHero|null);

    /**
     * Creates a new GamerChoseHeroS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerChoseHeroS2C instance
     */
    public static create(properties?: IGamerChoseHeroS2C): GamerChoseHeroS2C;

    /**
     * Encodes the specified GamerChoseHeroS2C message. Does not implicitly {@link GamerChoseHeroS2C.verify|verify} messages.
     * @param message GamerChoseHeroS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerChoseHeroS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerChoseHeroS2C message, length delimited. Does not implicitly {@link GamerChoseHeroS2C.verify|verify} messages.
     * @param message GamerChoseHeroS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerChoseHeroS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerChoseHeroS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerChoseHeroS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerChoseHeroS2C;

    /**
     * Decodes a GamerChoseHeroS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerChoseHeroS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerChoseHeroS2C;

    /**
     * Verifies a GamerChoseHeroS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerChoseHeroS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerChoseHeroS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerChoseHeroS2C;

    /**
     * Creates a plain object from a GamerChoseHeroS2C message. Also converts values to other types if specified.
     * @param message GamerChoseHeroS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerChoseHeroS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerChoseHeroS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerMatchC2S. */
export interface IGamerMatchC2S {

    /** GamerMatchC2S id */
    id?: (number|null);

    /** GamerMatchC2S type */
    type?: (number|null);

    /** GamerMatchC2S hero */
    hero?: (number|null);
}

/** Represents a GamerMatchC2S. */
export class GamerMatchC2S implements IGamerMatchC2S {

    /**
     * Constructs a new GamerMatchC2S.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerMatchC2S);

    /** GamerMatchC2S id. */
    public id: number;

    /** GamerMatchC2S type. */
    public type: number;

    /** GamerMatchC2S hero. */
    public hero: number;

    /**
     * Creates a new GamerMatchC2S instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerMatchC2S instance
     */
    public static create(properties?: IGamerMatchC2S): GamerMatchC2S;

    /**
     * Encodes the specified GamerMatchC2S message. Does not implicitly {@link GamerMatchC2S.verify|verify} messages.
     * @param message GamerMatchC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerMatchC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerMatchC2S message, length delimited. Does not implicitly {@link GamerMatchC2S.verify|verify} messages.
     * @param message GamerMatchC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerMatchC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerMatchC2S message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerMatchC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerMatchC2S;

    /**
     * Decodes a GamerMatchC2S message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerMatchC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerMatchC2S;

    /**
     * Verifies a GamerMatchC2S message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerMatchC2S message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerMatchC2S
     */
    public static fromObject(object: { [k: string]: any }): GamerMatchC2S;

    /**
     * Creates a plain object from a GamerMatchC2S message. Also converts values to other types if specified.
     * @param message GamerMatchC2S
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerMatchC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerMatchC2S to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerMatchS2C. */
export interface IGamerMatchS2C {

    /** GamerMatchS2C error */
    error?: (number|null);
}

/** Represents a GamerMatchS2C. */
export class GamerMatchS2C implements IGamerMatchS2C {

    /**
     * Constructs a new GamerMatchS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerMatchS2C);

    /** GamerMatchS2C error. */
    public error: number;

    /**
     * Creates a new GamerMatchS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerMatchS2C instance
     */
    public static create(properties?: IGamerMatchS2C): GamerMatchS2C;

    /**
     * Encodes the specified GamerMatchS2C message. Does not implicitly {@link GamerMatchS2C.verify|verify} messages.
     * @param message GamerMatchS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerMatchS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerMatchS2C message, length delimited. Does not implicitly {@link GamerMatchS2C.verify|verify} messages.
     * @param message GamerMatchS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerMatchS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerMatchS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerMatchS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerMatchS2C;

    /**
     * Decodes a GamerMatchS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerMatchS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerMatchS2C;

    /**
     * Verifies a GamerMatchS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerMatchS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerMatchS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerMatchS2C;

    /**
     * Creates a plain object from a GamerMatchS2C message. Also converts values to other types if specified.
     * @param message GamerMatchS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerMatchS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerMatchS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerCancelMatchC2S. */
export interface IGamerCancelMatchC2S {

    /** GamerCancelMatchC2S id */
    id?: (number|null);
}

/** Represents a GamerCancelMatchC2S. */
export class GamerCancelMatchC2S implements IGamerCancelMatchC2S {

    /**
     * Constructs a new GamerCancelMatchC2S.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerCancelMatchC2S);

    /** GamerCancelMatchC2S id. */
    public id: number;

    /**
     * Creates a new GamerCancelMatchC2S instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerCancelMatchC2S instance
     */
    public static create(properties?: IGamerCancelMatchC2S): GamerCancelMatchC2S;

    /**
     * Encodes the specified GamerCancelMatchC2S message. Does not implicitly {@link GamerCancelMatchC2S.verify|verify} messages.
     * @param message GamerCancelMatchC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerCancelMatchC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerCancelMatchC2S message, length delimited. Does not implicitly {@link GamerCancelMatchC2S.verify|verify} messages.
     * @param message GamerCancelMatchC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerCancelMatchC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerCancelMatchC2S message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerCancelMatchC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerCancelMatchC2S;

    /**
     * Decodes a GamerCancelMatchC2S message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerCancelMatchC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerCancelMatchC2S;

    /**
     * Verifies a GamerCancelMatchC2S message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerCancelMatchC2S message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerCancelMatchC2S
     */
    public static fromObject(object: { [k: string]: any }): GamerCancelMatchC2S;

    /**
     * Creates a plain object from a GamerCancelMatchC2S message. Also converts values to other types if specified.
     * @param message GamerCancelMatchC2S
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerCancelMatchC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerCancelMatchC2S to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerCancelMatchS2C. */
export interface IGamerCancelMatchS2C {

    /** GamerCancelMatchS2C error */
    error?: (number|null);
}

/** Represents a GamerCancelMatchS2C. */
export class GamerCancelMatchS2C implements IGamerCancelMatchS2C {

    /**
     * Constructs a new GamerCancelMatchS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerCancelMatchS2C);

    /** GamerCancelMatchS2C error. */
    public error: number;

    /**
     * Creates a new GamerCancelMatchS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerCancelMatchS2C instance
     */
    public static create(properties?: IGamerCancelMatchS2C): GamerCancelMatchS2C;

    /**
     * Encodes the specified GamerCancelMatchS2C message. Does not implicitly {@link GamerCancelMatchS2C.verify|verify} messages.
     * @param message GamerCancelMatchS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerCancelMatchS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerCancelMatchS2C message, length delimited. Does not implicitly {@link GamerCancelMatchS2C.verify|verify} messages.
     * @param message GamerCancelMatchS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerCancelMatchS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerCancelMatchS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerCancelMatchS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerCancelMatchS2C;

    /**
     * Decodes a GamerCancelMatchS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerCancelMatchS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerCancelMatchS2C;

    /**
     * Verifies a GamerCancelMatchS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerCancelMatchS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerCancelMatchS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerCancelMatchS2C;

    /**
     * Creates a plain object from a GamerCancelMatchS2C message. Also converts values to other types if specified.
     * @param message GamerCancelMatchS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerCancelMatchS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerCancelMatchS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerNotifyMatchInfoS2C. */
export interface IGamerNotifyMatchInfoS2C {

    /** GamerNotifyMatchInfoS2C error */
    error?: (number|null);

    /** GamerNotifyMatchInfoS2C matchInfo */
    matchInfo?: (IMatchInfo|null);

    /** GamerNotifyMatchInfoS2C reconn */
    reconn?: (boolean|null);
}

/** Represents a GamerNotifyMatchInfoS2C. */
export class GamerNotifyMatchInfoS2C implements IGamerNotifyMatchInfoS2C {

    /**
     * Constructs a new GamerNotifyMatchInfoS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerNotifyMatchInfoS2C);

    /** GamerNotifyMatchInfoS2C error. */
    public error: number;

    /** GamerNotifyMatchInfoS2C matchInfo. */
    public matchInfo?: (IMatchInfo|null);

    /** GamerNotifyMatchInfoS2C reconn. */
    public reconn: boolean;

    /**
     * Creates a new GamerNotifyMatchInfoS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerNotifyMatchInfoS2C instance
     */
    public static create(properties?: IGamerNotifyMatchInfoS2C): GamerNotifyMatchInfoS2C;

    /**
     * Encodes the specified GamerNotifyMatchInfoS2C message. Does not implicitly {@link GamerNotifyMatchInfoS2C.verify|verify} messages.
     * @param message GamerNotifyMatchInfoS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerNotifyMatchInfoS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerNotifyMatchInfoS2C message, length delimited. Does not implicitly {@link GamerNotifyMatchInfoS2C.verify|verify} messages.
     * @param message GamerNotifyMatchInfoS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerNotifyMatchInfoS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerNotifyMatchInfoS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerNotifyMatchInfoS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyMatchInfoS2C;

    /**
     * Decodes a GamerNotifyMatchInfoS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerNotifyMatchInfoS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyMatchInfoS2C;

    /**
     * Verifies a GamerNotifyMatchInfoS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerNotifyMatchInfoS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerNotifyMatchInfoS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerNotifyMatchInfoS2C;

    /**
     * Creates a plain object from a GamerNotifyMatchInfoS2C message. Also converts values to other types if specified.
     * @param message GamerNotifyMatchInfoS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerNotifyMatchInfoS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerNotifyMatchInfoS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerPVPSyncC2S. */
export interface IGamerPVPSyncC2S {

    /** GamerPVPSyncC2S id */
    id?: (number|null);

    /** GamerPVPSyncC2S session */
    session?: (string|null);

    /** GamerPVPSyncC2S input */
    input?: (IPVPInput|null);

    /** GamerPVPSyncC2S needFrames */
    needFrames?: (number[]|null);

    /** GamerPVPSyncC2S crc */
    crc?: ((number|Long)[]|null);

    /** GamerPVPSyncC2S agents */
    agents?: (IPVPInput[]|null);

    /** GamerPVPSyncC2S reconn */
    reconn?: (boolean|null);

    /** GamerPVPSyncC2S index */
    index?: (number|null);

    /** GamerPVPSyncC2S addr */
    addr?: (string|null);

    /** GamerPVPSyncC2S result */
    result?: (IPVPResult|null);
}

/** Represents a GamerPVPSyncC2S. */
export class GamerPVPSyncC2S implements IGamerPVPSyncC2S {

    /**
     * Constructs a new GamerPVPSyncC2S.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerPVPSyncC2S);

    /** GamerPVPSyncC2S id. */
    public id: number;

    /** GamerPVPSyncC2S session. */
    public session: string;

    /** GamerPVPSyncC2S input. */
    public input?: (IPVPInput|null);

    /** GamerPVPSyncC2S needFrames. */
    public needFrames: number[];

    /** GamerPVPSyncC2S crc. */
    public crc: (number|Long)[];

    /** GamerPVPSyncC2S agents. */
    public agents: IPVPInput[];

    /** GamerPVPSyncC2S reconn. */
    public reconn: boolean;

    /** GamerPVPSyncC2S index. */
    public index: number;

    /** GamerPVPSyncC2S addr. */
    public addr: string;

    /** GamerPVPSyncC2S result. */
    public result?: (IPVPResult|null);

    /**
     * Creates a new GamerPVPSyncC2S instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerPVPSyncC2S instance
     */
    public static create(properties?: IGamerPVPSyncC2S): GamerPVPSyncC2S;

    /**
     * Encodes the specified GamerPVPSyncC2S message. Does not implicitly {@link GamerPVPSyncC2S.verify|verify} messages.
     * @param message GamerPVPSyncC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerPVPSyncC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerPVPSyncC2S message, length delimited. Does not implicitly {@link GamerPVPSyncC2S.verify|verify} messages.
     * @param message GamerPVPSyncC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerPVPSyncC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerPVPSyncC2S message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerPVPSyncC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerPVPSyncC2S;

    /**
     * Decodes a GamerPVPSyncC2S message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerPVPSyncC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerPVPSyncC2S;

    /**
     * Verifies a GamerPVPSyncC2S message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerPVPSyncC2S message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerPVPSyncC2S
     */
    public static fromObject(object: { [k: string]: any }): GamerPVPSyncC2S;

    /**
     * Creates a plain object from a GamerPVPSyncC2S message. Also converts values to other types if specified.
     * @param message GamerPVPSyncC2S
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerPVPSyncC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerPVPSyncC2S to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerPVPSyncS2C. */
export interface IGamerPVPSyncS2C {

    /** GamerPVPSyncS2C error */
    error?: (number|null);
}

/** Represents a GamerPVPSyncS2C. */
export class GamerPVPSyncS2C implements IGamerPVPSyncS2C {

    /**
     * Constructs a new GamerPVPSyncS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerPVPSyncS2C);

    /** GamerPVPSyncS2C error. */
    public error: number;

    /**
     * Creates a new GamerPVPSyncS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerPVPSyncS2C instance
     */
    public static create(properties?: IGamerPVPSyncS2C): GamerPVPSyncS2C;

    /**
     * Encodes the specified GamerPVPSyncS2C message. Does not implicitly {@link GamerPVPSyncS2C.verify|verify} messages.
     * @param message GamerPVPSyncS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerPVPSyncS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerPVPSyncS2C message, length delimited. Does not implicitly {@link GamerPVPSyncS2C.verify|verify} messages.
     * @param message GamerPVPSyncS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerPVPSyncS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerPVPSyncS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerPVPSyncS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerPVPSyncS2C;

    /**
     * Decodes a GamerPVPSyncS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerPVPSyncS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerPVPSyncS2C;

    /**
     * Verifies a GamerPVPSyncS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerPVPSyncS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerPVPSyncS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerPVPSyncS2C;

    /**
     * Creates a plain object from a GamerPVPSyncS2C message. Also converts values to other types if specified.
     * @param message GamerPVPSyncS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerPVPSyncS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerPVPSyncS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerNotifyGamerMiniS2C. */
export interface IGamerNotifyGamerMiniS2C {

    /** GamerNotifyGamerMiniS2C error */
    error?: (number|null);

    /** GamerNotifyGamerMiniS2C mini */
    mini?: (IGamerMini|null);
}

/** Represents a GamerNotifyGamerMiniS2C. */
export class GamerNotifyGamerMiniS2C implements IGamerNotifyGamerMiniS2C {

    /**
     * Constructs a new GamerNotifyGamerMiniS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerNotifyGamerMiniS2C);

    /** GamerNotifyGamerMiniS2C error. */
    public error: number;

    /** GamerNotifyGamerMiniS2C mini. */
    public mini?: (IGamerMini|null);

    /**
     * Creates a new GamerNotifyGamerMiniS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerNotifyGamerMiniS2C instance
     */
    public static create(properties?: IGamerNotifyGamerMiniS2C): GamerNotifyGamerMiniS2C;

    /**
     * Encodes the specified GamerNotifyGamerMiniS2C message. Does not implicitly {@link GamerNotifyGamerMiniS2C.verify|verify} messages.
     * @param message GamerNotifyGamerMiniS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerNotifyGamerMiniS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerNotifyGamerMiniS2C message, length delimited. Does not implicitly {@link GamerNotifyGamerMiniS2C.verify|verify} messages.
     * @param message GamerNotifyGamerMiniS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerNotifyGamerMiniS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerNotifyGamerMiniS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerNotifyGamerMiniS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyGamerMiniS2C;

    /**
     * Decodes a GamerNotifyGamerMiniS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerNotifyGamerMiniS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyGamerMiniS2C;

    /**
     * Verifies a GamerNotifyGamerMiniS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerNotifyGamerMiniS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerNotifyGamerMiniS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerNotifyGamerMiniS2C;

    /**
     * Creates a plain object from a GamerNotifyGamerMiniS2C message. Also converts values to other types if specified.
     * @param message GamerNotifyGamerMiniS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerNotifyGamerMiniS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerNotifyGamerMiniS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerNotifyPVPSyncS2C. */
export interface IGamerNotifyPVPSyncS2C {

    /** GamerNotifyPVPSyncS2C error */
    error?: (number|null);

    /** GamerNotifyPVPSyncS2C maxFrameCount */
    maxFrameCount?: (number|null);

    /** GamerNotifyPVPSyncS2C frames */
    frames?: (IPVPFrame[]|null);

    /** GamerNotifyPVPSyncS2C framesData */
    framesData?: (Uint8Array|null);

    /** GamerNotifyPVPSyncS2C frameData */
    frameData?: (Uint8Array[]|null);

    /** GamerNotifyPVPSyncS2C index */
    index?: (number|null);

    /** GamerNotifyPVPSyncS2C delta */
    delta?: (number|null);

    /** GamerNotifyPVPSyncS2C session */
    session?: (string|null);
}

/** Represents a GamerNotifyPVPSyncS2C. */
export class GamerNotifyPVPSyncS2C implements IGamerNotifyPVPSyncS2C {

    /**
     * Constructs a new GamerNotifyPVPSyncS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerNotifyPVPSyncS2C);

    /** GamerNotifyPVPSyncS2C error. */
    public error: number;

    /** GamerNotifyPVPSyncS2C maxFrameCount. */
    public maxFrameCount: number;

    /** GamerNotifyPVPSyncS2C frames. */
    public frames: IPVPFrame[];

    /** GamerNotifyPVPSyncS2C framesData. */
    public framesData: Uint8Array;

    /** GamerNotifyPVPSyncS2C frameData. */
    public frameData: Uint8Array[];

    /** GamerNotifyPVPSyncS2C index. */
    public index: number;

    /** GamerNotifyPVPSyncS2C delta. */
    public delta: number;

    /** GamerNotifyPVPSyncS2C session. */
    public session: string;

    /**
     * Creates a new GamerNotifyPVPSyncS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerNotifyPVPSyncS2C instance
     */
    public static create(properties?: IGamerNotifyPVPSyncS2C): GamerNotifyPVPSyncS2C;

    /**
     * Encodes the specified GamerNotifyPVPSyncS2C message. Does not implicitly {@link GamerNotifyPVPSyncS2C.verify|verify} messages.
     * @param message GamerNotifyPVPSyncS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerNotifyPVPSyncS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerNotifyPVPSyncS2C message, length delimited. Does not implicitly {@link GamerNotifyPVPSyncS2C.verify|verify} messages.
     * @param message GamerNotifyPVPSyncS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerNotifyPVPSyncS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerNotifyPVPSyncS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerNotifyPVPSyncS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyPVPSyncS2C;

    /**
     * Decodes a GamerNotifyPVPSyncS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerNotifyPVPSyncS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyPVPSyncS2C;

    /**
     * Verifies a GamerNotifyPVPSyncS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerNotifyPVPSyncS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerNotifyPVPSyncS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerNotifyPVPSyncS2C;

    /**
     * Creates a plain object from a GamerNotifyPVPSyncS2C message. Also converts values to other types if specified.
     * @param message GamerNotifyPVPSyncS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerNotifyPVPSyncS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerNotifyPVPSyncS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerNotifyNewPVPResultS2C. */
export interface IGamerNotifyNewPVPResultS2C {

    /** GamerNotifyNewPVPResultS2C error */
    error?: (number|null);

    /** GamerNotifyNewPVPResultS2C icon */
    icon?: (number|null);

    /** GamerNotifyNewPVPResultS2C oldLengthRank */
    oldLengthRank?: (number|null);

    /** GamerNotifyNewPVPResultS2C newLengthRank */
    newLengthRank?: (number|null);

    /** GamerNotifyNewPVPResultS2C result */
    result?: (IPVPResult|null);

    /** GamerNotifyNewPVPResultS2C oldLength */
    oldLength?: (number|null);

    /** GamerNotifyNewPVPResultS2C newLength */
    newLength?: (number|null);
}

/** Represents a GamerNotifyNewPVPResultS2C. */
export class GamerNotifyNewPVPResultS2C implements IGamerNotifyNewPVPResultS2C {

    /**
     * Constructs a new GamerNotifyNewPVPResultS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerNotifyNewPVPResultS2C);

    /** GamerNotifyNewPVPResultS2C error. */
    public error: number;

    /** GamerNotifyNewPVPResultS2C icon. */
    public icon: number;

    /** GamerNotifyNewPVPResultS2C oldLengthRank. */
    public oldLengthRank: number;

    /** GamerNotifyNewPVPResultS2C newLengthRank. */
    public newLengthRank: number;

    /** GamerNotifyNewPVPResultS2C result. */
    public result?: (IPVPResult|null);

    /** GamerNotifyNewPVPResultS2C oldLength. */
    public oldLength: number;

    /** GamerNotifyNewPVPResultS2C newLength. */
    public newLength: number;

    /**
     * Creates a new GamerNotifyNewPVPResultS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerNotifyNewPVPResultS2C instance
     */
    public static create(properties?: IGamerNotifyNewPVPResultS2C): GamerNotifyNewPVPResultS2C;

    /**
     * Encodes the specified GamerNotifyNewPVPResultS2C message. Does not implicitly {@link GamerNotifyNewPVPResultS2C.verify|verify} messages.
     * @param message GamerNotifyNewPVPResultS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerNotifyNewPVPResultS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerNotifyNewPVPResultS2C message, length delimited. Does not implicitly {@link GamerNotifyNewPVPResultS2C.verify|verify} messages.
     * @param message GamerNotifyNewPVPResultS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerNotifyNewPVPResultS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerNotifyNewPVPResultS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerNotifyNewPVPResultS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyNewPVPResultS2C;

    /**
     * Decodes a GamerNotifyNewPVPResultS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerNotifyNewPVPResultS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyNewPVPResultS2C;

    /**
     * Verifies a GamerNotifyNewPVPResultS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerNotifyNewPVPResultS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerNotifyNewPVPResultS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerNotifyNewPVPResultS2C;

    /**
     * Creates a plain object from a GamerNotifyNewPVPResultS2C message. Also converts values to other types if specified.
     * @param message GamerNotifyNewPVPResultS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerNotifyNewPVPResultS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerNotifyNewPVPResultS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerPVPStateSyncC2S. */
export interface IGamerPVPStateSyncC2S {

    /** GamerPVPStateSyncC2S id */
    id?: (number|null);

    /** GamerPVPStateSyncC2S session */
    session?: (string|null);

    /** GamerPVPStateSyncC2S result */
    result?: (IPVPResult|null);

    /** GamerPVPStateSyncC2S stateSync */
    stateSync?: (IPVPStateSync|null);
}

/** Represents a GamerPVPStateSyncC2S. */
export class GamerPVPStateSyncC2S implements IGamerPVPStateSyncC2S {

    /**
     * Constructs a new GamerPVPStateSyncC2S.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerPVPStateSyncC2S);

    /** GamerPVPStateSyncC2S id. */
    public id: number;

    /** GamerPVPStateSyncC2S session. */
    public session: string;

    /** GamerPVPStateSyncC2S result. */
    public result?: (IPVPResult|null);

    /** GamerPVPStateSyncC2S stateSync. */
    public stateSync?: (IPVPStateSync|null);

    /**
     * Creates a new GamerPVPStateSyncC2S instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerPVPStateSyncC2S instance
     */
    public static create(properties?: IGamerPVPStateSyncC2S): GamerPVPStateSyncC2S;

    /**
     * Encodes the specified GamerPVPStateSyncC2S message. Does not implicitly {@link GamerPVPStateSyncC2S.verify|verify} messages.
     * @param message GamerPVPStateSyncC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerPVPStateSyncC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerPVPStateSyncC2S message, length delimited. Does not implicitly {@link GamerPVPStateSyncC2S.verify|verify} messages.
     * @param message GamerPVPStateSyncC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerPVPStateSyncC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerPVPStateSyncC2S message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerPVPStateSyncC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerPVPStateSyncC2S;

    /**
     * Decodes a GamerPVPStateSyncC2S message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerPVPStateSyncC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerPVPStateSyncC2S;

    /**
     * Verifies a GamerPVPStateSyncC2S message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerPVPStateSyncC2S message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerPVPStateSyncC2S
     */
    public static fromObject(object: { [k: string]: any }): GamerPVPStateSyncC2S;

    /**
     * Creates a plain object from a GamerPVPStateSyncC2S message. Also converts values to other types if specified.
     * @param message GamerPVPStateSyncC2S
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerPVPStateSyncC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerPVPStateSyncC2S to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerPVPStateSyncS2C. */
export interface IGamerPVPStateSyncS2C {

    /** GamerPVPStateSyncS2C error */
    error?: (number|null);
}

/** Represents a GamerPVPStateSyncS2C. */
export class GamerPVPStateSyncS2C implements IGamerPVPStateSyncS2C {

    /**
     * Constructs a new GamerPVPStateSyncS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerPVPStateSyncS2C);

    /** GamerPVPStateSyncS2C error. */
    public error: number;

    /**
     * Creates a new GamerPVPStateSyncS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerPVPStateSyncS2C instance
     */
    public static create(properties?: IGamerPVPStateSyncS2C): GamerPVPStateSyncS2C;

    /**
     * Encodes the specified GamerPVPStateSyncS2C message. Does not implicitly {@link GamerPVPStateSyncS2C.verify|verify} messages.
     * @param message GamerPVPStateSyncS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerPVPStateSyncS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerPVPStateSyncS2C message, length delimited. Does not implicitly {@link GamerPVPStateSyncS2C.verify|verify} messages.
     * @param message GamerPVPStateSyncS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerPVPStateSyncS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerPVPStateSyncS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerPVPStateSyncS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerPVPStateSyncS2C;

    /**
     * Decodes a GamerPVPStateSyncS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerPVPStateSyncS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerPVPStateSyncS2C;

    /**
     * Verifies a GamerPVPStateSyncS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerPVPStateSyncS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerPVPStateSyncS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerPVPStateSyncS2C;

    /**
     * Creates a plain object from a GamerPVPStateSyncS2C message. Also converts values to other types if specified.
     * @param message GamerPVPStateSyncS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerPVPStateSyncS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerPVPStateSyncS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerNotifyPVPStateSyncS2C. */
export interface IGamerNotifyPVPStateSyncS2C {

    /** GamerNotifyPVPStateSyncS2C stateSync */
    stateSync?: (IPVPStateSync|null);
}

/** Represents a GamerNotifyPVPStateSyncS2C. */
export class GamerNotifyPVPStateSyncS2C implements IGamerNotifyPVPStateSyncS2C {

    /**
     * Constructs a new GamerNotifyPVPStateSyncS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerNotifyPVPStateSyncS2C);

    /** GamerNotifyPVPStateSyncS2C stateSync. */
    public stateSync?: (IPVPStateSync|null);

    /**
     * Creates a new GamerNotifyPVPStateSyncS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerNotifyPVPStateSyncS2C instance
     */
    public static create(properties?: IGamerNotifyPVPStateSyncS2C): GamerNotifyPVPStateSyncS2C;

    /**
     * Encodes the specified GamerNotifyPVPStateSyncS2C message. Does not implicitly {@link GamerNotifyPVPStateSyncS2C.verify|verify} messages.
     * @param message GamerNotifyPVPStateSyncS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerNotifyPVPStateSyncS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerNotifyPVPStateSyncS2C message, length delimited. Does not implicitly {@link GamerNotifyPVPStateSyncS2C.verify|verify} messages.
     * @param message GamerNotifyPVPStateSyncS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerNotifyPVPStateSyncS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerNotifyPVPStateSyncS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerNotifyPVPStateSyncS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyPVPStateSyncS2C;

    /**
     * Decodes a GamerNotifyPVPStateSyncS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerNotifyPVPStateSyncS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyPVPStateSyncS2C;

    /**
     * Verifies a GamerNotifyPVPStateSyncS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerNotifyPVPStateSyncS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerNotifyPVPStateSyncS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerNotifyPVPStateSyncS2C;

    /**
     * Creates a plain object from a GamerNotifyPVPStateSyncS2C message. Also converts values to other types if specified.
     * @param message GamerNotifyPVPStateSyncS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerNotifyPVPStateSyncS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerNotifyPVPStateSyncS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerNotifyIconChangeS2C. */
export interface IGamerNotifyIconChangeS2C {

    /** GamerNotifyIconChangeS2C error */
    error?: (number|null);

    /** GamerNotifyIconChangeS2C icon */
    icon?: (number|null);
}

/** Represents a GamerNotifyIconChangeS2C. */
export class GamerNotifyIconChangeS2C implements IGamerNotifyIconChangeS2C {

    /**
     * Constructs a new GamerNotifyIconChangeS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerNotifyIconChangeS2C);

    /** GamerNotifyIconChangeS2C error. */
    public error: number;

    /** GamerNotifyIconChangeS2C icon. */
    public icon: number;

    /**
     * Creates a new GamerNotifyIconChangeS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerNotifyIconChangeS2C instance
     */
    public static create(properties?: IGamerNotifyIconChangeS2C): GamerNotifyIconChangeS2C;

    /**
     * Encodes the specified GamerNotifyIconChangeS2C message. Does not implicitly {@link GamerNotifyIconChangeS2C.verify|verify} messages.
     * @param message GamerNotifyIconChangeS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerNotifyIconChangeS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerNotifyIconChangeS2C message, length delimited. Does not implicitly {@link GamerNotifyIconChangeS2C.verify|verify} messages.
     * @param message GamerNotifyIconChangeS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerNotifyIconChangeS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerNotifyIconChangeS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerNotifyIconChangeS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyIconChangeS2C;

    /**
     * Decodes a GamerNotifyIconChangeS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerNotifyIconChangeS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyIconChangeS2C;

    /**
     * Verifies a GamerNotifyIconChangeS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerNotifyIconChangeS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerNotifyIconChangeS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerNotifyIconChangeS2C;

    /**
     * Creates a plain object from a GamerNotifyIconChangeS2C message. Also converts values to other types if specified.
     * @param message GamerNotifyIconChangeS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerNotifyIconChangeS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerNotifyIconChangeS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerNotifyDiamonChangeS2C. */
export interface IGamerNotifyDiamonChangeS2C {

    /** GamerNotifyDiamonChangeS2C error */
    error?: (number|null);

    /** GamerNotifyDiamonChangeS2C diamon */
    diamon?: (number|null);
}

/** Represents a GamerNotifyDiamonChangeS2C. */
export class GamerNotifyDiamonChangeS2C implements IGamerNotifyDiamonChangeS2C {

    /**
     * Constructs a new GamerNotifyDiamonChangeS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerNotifyDiamonChangeS2C);

    /** GamerNotifyDiamonChangeS2C error. */
    public error: number;

    /** GamerNotifyDiamonChangeS2C diamon. */
    public diamon: number;

    /**
     * Creates a new GamerNotifyDiamonChangeS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerNotifyDiamonChangeS2C instance
     */
    public static create(properties?: IGamerNotifyDiamonChangeS2C): GamerNotifyDiamonChangeS2C;

    /**
     * Encodes the specified GamerNotifyDiamonChangeS2C message. Does not implicitly {@link GamerNotifyDiamonChangeS2C.verify|verify} messages.
     * @param message GamerNotifyDiamonChangeS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerNotifyDiamonChangeS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerNotifyDiamonChangeS2C message, length delimited. Does not implicitly {@link GamerNotifyDiamonChangeS2C.verify|verify} messages.
     * @param message GamerNotifyDiamonChangeS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerNotifyDiamonChangeS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerNotifyDiamonChangeS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerNotifyDiamonChangeS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyDiamonChangeS2C;

    /**
     * Decodes a GamerNotifyDiamonChangeS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerNotifyDiamonChangeS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyDiamonChangeS2C;

    /**
     * Verifies a GamerNotifyDiamonChangeS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerNotifyDiamonChangeS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerNotifyDiamonChangeS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerNotifyDiamonChangeS2C;

    /**
     * Creates a plain object from a GamerNotifyDiamonChangeS2C message. Also converts values to other types if specified.
     * @param message GamerNotifyDiamonChangeS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerNotifyDiamonChangeS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerNotifyDiamonChangeS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerNotifyEnergyChangeS2C. */
export interface IGamerNotifyEnergyChangeS2C {

    /** GamerNotifyEnergyChangeS2C error */
    error?: (number|null);

    /** GamerNotifyEnergyChangeS2C energy */
    energy?: (number|null);
}

/** Represents a GamerNotifyEnergyChangeS2C. */
export class GamerNotifyEnergyChangeS2C implements IGamerNotifyEnergyChangeS2C {

    /**
     * Constructs a new GamerNotifyEnergyChangeS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerNotifyEnergyChangeS2C);

    /** GamerNotifyEnergyChangeS2C error. */
    public error: number;

    /** GamerNotifyEnergyChangeS2C energy. */
    public energy: number;

    /**
     * Creates a new GamerNotifyEnergyChangeS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerNotifyEnergyChangeS2C instance
     */
    public static create(properties?: IGamerNotifyEnergyChangeS2C): GamerNotifyEnergyChangeS2C;

    /**
     * Encodes the specified GamerNotifyEnergyChangeS2C message. Does not implicitly {@link GamerNotifyEnergyChangeS2C.verify|verify} messages.
     * @param message GamerNotifyEnergyChangeS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerNotifyEnergyChangeS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerNotifyEnergyChangeS2C message, length delimited. Does not implicitly {@link GamerNotifyEnergyChangeS2C.verify|verify} messages.
     * @param message GamerNotifyEnergyChangeS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerNotifyEnergyChangeS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerNotifyEnergyChangeS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerNotifyEnergyChangeS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyEnergyChangeS2C;

    /**
     * Decodes a GamerNotifyEnergyChangeS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerNotifyEnergyChangeS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyEnergyChangeS2C;

    /**
     * Verifies a GamerNotifyEnergyChangeS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerNotifyEnergyChangeS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerNotifyEnergyChangeS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerNotifyEnergyChangeS2C;

    /**
     * Creates a plain object from a GamerNotifyEnergyChangeS2C message. Also converts values to other types if specified.
     * @param message GamerNotifyEnergyChangeS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerNotifyEnergyChangeS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerNotifyEnergyChangeS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerNotifyExpChangeS2C. */
export interface IGamerNotifyExpChangeS2C {

    /** GamerNotifyExpChangeS2C error */
    error?: (number|null);

    /** GamerNotifyExpChangeS2C exp */
    exp?: (number|null);
}

/** Represents a GamerNotifyExpChangeS2C. */
export class GamerNotifyExpChangeS2C implements IGamerNotifyExpChangeS2C {

    /**
     * Constructs a new GamerNotifyExpChangeS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerNotifyExpChangeS2C);

    /** GamerNotifyExpChangeS2C error. */
    public error: number;

    /** GamerNotifyExpChangeS2C exp. */
    public exp: number;

    /**
     * Creates a new GamerNotifyExpChangeS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerNotifyExpChangeS2C instance
     */
    public static create(properties?: IGamerNotifyExpChangeS2C): GamerNotifyExpChangeS2C;

    /**
     * Encodes the specified GamerNotifyExpChangeS2C message. Does not implicitly {@link GamerNotifyExpChangeS2C.verify|verify} messages.
     * @param message GamerNotifyExpChangeS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerNotifyExpChangeS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerNotifyExpChangeS2C message, length delimited. Does not implicitly {@link GamerNotifyExpChangeS2C.verify|verify} messages.
     * @param message GamerNotifyExpChangeS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerNotifyExpChangeS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerNotifyExpChangeS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerNotifyExpChangeS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyExpChangeS2C;

    /**
     * Decodes a GamerNotifyExpChangeS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerNotifyExpChangeS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyExpChangeS2C;

    /**
     * Verifies a GamerNotifyExpChangeS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerNotifyExpChangeS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerNotifyExpChangeS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerNotifyExpChangeS2C;

    /**
     * Creates a plain object from a GamerNotifyExpChangeS2C message. Also converts values to other types if specified.
     * @param message GamerNotifyExpChangeS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerNotifyExpChangeS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerNotifyExpChangeS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerGetRealTimeRankC2S. */
export interface IGamerGetRealTimeRankC2S {

    /** GamerGetRealTimeRankC2S id */
    id?: (number|null);
}

/** Represents a GamerGetRealTimeRankC2S. */
export class GamerGetRealTimeRankC2S implements IGamerGetRealTimeRankC2S {

    /**
     * Constructs a new GamerGetRealTimeRankC2S.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerGetRealTimeRankC2S);

    /** GamerGetRealTimeRankC2S id. */
    public id: number;

    /**
     * Creates a new GamerGetRealTimeRankC2S instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerGetRealTimeRankC2S instance
     */
    public static create(properties?: IGamerGetRealTimeRankC2S): GamerGetRealTimeRankC2S;

    /**
     * Encodes the specified GamerGetRealTimeRankC2S message. Does not implicitly {@link GamerGetRealTimeRankC2S.verify|verify} messages.
     * @param message GamerGetRealTimeRankC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerGetRealTimeRankC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerGetRealTimeRankC2S message, length delimited. Does not implicitly {@link GamerGetRealTimeRankC2S.verify|verify} messages.
     * @param message GamerGetRealTimeRankC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerGetRealTimeRankC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerGetRealTimeRankC2S message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerGetRealTimeRankC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerGetRealTimeRankC2S;

    /**
     * Decodes a GamerGetRealTimeRankC2S message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerGetRealTimeRankC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerGetRealTimeRankC2S;

    /**
     * Verifies a GamerGetRealTimeRankC2S message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerGetRealTimeRankC2S message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerGetRealTimeRankC2S
     */
    public static fromObject(object: { [k: string]: any }): GamerGetRealTimeRankC2S;

    /**
     * Creates a plain object from a GamerGetRealTimeRankC2S message. Also converts values to other types if specified.
     * @param message GamerGetRealTimeRankC2S
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerGetRealTimeRankC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerGetRealTimeRankC2S to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerGetRealTimeRankS2C. */
export interface IGamerGetRealTimeRankS2C {

    /** GamerGetRealTimeRankS2C error */
    error?: (number|null);

    /** GamerGetRealTimeRankS2C ranks */
    ranks?: (IRankLength[]|null);
}

/** Represents a GamerGetRealTimeRankS2C. */
export class GamerGetRealTimeRankS2C implements IGamerGetRealTimeRankS2C {

    /**
     * Constructs a new GamerGetRealTimeRankS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerGetRealTimeRankS2C);

    /** GamerGetRealTimeRankS2C error. */
    public error: number;

    /** GamerGetRealTimeRankS2C ranks. */
    public ranks: IRankLength[];

    /**
     * Creates a new GamerGetRealTimeRankS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerGetRealTimeRankS2C instance
     */
    public static create(properties?: IGamerGetRealTimeRankS2C): GamerGetRealTimeRankS2C;

    /**
     * Encodes the specified GamerGetRealTimeRankS2C message. Does not implicitly {@link GamerGetRealTimeRankS2C.verify|verify} messages.
     * @param message GamerGetRealTimeRankS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerGetRealTimeRankS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerGetRealTimeRankS2C message, length delimited. Does not implicitly {@link GamerGetRealTimeRankS2C.verify|verify} messages.
     * @param message GamerGetRealTimeRankS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerGetRealTimeRankS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerGetRealTimeRankS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerGetRealTimeRankS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerGetRealTimeRankS2C;

    /**
     * Decodes a GamerGetRealTimeRankS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerGetRealTimeRankS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerGetRealTimeRankS2C;

    /**
     * Verifies a GamerGetRealTimeRankS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerGetRealTimeRankS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerGetRealTimeRankS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerGetRealTimeRankS2C;

    /**
     * Creates a plain object from a GamerGetRealTimeRankS2C message. Also converts values to other types if specified.
     * @param message GamerGetRealTimeRankS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerGetRealTimeRankS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerGetRealTimeRankS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerCheckPVPBattleC2S. */
export interface IGamerCheckPVPBattleC2S {

    /** GamerCheckPVPBattleC2S id */
    id?: (number|null);

    /** GamerCheckPVPBattleC2S session */
    session?: (string|null);
}

/** Represents a GamerCheckPVPBattleC2S. */
export class GamerCheckPVPBattleC2S implements IGamerCheckPVPBattleC2S {

    /**
     * Constructs a new GamerCheckPVPBattleC2S.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerCheckPVPBattleC2S);

    /** GamerCheckPVPBattleC2S id. */
    public id: number;

    /** GamerCheckPVPBattleC2S session. */
    public session: string;

    /**
     * Creates a new GamerCheckPVPBattleC2S instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerCheckPVPBattleC2S instance
     */
    public static create(properties?: IGamerCheckPVPBattleC2S): GamerCheckPVPBattleC2S;

    /**
     * Encodes the specified GamerCheckPVPBattleC2S message. Does not implicitly {@link GamerCheckPVPBattleC2S.verify|verify} messages.
     * @param message GamerCheckPVPBattleC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerCheckPVPBattleC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerCheckPVPBattleC2S message, length delimited. Does not implicitly {@link GamerCheckPVPBattleC2S.verify|verify} messages.
     * @param message GamerCheckPVPBattleC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerCheckPVPBattleC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerCheckPVPBattleC2S message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerCheckPVPBattleC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerCheckPVPBattleC2S;

    /**
     * Decodes a GamerCheckPVPBattleC2S message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerCheckPVPBattleC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerCheckPVPBattleC2S;

    /**
     * Verifies a GamerCheckPVPBattleC2S message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerCheckPVPBattleC2S message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerCheckPVPBattleC2S
     */
    public static fromObject(object: { [k: string]: any }): GamerCheckPVPBattleC2S;

    /**
     * Creates a plain object from a GamerCheckPVPBattleC2S message. Also converts values to other types if specified.
     * @param message GamerCheckPVPBattleC2S
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerCheckPVPBattleC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerCheckPVPBattleC2S to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerCheckPVPBattleS2C. */
export interface IGamerCheckPVPBattleS2C {

    /** GamerCheckPVPBattleS2C error */
    error?: (number|null);

    /** GamerCheckPVPBattleS2C matchInfo */
    matchInfo?: (IMatchInfo|null);
}

/** Represents a GamerCheckPVPBattleS2C. */
export class GamerCheckPVPBattleS2C implements IGamerCheckPVPBattleS2C {

    /**
     * Constructs a new GamerCheckPVPBattleS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerCheckPVPBattleS2C);

    /** GamerCheckPVPBattleS2C error. */
    public error: number;

    /** GamerCheckPVPBattleS2C matchInfo. */
    public matchInfo?: (IMatchInfo|null);

    /**
     * Creates a new GamerCheckPVPBattleS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerCheckPVPBattleS2C instance
     */
    public static create(properties?: IGamerCheckPVPBattleS2C): GamerCheckPVPBattleS2C;

    /**
     * Encodes the specified GamerCheckPVPBattleS2C message. Does not implicitly {@link GamerCheckPVPBattleS2C.verify|verify} messages.
     * @param message GamerCheckPVPBattleS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerCheckPVPBattleS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerCheckPVPBattleS2C message, length delimited. Does not implicitly {@link GamerCheckPVPBattleS2C.verify|verify} messages.
     * @param message GamerCheckPVPBattleS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerCheckPVPBattleS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerCheckPVPBattleS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerCheckPVPBattleS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerCheckPVPBattleS2C;

    /**
     * Decodes a GamerCheckPVPBattleS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerCheckPVPBattleS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerCheckPVPBattleS2C;

    /**
     * Verifies a GamerCheckPVPBattleS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerCheckPVPBattleS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerCheckPVPBattleS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerCheckPVPBattleS2C;

    /**
     * Creates a plain object from a GamerCheckPVPBattleS2C message. Also converts values to other types if specified.
     * @param message GamerCheckPVPBattleS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerCheckPVPBattleS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerCheckPVPBattleS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerUploadWXInfoC2S. */
export interface IGamerUploadWXInfoC2S {

    /** GamerUploadWXInfoC2S id */
    id?: (number|null);

    /** GamerUploadWXInfoC2S wxInfo */
    wxInfo?: (IWXInfo|null);
}

/** Represents a GamerUploadWXInfoC2S. */
export class GamerUploadWXInfoC2S implements IGamerUploadWXInfoC2S {

    /**
     * Constructs a new GamerUploadWXInfoC2S.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerUploadWXInfoC2S);

    /** GamerUploadWXInfoC2S id. */
    public id: number;

    /** GamerUploadWXInfoC2S wxInfo. */
    public wxInfo?: (IWXInfo|null);

    /**
     * Creates a new GamerUploadWXInfoC2S instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerUploadWXInfoC2S instance
     */
    public static create(properties?: IGamerUploadWXInfoC2S): GamerUploadWXInfoC2S;

    /**
     * Encodes the specified GamerUploadWXInfoC2S message. Does not implicitly {@link GamerUploadWXInfoC2S.verify|verify} messages.
     * @param message GamerUploadWXInfoC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerUploadWXInfoC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerUploadWXInfoC2S message, length delimited. Does not implicitly {@link GamerUploadWXInfoC2S.verify|verify} messages.
     * @param message GamerUploadWXInfoC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerUploadWXInfoC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerUploadWXInfoC2S message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerUploadWXInfoC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerUploadWXInfoC2S;

    /**
     * Decodes a GamerUploadWXInfoC2S message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerUploadWXInfoC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerUploadWXInfoC2S;

    /**
     * Verifies a GamerUploadWXInfoC2S message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerUploadWXInfoC2S message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerUploadWXInfoC2S
     */
    public static fromObject(object: { [k: string]: any }): GamerUploadWXInfoC2S;

    /**
     * Creates a plain object from a GamerUploadWXInfoC2S message. Also converts values to other types if specified.
     * @param message GamerUploadWXInfoC2S
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerUploadWXInfoC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerUploadWXInfoC2S to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerUploadWXInfoS2C. */
export interface IGamerUploadWXInfoS2C {

    /** GamerUploadWXInfoS2C error */
    error?: (number|null);
}

/** Represents a GamerUploadWXInfoS2C. */
export class GamerUploadWXInfoS2C implements IGamerUploadWXInfoS2C {

    /**
     * Constructs a new GamerUploadWXInfoS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerUploadWXInfoS2C);

    /** GamerUploadWXInfoS2C error. */
    public error: number;

    /**
     * Creates a new GamerUploadWXInfoS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerUploadWXInfoS2C instance
     */
    public static create(properties?: IGamerUploadWXInfoS2C): GamerUploadWXInfoS2C;

    /**
     * Encodes the specified GamerUploadWXInfoS2C message. Does not implicitly {@link GamerUploadWXInfoS2C.verify|verify} messages.
     * @param message GamerUploadWXInfoS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerUploadWXInfoS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerUploadWXInfoS2C message, length delimited. Does not implicitly {@link GamerUploadWXInfoS2C.verify|verify} messages.
     * @param message GamerUploadWXInfoS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerUploadWXInfoS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerUploadWXInfoS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerUploadWXInfoS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerUploadWXInfoS2C;

    /**
     * Decodes a GamerUploadWXInfoS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerUploadWXInfoS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerUploadWXInfoS2C;

    /**
     * Verifies a GamerUploadWXInfoS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerUploadWXInfoS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerUploadWXInfoS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerUploadWXInfoS2C;

    /**
     * Creates a plain object from a GamerUploadWXInfoS2C message. Also converts values to other types if specified.
     * @param message GamerUploadWXInfoS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerUploadWXInfoS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerUploadWXInfoS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerNewRoomC2S. */
export interface IGamerNewRoomC2S {

    /** GamerNewRoomC2S id */
    id?: (number|null);

    /** GamerNewRoomC2S type */
    type?: (number|null);

    /** GamerNewRoomC2S hero */
    hero?: (number|null);
}

/** Represents a GamerNewRoomC2S. */
export class GamerNewRoomC2S implements IGamerNewRoomC2S {

    /**
     * Constructs a new GamerNewRoomC2S.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerNewRoomC2S);

    /** GamerNewRoomC2S id. */
    public id: number;

    /** GamerNewRoomC2S type. */
    public type: number;

    /** GamerNewRoomC2S hero. */
    public hero: number;

    /**
     * Creates a new GamerNewRoomC2S instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerNewRoomC2S instance
     */
    public static create(properties?: IGamerNewRoomC2S): GamerNewRoomC2S;

    /**
     * Encodes the specified GamerNewRoomC2S message. Does not implicitly {@link GamerNewRoomC2S.verify|verify} messages.
     * @param message GamerNewRoomC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerNewRoomC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerNewRoomC2S message, length delimited. Does not implicitly {@link GamerNewRoomC2S.verify|verify} messages.
     * @param message GamerNewRoomC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerNewRoomC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerNewRoomC2S message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerNewRoomC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNewRoomC2S;

    /**
     * Decodes a GamerNewRoomC2S message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerNewRoomC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNewRoomC2S;

    /**
     * Verifies a GamerNewRoomC2S message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerNewRoomC2S message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerNewRoomC2S
     */
    public static fromObject(object: { [k: string]: any }): GamerNewRoomC2S;

    /**
     * Creates a plain object from a GamerNewRoomC2S message. Also converts values to other types if specified.
     * @param message GamerNewRoomC2S
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerNewRoomC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerNewRoomC2S to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerNewRoomS2C. */
export interface IGamerNewRoomS2C {

    /** GamerNewRoomS2C error */
    error?: (number|null);

    /** GamerNewRoomS2C room */
    room?: (IRoomInfo|null);
}

/** Represents a GamerNewRoomS2C. */
export class GamerNewRoomS2C implements IGamerNewRoomS2C {

    /**
     * Constructs a new GamerNewRoomS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerNewRoomS2C);

    /** GamerNewRoomS2C error. */
    public error: number;

    /** GamerNewRoomS2C room. */
    public room?: (IRoomInfo|null);

    /**
     * Creates a new GamerNewRoomS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerNewRoomS2C instance
     */
    public static create(properties?: IGamerNewRoomS2C): GamerNewRoomS2C;

    /**
     * Encodes the specified GamerNewRoomS2C message. Does not implicitly {@link GamerNewRoomS2C.verify|verify} messages.
     * @param message GamerNewRoomS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerNewRoomS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerNewRoomS2C message, length delimited. Does not implicitly {@link GamerNewRoomS2C.verify|verify} messages.
     * @param message GamerNewRoomS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerNewRoomS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerNewRoomS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerNewRoomS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNewRoomS2C;

    /**
     * Decodes a GamerNewRoomS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerNewRoomS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNewRoomS2C;

    /**
     * Verifies a GamerNewRoomS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerNewRoomS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerNewRoomS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerNewRoomS2C;

    /**
     * Creates a plain object from a GamerNewRoomS2C message. Also converts values to other types if specified.
     * @param message GamerNewRoomS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerNewRoomS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerNewRoomS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerAddRoomC2S. */
export interface IGamerAddRoomC2S {

    /** GamerAddRoomC2S id */
    id?: (number|null);

    /** GamerAddRoomC2S roomId */
    roomId?: (number|null);

    /** GamerAddRoomC2S hero */
    hero?: (number|null);
}

/** Represents a GamerAddRoomC2S. */
export class GamerAddRoomC2S implements IGamerAddRoomC2S {

    /**
     * Constructs a new GamerAddRoomC2S.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerAddRoomC2S);

    /** GamerAddRoomC2S id. */
    public id: number;

    /** GamerAddRoomC2S roomId. */
    public roomId: number;

    /** GamerAddRoomC2S hero. */
    public hero: number;

    /**
     * Creates a new GamerAddRoomC2S instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerAddRoomC2S instance
     */
    public static create(properties?: IGamerAddRoomC2S): GamerAddRoomC2S;

    /**
     * Encodes the specified GamerAddRoomC2S message. Does not implicitly {@link GamerAddRoomC2S.verify|verify} messages.
     * @param message GamerAddRoomC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerAddRoomC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerAddRoomC2S message, length delimited. Does not implicitly {@link GamerAddRoomC2S.verify|verify} messages.
     * @param message GamerAddRoomC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerAddRoomC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerAddRoomC2S message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerAddRoomC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerAddRoomC2S;

    /**
     * Decodes a GamerAddRoomC2S message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerAddRoomC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerAddRoomC2S;

    /**
     * Verifies a GamerAddRoomC2S message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerAddRoomC2S message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerAddRoomC2S
     */
    public static fromObject(object: { [k: string]: any }): GamerAddRoomC2S;

    /**
     * Creates a plain object from a GamerAddRoomC2S message. Also converts values to other types if specified.
     * @param message GamerAddRoomC2S
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerAddRoomC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerAddRoomC2S to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerAddRoomS2C. */
export interface IGamerAddRoomS2C {

    /** GamerAddRoomS2C error */
    error?: (number|null);
}

/** Represents a GamerAddRoomS2C. */
export class GamerAddRoomS2C implements IGamerAddRoomS2C {

    /**
     * Constructs a new GamerAddRoomS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerAddRoomS2C);

    /** GamerAddRoomS2C error. */
    public error: number;

    /**
     * Creates a new GamerAddRoomS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerAddRoomS2C instance
     */
    public static create(properties?: IGamerAddRoomS2C): GamerAddRoomS2C;

    /**
     * Encodes the specified GamerAddRoomS2C message. Does not implicitly {@link GamerAddRoomS2C.verify|verify} messages.
     * @param message GamerAddRoomS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerAddRoomS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerAddRoomS2C message, length delimited. Does not implicitly {@link GamerAddRoomS2C.verify|verify} messages.
     * @param message GamerAddRoomS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerAddRoomS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerAddRoomS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerAddRoomS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerAddRoomS2C;

    /**
     * Decodes a GamerAddRoomS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerAddRoomS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerAddRoomS2C;

    /**
     * Verifies a GamerAddRoomS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerAddRoomS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerAddRoomS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerAddRoomS2C;

    /**
     * Creates a plain object from a GamerAddRoomS2C message. Also converts values to other types if specified.
     * @param message GamerAddRoomS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerAddRoomS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerAddRoomS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerLeaveRoomC2S. */
export interface IGamerLeaveRoomC2S {

    /** GamerLeaveRoomC2S id */
    id?: (number|null);

    /** GamerLeaveRoomC2S roomId */
    roomId?: (number|null);
}

/** Represents a GamerLeaveRoomC2S. */
export class GamerLeaveRoomC2S implements IGamerLeaveRoomC2S {

    /**
     * Constructs a new GamerLeaveRoomC2S.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerLeaveRoomC2S);

    /** GamerLeaveRoomC2S id. */
    public id: number;

    /** GamerLeaveRoomC2S roomId. */
    public roomId: number;

    /**
     * Creates a new GamerLeaveRoomC2S instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerLeaveRoomC2S instance
     */
    public static create(properties?: IGamerLeaveRoomC2S): GamerLeaveRoomC2S;

    /**
     * Encodes the specified GamerLeaveRoomC2S message. Does not implicitly {@link GamerLeaveRoomC2S.verify|verify} messages.
     * @param message GamerLeaveRoomC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerLeaveRoomC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerLeaveRoomC2S message, length delimited. Does not implicitly {@link GamerLeaveRoomC2S.verify|verify} messages.
     * @param message GamerLeaveRoomC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerLeaveRoomC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerLeaveRoomC2S message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerLeaveRoomC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerLeaveRoomC2S;

    /**
     * Decodes a GamerLeaveRoomC2S message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerLeaveRoomC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerLeaveRoomC2S;

    /**
     * Verifies a GamerLeaveRoomC2S message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerLeaveRoomC2S message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerLeaveRoomC2S
     */
    public static fromObject(object: { [k: string]: any }): GamerLeaveRoomC2S;

    /**
     * Creates a plain object from a GamerLeaveRoomC2S message. Also converts values to other types if specified.
     * @param message GamerLeaveRoomC2S
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerLeaveRoomC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerLeaveRoomC2S to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerLeaveRoomS2C. */
export interface IGamerLeaveRoomS2C {

    /** GamerLeaveRoomS2C error */
    error?: (number|null);
}

/** Represents a GamerLeaveRoomS2C. */
export class GamerLeaveRoomS2C implements IGamerLeaveRoomS2C {

    /**
     * Constructs a new GamerLeaveRoomS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerLeaveRoomS2C);

    /** GamerLeaveRoomS2C error. */
    public error: number;

    /**
     * Creates a new GamerLeaveRoomS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerLeaveRoomS2C instance
     */
    public static create(properties?: IGamerLeaveRoomS2C): GamerLeaveRoomS2C;

    /**
     * Encodes the specified GamerLeaveRoomS2C message. Does not implicitly {@link GamerLeaveRoomS2C.verify|verify} messages.
     * @param message GamerLeaveRoomS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerLeaveRoomS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerLeaveRoomS2C message, length delimited. Does not implicitly {@link GamerLeaveRoomS2C.verify|verify} messages.
     * @param message GamerLeaveRoomS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerLeaveRoomS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerLeaveRoomS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerLeaveRoomS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerLeaveRoomS2C;

    /**
     * Decodes a GamerLeaveRoomS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerLeaveRoomS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerLeaveRoomS2C;

    /**
     * Verifies a GamerLeaveRoomS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerLeaveRoomS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerLeaveRoomS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerLeaveRoomS2C;

    /**
     * Creates a plain object from a GamerLeaveRoomS2C message. Also converts values to other types if specified.
     * @param message GamerLeaveRoomS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerLeaveRoomS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerLeaveRoomS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerNotifyRoomInfoChangeS2C. */
export interface IGamerNotifyRoomInfoChangeS2C {

    /** GamerNotifyRoomInfoChangeS2C error */
    error?: (number|null);

    /** GamerNotifyRoomInfoChangeS2C room */
    room?: (IRoomInfo|null);

    /** GamerNotifyRoomInfoChangeS2C cancel */
    cancel?: (boolean|null);
}

/** Represents a GamerNotifyRoomInfoChangeS2C. */
export class GamerNotifyRoomInfoChangeS2C implements IGamerNotifyRoomInfoChangeS2C {

    /**
     * Constructs a new GamerNotifyRoomInfoChangeS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerNotifyRoomInfoChangeS2C);

    /** GamerNotifyRoomInfoChangeS2C error. */
    public error: number;

    /** GamerNotifyRoomInfoChangeS2C room. */
    public room?: (IRoomInfo|null);

    /** GamerNotifyRoomInfoChangeS2C cancel. */
    public cancel: boolean;

    /**
     * Creates a new GamerNotifyRoomInfoChangeS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerNotifyRoomInfoChangeS2C instance
     */
    public static create(properties?: IGamerNotifyRoomInfoChangeS2C): GamerNotifyRoomInfoChangeS2C;

    /**
     * Encodes the specified GamerNotifyRoomInfoChangeS2C message. Does not implicitly {@link GamerNotifyRoomInfoChangeS2C.verify|verify} messages.
     * @param message GamerNotifyRoomInfoChangeS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerNotifyRoomInfoChangeS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerNotifyRoomInfoChangeS2C message, length delimited. Does not implicitly {@link GamerNotifyRoomInfoChangeS2C.verify|verify} messages.
     * @param message GamerNotifyRoomInfoChangeS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerNotifyRoomInfoChangeS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerNotifyRoomInfoChangeS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerNotifyRoomInfoChangeS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyRoomInfoChangeS2C;

    /**
     * Decodes a GamerNotifyRoomInfoChangeS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerNotifyRoomInfoChangeS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyRoomInfoChangeS2C;

    /**
     * Verifies a GamerNotifyRoomInfoChangeS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerNotifyRoomInfoChangeS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerNotifyRoomInfoChangeS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerNotifyRoomInfoChangeS2C;

    /**
     * Creates a plain object from a GamerNotifyRoomInfoChangeS2C message. Also converts values to other types if specified.
     * @param message GamerNotifyRoomInfoChangeS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerNotifyRoomInfoChangeS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerNotifyRoomInfoChangeS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerGetRewardC2S. */
export interface IGamerGetRewardC2S {

    /** GamerGetRewardC2S id */
    id?: (number|null);

    /** GamerGetRewardC2S type */
    type?: (number|null);
}

/** Represents a GamerGetRewardC2S. */
export class GamerGetRewardC2S implements IGamerGetRewardC2S {

    /**
     * Constructs a new GamerGetRewardC2S.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerGetRewardC2S);

    /** GamerGetRewardC2S id. */
    public id: number;

    /** GamerGetRewardC2S type. */
    public type: number;

    /**
     * Creates a new GamerGetRewardC2S instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerGetRewardC2S instance
     */
    public static create(properties?: IGamerGetRewardC2S): GamerGetRewardC2S;

    /**
     * Encodes the specified GamerGetRewardC2S message. Does not implicitly {@link GamerGetRewardC2S.verify|verify} messages.
     * @param message GamerGetRewardC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerGetRewardC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerGetRewardC2S message, length delimited. Does not implicitly {@link GamerGetRewardC2S.verify|verify} messages.
     * @param message GamerGetRewardC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerGetRewardC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerGetRewardC2S message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerGetRewardC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerGetRewardC2S;

    /**
     * Decodes a GamerGetRewardC2S message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerGetRewardC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerGetRewardC2S;

    /**
     * Verifies a GamerGetRewardC2S message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerGetRewardC2S message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerGetRewardC2S
     */
    public static fromObject(object: { [k: string]: any }): GamerGetRewardC2S;

    /**
     * Creates a plain object from a GamerGetRewardC2S message. Also converts values to other types if specified.
     * @param message GamerGetRewardC2S
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerGetRewardC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerGetRewardC2S to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerGetRewardS2C. */
export interface IGamerGetRewardS2C {

    /** GamerGetRewardS2C error */
    error?: (number|null);
}

/** Represents a GamerGetRewardS2C. */
export class GamerGetRewardS2C implements IGamerGetRewardS2C {

    /**
     * Constructs a new GamerGetRewardS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerGetRewardS2C);

    /** GamerGetRewardS2C error. */
    public error: number;

    /**
     * Creates a new GamerGetRewardS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerGetRewardS2C instance
     */
    public static create(properties?: IGamerGetRewardS2C): GamerGetRewardS2C;

    /**
     * Encodes the specified GamerGetRewardS2C message. Does not implicitly {@link GamerGetRewardS2C.verify|verify} messages.
     * @param message GamerGetRewardS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerGetRewardS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerGetRewardS2C message, length delimited. Does not implicitly {@link GamerGetRewardS2C.verify|verify} messages.
     * @param message GamerGetRewardS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerGetRewardS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerGetRewardS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerGetRewardS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerGetRewardS2C;

    /**
     * Decodes a GamerGetRewardS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerGetRewardS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerGetRewardS2C;

    /**
     * Verifies a GamerGetRewardS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerGetRewardS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerGetRewardS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerGetRewardS2C;

    /**
     * Creates a plain object from a GamerGetRewardS2C message. Also converts values to other types if specified.
     * @param message GamerGetRewardS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerGetRewardS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerGetRewardS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerUseIconC2S. */
export interface IGamerUseIconC2S {

    /** GamerUseIconC2S id */
    id?: (number|null);

    /** GamerUseIconC2S type */
    type?: (number|null);

    /** GamerUseIconC2S count */
    count?: (number|null);

    /** GamerUseIconC2S session */
    session?: (string|null);
}

/** Represents a GamerUseIconC2S. */
export class GamerUseIconC2S implements IGamerUseIconC2S {

    /**
     * Constructs a new GamerUseIconC2S.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerUseIconC2S);

    /** GamerUseIconC2S id. */
    public id: number;

    /** GamerUseIconC2S type. */
    public type: number;

    /** GamerUseIconC2S count. */
    public count: number;

    /** GamerUseIconC2S session. */
    public session: string;

    /**
     * Creates a new GamerUseIconC2S instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerUseIconC2S instance
     */
    public static create(properties?: IGamerUseIconC2S): GamerUseIconC2S;

    /**
     * Encodes the specified GamerUseIconC2S message. Does not implicitly {@link GamerUseIconC2S.verify|verify} messages.
     * @param message GamerUseIconC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerUseIconC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerUseIconC2S message, length delimited. Does not implicitly {@link GamerUseIconC2S.verify|verify} messages.
     * @param message GamerUseIconC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerUseIconC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerUseIconC2S message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerUseIconC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerUseIconC2S;

    /**
     * Decodes a GamerUseIconC2S message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerUseIconC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerUseIconC2S;

    /**
     * Verifies a GamerUseIconC2S message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerUseIconC2S message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerUseIconC2S
     */
    public static fromObject(object: { [k: string]: any }): GamerUseIconC2S;

    /**
     * Creates a plain object from a GamerUseIconC2S message. Also converts values to other types if specified.
     * @param message GamerUseIconC2S
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerUseIconC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerUseIconC2S to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerUseIconS2C. */
export interface IGamerUseIconS2C {

    /** GamerUseIconS2C error */
    error?: (number|null);
}

/** Represents a GamerUseIconS2C. */
export class GamerUseIconS2C implements IGamerUseIconS2C {

    /**
     * Constructs a new GamerUseIconS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerUseIconS2C);

    /** GamerUseIconS2C error. */
    public error: number;

    /**
     * Creates a new GamerUseIconS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerUseIconS2C instance
     */
    public static create(properties?: IGamerUseIconS2C): GamerUseIconS2C;

    /**
     * Encodes the specified GamerUseIconS2C message. Does not implicitly {@link GamerUseIconS2C.verify|verify} messages.
     * @param message GamerUseIconS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerUseIconS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerUseIconS2C message, length delimited. Does not implicitly {@link GamerUseIconS2C.verify|verify} messages.
     * @param message GamerUseIconS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerUseIconS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerUseIconS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerUseIconS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerUseIconS2C;

    /**
     * Decodes a GamerUseIconS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerUseIconS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerUseIconS2C;

    /**
     * Verifies a GamerUseIconS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerUseIconS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerUseIconS2C
     */
    public static fromObject(object: { [k: string]: any }): GamerUseIconS2C;

    /**
     * Creates a plain object from a GamerUseIconS2C message. Also converts values to other types if specified.
     * @param message GamerUseIconS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerUseIconS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerUseIconS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** GamerStatus enum. */
export enum GamerStatus {
    Offline = 0,
    Online = 1,
    Teaming = 2,
    Matching = 3,
    Fighting = 4
}

/** ChatChannel enum. */
export enum ChatChannel {
    GamerChat = 0,
    WorldChat = 1
}

/** MailType enum. */
export enum MailType {
    ActivityMail = 0,
    SysMail = 1,
    AnnouncementMail = 2,
    GamerMail = 3
}

/** MailState enum. */
export enum MailState {
    MailUnRead = 0,
    MailRead = 1,
    MailReceived = 2
}

/** Properties of a ServerTime. */
export interface IServerTime {

    /** ServerTime timestamp */
    timestamp?: (number|Long|null);

    /** ServerTime year */
    year?: (number|null);

    /** ServerTime month */
    month?: (number|null);

    /** ServerTime day */
    day?: (number|null);

    /** ServerTime hour */
    hour?: (number|null);

    /** ServerTime minute */
    minute?: (number|null);

    /** ServerTime second */
    second?: (number|null);

    /** ServerTime timezone */
    timezone?: (number|null);
}

/** Represents a ServerTime. */
export class ServerTime implements IServerTime {

    /**
     * Constructs a new ServerTime.
     * @param [properties] Properties to set
     */
    constructor(properties?: IServerTime);

    /** ServerTime timestamp. */
    public timestamp: (number|Long);

    /** ServerTime year. */
    public year: number;

    /** ServerTime month. */
    public month: number;

    /** ServerTime day. */
    public day: number;

    /** ServerTime hour. */
    public hour: number;

    /** ServerTime minute. */
    public minute: number;

    /** ServerTime second. */
    public second: number;

    /** ServerTime timezone. */
    public timezone: number;

    /**
     * Creates a new ServerTime instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ServerTime instance
     */
    public static create(properties?: IServerTime): ServerTime;

    /**
     * Encodes the specified ServerTime message. Does not implicitly {@link ServerTime.verify|verify} messages.
     * @param message ServerTime message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IServerTime, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ServerTime message, length delimited. Does not implicitly {@link ServerTime.verify|verify} messages.
     * @param message ServerTime message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IServerTime, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ServerTime message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ServerTime
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerTime;

    /**
     * Decodes a ServerTime message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ServerTime
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerTime;

    /**
     * Verifies a ServerTime message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ServerTime message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ServerTime
     */
    public static fromObject(object: { [k: string]: any }): ServerTime;

    /**
     * Creates a plain object from a ServerTime message. Also converts values to other types if specified.
     * @param message ServerTime
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ServerTime, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ServerTime to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GameItem. */
export interface IGameItem {

    /** GameItem id */
    id?: (number|null);

    /** GameItem count */
    count?: (number|null);
}

/** Represents a GameItem. */
export class GameItem implements IGameItem {

    /**
     * Constructs a new GameItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameItem);

    /** GameItem id. */
    public id: number;

    /** GameItem count. */
    public count: number;

    /**
     * Creates a new GameItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameItem instance
     */
    public static create(properties?: IGameItem): GameItem;

    /**
     * Encodes the specified GameItem message. Does not implicitly {@link GameItem.verify|verify} messages.
     * @param message GameItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GameItem message, length delimited. Does not implicitly {@link GameItem.verify|verify} messages.
     * @param message GameItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGameItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameItem;

    /**
     * Decodes a GameItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GameItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameItem;

    /**
     * Verifies a GameItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GameItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GameItem
     */
    public static fromObject(object: { [k: string]: any }): GameItem;

    /**
     * Creates a plain object from a GameItem message. Also converts values to other types if specified.
     * @param message GameItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GameItem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TimeRecord. */
export interface ITimeRecord {

    /** TimeRecord lastSign */
    lastSign?: (number|Long|null);

    /** TimeRecord lastGetPVPResult */
    lastGetPVPResult?: (number|Long|null);

    /** TimeRecord lastWeekRec */
    lastWeekRec?: (number|Long|null);

    /** TimeRecord totalTime */
    totalTime?: (number|null);
}

/** Represents a TimeRecord. */
export class TimeRecord implements ITimeRecord {

    /**
     * Constructs a new TimeRecord.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITimeRecord);

    /** TimeRecord lastSign. */
    public lastSign: (number|Long);

    /** TimeRecord lastGetPVPResult. */
    public lastGetPVPResult: (number|Long);

    /** TimeRecord lastWeekRec. */
    public lastWeekRec: (number|Long);

    /** TimeRecord totalTime. */
    public totalTime: number;

    /**
     * Creates a new TimeRecord instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TimeRecord instance
     */
    public static create(properties?: ITimeRecord): TimeRecord;

    /**
     * Encodes the specified TimeRecord message. Does not implicitly {@link TimeRecord.verify|verify} messages.
     * @param message TimeRecord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITimeRecord, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TimeRecord message, length delimited. Does not implicitly {@link TimeRecord.verify|verify} messages.
     * @param message TimeRecord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITimeRecord, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TimeRecord message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TimeRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TimeRecord;

    /**
     * Decodes a TimeRecord message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TimeRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TimeRecord;

    /**
     * Verifies a TimeRecord message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TimeRecord message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TimeRecord
     */
    public static fromObject(object: { [k: string]: any }): TimeRecord;

    /**
     * Creates a plain object from a TimeRecord message. Also converts values to other types if specified.
     * @param message TimeRecord
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TimeRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TimeRecord to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a NumberRecord. */
export interface INumberRecord {

    /** NumberRecord elo */
    elo?: (number|null);

    /** NumberRecord normWin */
    normWin?: (number|null);

    /** NumberRecord totalSignIn */
    totalSignIn?: (number|null);

    /** NumberRecord weekTotalSign */
    weekTotalSign?: (number|null);

    /** NumberRecord weekGoldGet */
    weekGoldGet?: (number|null);

    /** NumberRecord weekExpGet */
    weekExpGet?: (number|null);
}

/** Represents a NumberRecord. */
export class NumberRecord implements INumberRecord {

    /**
     * Constructs a new NumberRecord.
     * @param [properties] Properties to set
     */
    constructor(properties?: INumberRecord);

    /** NumberRecord elo. */
    public elo: number;

    /** NumberRecord normWin. */
    public normWin: number;

    /** NumberRecord totalSignIn. */
    public totalSignIn: number;

    /** NumberRecord weekTotalSign. */
    public weekTotalSign: number;

    /** NumberRecord weekGoldGet. */
    public weekGoldGet: number;

    /** NumberRecord weekExpGet. */
    public weekExpGet: number;

    /**
     * Creates a new NumberRecord instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NumberRecord instance
     */
    public static create(properties?: INumberRecord): NumberRecord;

    /**
     * Encodes the specified NumberRecord message. Does not implicitly {@link NumberRecord.verify|verify} messages.
     * @param message NumberRecord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INumberRecord, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NumberRecord message, length delimited. Does not implicitly {@link NumberRecord.verify|verify} messages.
     * @param message NumberRecord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INumberRecord, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NumberRecord message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NumberRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NumberRecord;

    /**
     * Decodes a NumberRecord message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NumberRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NumberRecord;

    /**
     * Verifies a NumberRecord message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NumberRecord message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NumberRecord
     */
    public static fromObject(object: { [k: string]: any }): NumberRecord;

    /**
     * Creates a plain object from a NumberRecord message. Also converts values to other types if specified.
     * @param message NumberRecord
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NumberRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NumberRecord to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a WXInfo. */
export interface IWXInfo {

    /** WXInfo avatarUrl */
    avatarUrl?: (string|null);

    /** WXInfo city */
    city?: (string|null);

    /** WXInfo gender */
    gender?: (number|null);

    /** WXInfo openId */
    openId?: (string|null);

    /** WXInfo language */
    language?: (string|null);

    /** WXInfo nickName */
    nickName?: (string|null);

    /** WXInfo province */
    province?: (string|null);

    /** WXInfo unionId */
    unionId?: (string|null);

    /** WXInfo country */
    country?: (string|null);

    /** WXInfo sessionId */
    sessionId?: (string|null);

    /** WXInfo sign */
    sign?: (string|null);
}

/** Represents a WXInfo. */
export class WXInfo implements IWXInfo {

    /**
     * Constructs a new WXInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWXInfo);

    /** WXInfo avatarUrl. */
    public avatarUrl: string;

    /** WXInfo city. */
    public city: string;

    /** WXInfo gender. */
    public gender: number;

    /** WXInfo openId. */
    public openId: string;

    /** WXInfo language. */
    public language: string;

    /** WXInfo nickName. */
    public nickName: string;

    /** WXInfo province. */
    public province: string;

    /** WXInfo unionId. */
    public unionId: string;

    /** WXInfo country. */
    public country: string;

    /** WXInfo sessionId. */
    public sessionId: string;

    /** WXInfo sign. */
    public sign: string;

    /**
     * Creates a new WXInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WXInfo instance
     */
    public static create(properties?: IWXInfo): WXInfo;

    /**
     * Encodes the specified WXInfo message. Does not implicitly {@link WXInfo.verify|verify} messages.
     * @param message WXInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWXInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified WXInfo message, length delimited. Does not implicitly {@link WXInfo.verify|verify} messages.
     * @param message WXInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWXInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WXInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WXInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WXInfo;

    /**
     * Decodes a WXInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WXInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WXInfo;

    /**
     * Verifies a WXInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a WXInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WXInfo
     */
    public static fromObject(object: { [k: string]: any }): WXInfo;

    /**
     * Creates a plain object from a WXInfo message. Also converts values to other types if specified.
     * @param message WXInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: WXInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this WXInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerMain. */
export interface IGamerMain {

    /** GamerMain id */
    id?: (number|null);

    /** GamerMain uid */
    uid?: (string|null);

    /** GamerMain lsid */
    lsid?: (number|null);

    /** GamerMain psid */
    psid?: (number|null);

    /** GamerMain state */
    state?: (number|null);

    /** GamerMain name */
    name?: (string|null);

    /** GamerMain level */
    level?: (number|null);

    /** GamerMain session */
    session?: (string|null);

    /** GamerMain create */
    create?: (number|Long|null);

    /** GamerMain lastLogin */
    lastLogin?: (number|Long|null);

    /** GamerMain lastLogout */
    lastLogout?: (number|Long|null);

    /** GamerMain typeId */
    typeId?: (number|null);

    /** GamerMain icon */
    icon?: (number|null);

    /** GamerMain diamond */
    diamond?: (number|null);

    /** GamerMain exp */
    exp?: (number|null);

    /** GamerMain pvpSession */
    pvpSession?: (string|null);

    /** GamerMain avatar */
    avatar?: (string|null);

    /** GamerMain energy */
    energy?: (number|null);
}

/** Represents a GamerMain. */
export class GamerMain implements IGamerMain {

    /**
     * Constructs a new GamerMain.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerMain);

    /** GamerMain id. */
    public id: number;

    /** GamerMain uid. */
    public uid: string;

    /** GamerMain lsid. */
    public lsid: number;

    /** GamerMain psid. */
    public psid: number;

    /** GamerMain state. */
    public state: number;

    /** GamerMain name. */
    public name: string;

    /** GamerMain level. */
    public level: number;

    /** GamerMain session. */
    public session: string;

    /** GamerMain create. */
    public create: (number|Long);

    /** GamerMain lastLogin. */
    public lastLogin: (number|Long);

    /** GamerMain lastLogout. */
    public lastLogout: (number|Long);

    /** GamerMain typeId. */
    public typeId: number;

    /** GamerMain icon. */
    public icon: number;

    /** GamerMain diamond. */
    public diamond: number;

    /** GamerMain exp. */
    public exp: number;

    /** GamerMain pvpSession. */
    public pvpSession: string;

    /** GamerMain avatar. */
    public avatar: string;

    /** GamerMain energy. */
    public energy: number;

    /**
     * Creates a new GamerMain instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerMain instance
     */
    public static create(properties?: IGamerMain): GamerMain;

    /**
     * Encodes the specified GamerMain message. Does not implicitly {@link GamerMain.verify|verify} messages.
     * @param message GamerMain message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerMain, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerMain message, length delimited. Does not implicitly {@link GamerMain.verify|verify} messages.
     * @param message GamerMain message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerMain, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerMain message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerMain
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerMain;

    /**
     * Decodes a GamerMain message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerMain
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerMain;

    /**
     * Verifies a GamerMain message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerMain message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerMain
     */
    public static fromObject(object: { [k: string]: any }): GamerMain;

    /**
     * Creates a plain object from a GamerMain message. Also converts values to other types if specified.
     * @param message GamerMain
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerMain, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerMain to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerMini. */
export interface IGamerMini {

    /** GamerMini id */
    id?: (number|null);

    /** GamerMini name */
    name?: (string|null);

    /** GamerMini level */
    level?: (number|null);

    /** GamerMini lsid */
    lsid?: (number|null);

    /** GamerMini state */
    state?: (number|null);

    /** GamerMini avatar */
    avatar?: (string|null);

    /** GamerMini channel */
    channel?: (string|null);
}

/** Represents a GamerMini. */
export class GamerMini implements IGamerMini {

    /**
     * Constructs a new GamerMini.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerMini);

    /** GamerMini id. */
    public id: number;

    /** GamerMini name. */
    public name: string;

    /** GamerMini level. */
    public level: number;

    /** GamerMini lsid. */
    public lsid: number;

    /** GamerMini state. */
    public state: number;

    /** GamerMini avatar. */
    public avatar: string;

    /** GamerMini channel. */
    public channel: string;

    /**
     * Creates a new GamerMini instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerMini instance
     */
    public static create(properties?: IGamerMini): GamerMini;

    /**
     * Encodes the specified GamerMini message. Does not implicitly {@link GamerMini.verify|verify} messages.
     * @param message GamerMini message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerMini, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerMini message, length delimited. Does not implicitly {@link GamerMini.verify|verify} messages.
     * @param message GamerMini message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerMini, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerMini message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerMini
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerMini;

    /**
     * Decodes a GamerMini message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerMini
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerMini;

    /**
     * Verifies a GamerMini message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerMini message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerMini
     */
    public static fromObject(object: { [k: string]: any }): GamerMini;

    /**
     * Creates a plain object from a GamerMini message. Also converts values to other types if specified.
     * @param message GamerMini
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerMini, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerMini to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerFriendRequest. */
export interface IGamerFriendRequest {

    /** GamerFriendRequest id */
    id?: (number|null);

    /** GamerFriendRequest msg */
    msg?: (string|null);

    /** GamerFriendRequest time */
    time?: (number|Long|null);

    /** GamerFriendRequest gamerInfo */
    gamerInfo?: (IGamerMini|null);
}

/** Represents a GamerFriendRequest. */
export class GamerFriendRequest implements IGamerFriendRequest {

    /**
     * Constructs a new GamerFriendRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerFriendRequest);

    /** GamerFriendRequest id. */
    public id: number;

    /** GamerFriendRequest msg. */
    public msg: string;

    /** GamerFriendRequest time. */
    public time: (number|Long);

    /** GamerFriendRequest gamerInfo. */
    public gamerInfo?: (IGamerMini|null);

    /**
     * Creates a new GamerFriendRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerFriendRequest instance
     */
    public static create(properties?: IGamerFriendRequest): GamerFriendRequest;

    /**
     * Encodes the specified GamerFriendRequest message. Does not implicitly {@link GamerFriendRequest.verify|verify} messages.
     * @param message GamerFriendRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerFriendRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerFriendRequest message, length delimited. Does not implicitly {@link GamerFriendRequest.verify|verify} messages.
     * @param message GamerFriendRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerFriendRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerFriendRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerFriendRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerFriendRequest;

    /**
     * Decodes a GamerFriendRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerFriendRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerFriendRequest;

    /**
     * Verifies a GamerFriendRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerFriendRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerFriendRequest
     */
    public static fromObject(object: { [k: string]: any }): GamerFriendRequest;

    /**
     * Creates a plain object from a GamerFriendRequest message. Also converts values to other types if specified.
     * @param message GamerFriendRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerFriendRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerFriendRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerBlack. */
export interface IGamerBlack {

    /** GamerBlack id */
    id?: (number|null);
}

/** Represents a GamerBlack. */
export class GamerBlack implements IGamerBlack {

    /**
     * Constructs a new GamerBlack.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerBlack);

    /** GamerBlack id. */
    public id: number;

    /**
     * Creates a new GamerBlack instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerBlack instance
     */
    public static create(properties?: IGamerBlack): GamerBlack;

    /**
     * Encodes the specified GamerBlack message. Does not implicitly {@link GamerBlack.verify|verify} messages.
     * @param message GamerBlack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerBlack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerBlack message, length delimited. Does not implicitly {@link GamerBlack.verify|verify} messages.
     * @param message GamerBlack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerBlack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerBlack message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerBlack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerBlack;

    /**
     * Decodes a GamerBlack message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerBlack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerBlack;

    /**
     * Verifies a GamerBlack message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerBlack message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerBlack
     */
    public static fromObject(object: { [k: string]: any }): GamerBlack;

    /**
     * Creates a plain object from a GamerBlack message. Also converts values to other types if specified.
     * @param message GamerBlack
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerBlack, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerBlack to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerFriend. */
export interface IGamerFriend {

    /** GamerFriend id */
    id?: (number|null);

    /** GamerFriend time */
    time?: (number|Long|null);

    /** GamerFriend gamerInfo */
    gamerInfo?: (IGamerMini|null);
}

/** Represents a GamerFriend. */
export class GamerFriend implements IGamerFriend {

    /**
     * Constructs a new GamerFriend.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerFriend);

    /** GamerFriend id. */
    public id: number;

    /** GamerFriend time. */
    public time: (number|Long);

    /** GamerFriend gamerInfo. */
    public gamerInfo?: (IGamerMini|null);

    /**
     * Creates a new GamerFriend instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerFriend instance
     */
    public static create(properties?: IGamerFriend): GamerFriend;

    /**
     * Encodes the specified GamerFriend message. Does not implicitly {@link GamerFriend.verify|verify} messages.
     * @param message GamerFriend message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerFriend, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerFriend message, length delimited. Does not implicitly {@link GamerFriend.verify|verify} messages.
     * @param message GamerFriend message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerFriend, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerFriend message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerFriend
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerFriend;

    /**
     * Decodes a GamerFriend message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerFriend
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerFriend;

    /**
     * Verifies a GamerFriend message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerFriend message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerFriend
     */
    public static fromObject(object: { [k: string]: any }): GamerFriend;

    /**
     * Creates a plain object from a GamerFriend message. Also converts values to other types if specified.
     * @param message GamerFriend
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerFriend, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerFriend to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ChatData. */
export interface IChatData {

    /** ChatData from */
    from?: (number|null);

    /** ChatData time */
    time?: (number|Long|null);

    /** ChatData msg */
    msg?: (string|null);

    /** ChatData channel */
    channel?: (number|null);

    /** ChatData gamerInfo */
    gamerInfo?: (IGamerMini|null);
}

/** Represents a ChatData. */
export class ChatData implements IChatData {

    /**
     * Constructs a new ChatData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChatData);

    /** ChatData from. */
    public from: number;

    /** ChatData time. */
    public time: (number|Long);

    /** ChatData msg. */
    public msg: string;

    /** ChatData channel. */
    public channel: number;

    /** ChatData gamerInfo. */
    public gamerInfo?: (IGamerMini|null);

    /**
     * Creates a new ChatData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChatData instance
     */
    public static create(properties?: IChatData): ChatData;

    /**
     * Encodes the specified ChatData message. Does not implicitly {@link ChatData.verify|verify} messages.
     * @param message ChatData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChatData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChatData message, length delimited. Does not implicitly {@link ChatData.verify|verify} messages.
     * @param message ChatData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IChatData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChatData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChatData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatData;

    /**
     * Decodes a ChatData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChatData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChatData;

    /**
     * Verifies a ChatData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ChatData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChatData
     */
    public static fromObject(object: { [k: string]: any }): ChatData;

    /**
     * Creates a plain object from a ChatData message. Also converts values to other types if specified.
     * @param message ChatData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ChatData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ChatData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Mail. */
export interface IMail {

    /** Mail id */
    id?: (string|null);

    /** Mail mailType */
    mailType?: (number|null);

    /** Mail time */
    time?: (number|Long|null);

    /** Mail theme */
    theme?: (string|null);

    /** Mail msg */
    msg?: (string|null);

    /** Mail attachments */
    attachments?: (IGameItem[]|null);

    /** Mail state */
    state?: (number|null);

    /** Mail serverId */
    serverId?: (number|null);

    /** Mail senderId */
    senderId?: (number|null);

    /** Mail level */
    level?: (number|null);

    /** Mail endTime */
    endTime?: (number|Long|null);

    /** Mail isDel */
    isDel?: (number|null);

    /** Mail cfgId */
    cfgId?: (number|null);

    /** Mail save */
    save?: (boolean|null);

    /** Mail gamerInfo */
    gamerInfo?: (IGamerMini|null);
}

/** Represents a Mail. */
export class Mail implements IMail {

    /**
     * Constructs a new Mail.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMail);

    /** Mail id. */
    public id: string;

    /** Mail mailType. */
    public mailType: number;

    /** Mail time. */
    public time: (number|Long);

    /** Mail theme. */
    public theme: string;

    /** Mail msg. */
    public msg: string;

    /** Mail attachments. */
    public attachments: IGameItem[];

    /** Mail state. */
    public state: number;

    /** Mail serverId. */
    public serverId: number;

    /** Mail senderId. */
    public senderId: number;

    /** Mail level. */
    public level: number;

    /** Mail endTime. */
    public endTime: (number|Long);

    /** Mail isDel. */
    public isDel: number;

    /** Mail cfgId. */
    public cfgId: number;

    /** Mail save. */
    public save: boolean;

    /** Mail gamerInfo. */
    public gamerInfo?: (IGamerMini|null);

    /**
     * Creates a new Mail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Mail instance
     */
    public static create(properties?: IMail): Mail;

    /**
     * Encodes the specified Mail message. Does not implicitly {@link Mail.verify|verify} messages.
     * @param message Mail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Mail message, length delimited. Does not implicitly {@link Mail.verify|verify} messages.
     * @param message Mail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Mail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Mail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mail;

    /**
     * Decodes a Mail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Mail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mail;

    /**
     * Verifies a Mail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Mail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Mail
     */
    public static fromObject(object: { [k: string]: any }): Mail;

    /**
     * Creates a plain object from a Mail message. Also converts values to other types if specified.
     * @param message Mail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Mail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Mail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a BagItem. */
export interface IBagItem {

    /** BagItem id */
    id?: (number|null);

    /** BagItem time */
    time?: (number|Long|null);

    /** BagItem count */
    count?: (number|null);
}

/** Represents a BagItem. */
export class BagItem implements IBagItem {

    /**
     * Constructs a new BagItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBagItem);

    /** BagItem id. */
    public id: number;

    /** BagItem time. */
    public time: (number|Long);

    /** BagItem count. */
    public count: number;

    /**
     * Creates a new BagItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BagItem instance
     */
    public static create(properties?: IBagItem): BagItem;

    /**
     * Encodes the specified BagItem message. Does not implicitly {@link BagItem.verify|verify} messages.
     * @param message BagItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBagItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BagItem message, length delimited. Does not implicitly {@link BagItem.verify|verify} messages.
     * @param message BagItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBagItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BagItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BagItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BagItem;

    /**
     * Decodes a BagItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BagItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BagItem;

    /**
     * Verifies a BagItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BagItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BagItem
     */
    public static fromObject(object: { [k: string]: any }): BagItem;

    /**
     * Creates a plain object from a BagItem message. Also converts values to other types if specified.
     * @param message BagItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BagItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BagItem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerHero. */
export interface IGamerHero {

    /** GamerHero lid */
    lid?: (number|null);

    /** GamerHero id */
    id?: (number|null);

    /** GamerHero level */
    level?: (number|null);

    /** GamerHero chose */
    chose?: (number|null);
}

/** Represents a GamerHero. */
export class GamerHero implements IGamerHero {

    /**
     * Constructs a new GamerHero.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerHero);

    /** GamerHero lid. */
    public lid: number;

    /** GamerHero id. */
    public id: number;

    /** GamerHero level. */
    public level: number;

    /** GamerHero chose. */
    public chose: number;

    /**
     * Creates a new GamerHero instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerHero instance
     */
    public static create(properties?: IGamerHero): GamerHero;

    /**
     * Encodes the specified GamerHero message. Does not implicitly {@link GamerHero.verify|verify} messages.
     * @param message GamerHero message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerHero, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerHero message, length delimited. Does not implicitly {@link GamerHero.verify|verify} messages.
     * @param message GamerHero message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerHero, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerHero message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerHero
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerHero;

    /**
     * Decodes a GamerHero message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerHero
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerHero;

    /**
     * Verifies a GamerHero message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerHero message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerHero
     */
    public static fromObject(object: { [k: string]: any }): GamerHero;

    /**
     * Creates a plain object from a GamerHero message. Also converts values to other types if specified.
     * @param message GamerHero
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerHero, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerHero to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GamerMatch. */
export interface IGamerMatch {

    /** GamerMatch mini */
    mini?: (IGamerMini|null);

    /** GamerMatch ai */
    ai?: (boolean|null);

    /** GamerMatch pair */
    pair?: (number|null);

    /** GamerMatch hero */
    hero?: (number|null);
}

/** Represents a GamerMatch. */
export class GamerMatch implements IGamerMatch {

    /**
     * Constructs a new GamerMatch.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamerMatch);

    /** GamerMatch mini. */
    public mini?: (IGamerMini|null);

    /** GamerMatch ai. */
    public ai: boolean;

    /** GamerMatch pair. */
    public pair: number;

    /** GamerMatch hero. */
    public hero: number;

    /**
     * Creates a new GamerMatch instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamerMatch instance
     */
    public static create(properties?: IGamerMatch): GamerMatch;

    /**
     * Encodes the specified GamerMatch message. Does not implicitly {@link GamerMatch.verify|verify} messages.
     * @param message GamerMatch message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamerMatch, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamerMatch message, length delimited. Does not implicitly {@link GamerMatch.verify|verify} messages.
     * @param message GamerMatch message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamerMatch, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamerMatch message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamerMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerMatch;

    /**
     * Decodes a GamerMatch message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamerMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerMatch;

    /**
     * Verifies a GamerMatch message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamerMatch message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamerMatch
     */
    public static fromObject(object: { [k: string]: any }): GamerMatch;

    /**
     * Creates a plain object from a GamerMatch message. Also converts values to other types if specified.
     * @param message GamerMatch
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamerMatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamerMatch to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** PVPType enum. */
export enum PVPType {
    MINVALID = 0,
    M1V1 = 100,
    M2V2 = 103,
    M3V3 = 104,
    M5V5 = 105,
    M1V10 = 106,
    M2V10 = 107,
    RankM3v3 = 200,
    RankM5v5 = 201,
    M1 = 1000,
    M1V3 = 2000
}

/** Properties of a MatchInfo. */
export interface IMatchInfo {

    /** MatchInfo session */
    session?: (string|null);

    /** MatchInfo time */
    time?: (number|Long|null);

    /** MatchInfo addr */
    addr?: (string|null);

    /** MatchInfo frameDelta */
    frameDelta?: (number|null);

    /** MatchInfo minFrameDelta */
    minFrameDelta?: (number|null);

    /** MatchInfo matchTime */
    matchTime?: (number|null);

    /** MatchInfo inputDelta */
    inputDelta?: (number|null);

    /** MatchInfo pvpType */
    pvpType?: (number|null);

    /** MatchInfo threadRecv */
    threadRecv?: (boolean|null);

    /** MatchInfo gamers */
    gamers?: (IGamerMatch[]|null);
}

/** Represents a MatchInfo. */
export class MatchInfo implements IMatchInfo {

    /**
     * Constructs a new MatchInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMatchInfo);

    /** MatchInfo session. */
    public session: string;

    /** MatchInfo time. */
    public time: (number|Long);

    /** MatchInfo addr. */
    public addr: string;

    /** MatchInfo frameDelta. */
    public frameDelta: number;

    /** MatchInfo minFrameDelta. */
    public minFrameDelta: number;

    /** MatchInfo matchTime. */
    public matchTime: number;

    /** MatchInfo inputDelta. */
    public inputDelta: number;

    /** MatchInfo pvpType. */
    public pvpType: number;

    /** MatchInfo threadRecv. */
    public threadRecv: boolean;

    /** MatchInfo gamers. */
    public gamers: IGamerMatch[];

    /**
     * Creates a new MatchInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MatchInfo instance
     */
    public static create(properties?: IMatchInfo): MatchInfo;

    /**
     * Encodes the specified MatchInfo message. Does not implicitly {@link MatchInfo.verify|verify} messages.
     * @param message MatchInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMatchInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MatchInfo message, length delimited. Does not implicitly {@link MatchInfo.verify|verify} messages.
     * @param message MatchInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMatchInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MatchInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MatchInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MatchInfo;

    /**
     * Decodes a MatchInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MatchInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MatchInfo;

    /**
     * Verifies a MatchInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MatchInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MatchInfo
     */
    public static fromObject(object: { [k: string]: any }): MatchInfo;

    /**
     * Creates a plain object from a MatchInfo message. Also converts values to other types if specified.
     * @param message MatchInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MatchInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MatchInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PVPInput. */
export interface IPVPInput {

    /** PVPInput id */
    id?: (number|null);

    /** PVPInput yaw */
    yaw?: (number|null);

    /** PVPInput btn */
    btn?: (number|null);

    /** PVPInput pos */
    pos?: (number|null);

    /** PVPInput talk */
    talk?: (number|null);
}

/** Represents a PVPInput. */
export class PVPInput implements IPVPInput {

    /**
     * Constructs a new PVPInput.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPVPInput);

    /** PVPInput id. */
    public id: number;

    /** PVPInput yaw. */
    public yaw: number;

    /** PVPInput btn. */
    public btn: number;

    /** PVPInput pos. */
    public pos: number;

    /** PVPInput talk. */
    public talk: number;

    /**
     * Creates a new PVPInput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PVPInput instance
     */
    public static create(properties?: IPVPInput): PVPInput;

    /**
     * Encodes the specified PVPInput message. Does not implicitly {@link PVPInput.verify|verify} messages.
     * @param message PVPInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPVPInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PVPInput message, length delimited. Does not implicitly {@link PVPInput.verify|verify} messages.
     * @param message PVPInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPVPInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PVPInput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PVPInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PVPInput;

    /**
     * Decodes a PVPInput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PVPInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PVPInput;

    /**
     * Verifies a PVPInput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PVPInput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PVPInput
     */
    public static fromObject(object: { [k: string]: any }): PVPInput;

    /**
     * Creates a plain object from a PVPInput message. Also converts values to other types if specified.
     * @param message PVPInput
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PVPInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PVPInput to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PVPFrame. */
export interface IPVPFrame {

    /** PVPFrame delta */
    delta?: (number|null);

    /** PVPFrame frame */
    frame?: (number|null);

    /** PVPFrame end */
    end?: (boolean|null);

    /** PVPFrame inputs */
    inputs?: (IPVPInput[]|null);
}

/** Represents a PVPFrame. */
export class PVPFrame implements IPVPFrame {

    /**
     * Constructs a new PVPFrame.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPVPFrame);

    /** PVPFrame delta. */
    public delta: number;

    /** PVPFrame frame. */
    public frame: number;

    /** PVPFrame end. */
    public end: boolean;

    /** PVPFrame inputs. */
    public inputs: IPVPInput[];

    /**
     * Creates a new PVPFrame instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PVPFrame instance
     */
    public static create(properties?: IPVPFrame): PVPFrame;

    /**
     * Encodes the specified PVPFrame message. Does not implicitly {@link PVPFrame.verify|verify} messages.
     * @param message PVPFrame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPVPFrame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PVPFrame message, length delimited. Does not implicitly {@link PVPFrame.verify|verify} messages.
     * @param message PVPFrame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPVPFrame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PVPFrame message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PVPFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PVPFrame;

    /**
     * Decodes a PVPFrame message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PVPFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PVPFrame;

    /**
     * Verifies a PVPFrame message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PVPFrame message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PVPFrame
     */
    public static fromObject(object: { [k: string]: any }): PVPFrame;

    /**
     * Creates a plain object from a PVPFrame message. Also converts values to other types if specified.
     * @param message PVPFrame
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PVPFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PVPFrame to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PVPFrames. */
export interface IPVPFrames {

    /** PVPFrames frames */
    frames?: (IPVPFrame[]|null);
}

/** Represents a PVPFrames. */
export class PVPFrames implements IPVPFrames {

    /**
     * Constructs a new PVPFrames.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPVPFrames);

    /** PVPFrames frames. */
    public frames: IPVPFrame[];

    /**
     * Creates a new PVPFrames instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PVPFrames instance
     */
    public static create(properties?: IPVPFrames): PVPFrames;

    /**
     * Encodes the specified PVPFrames message. Does not implicitly {@link PVPFrames.verify|verify} messages.
     * @param message PVPFrames message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPVPFrames, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PVPFrames message, length delimited. Does not implicitly {@link PVPFrames.verify|verify} messages.
     * @param message PVPFrames message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPVPFrames, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PVPFrames message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PVPFrames
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PVPFrames;

    /**
     * Decodes a PVPFrames message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PVPFrames
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PVPFrames;

    /**
     * Verifies a PVPFrames message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PVPFrames message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PVPFrames
     */
    public static fromObject(object: { [k: string]: any }): PVPFrames;

    /**
     * Creates a plain object from a PVPFrames message. Also converts values to other types if specified.
     * @param message PVPFrames
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PVPFrames, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PVPFrames to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RankLength. */
export interface IRankLength {

    /** RankLength id */
    id?: (number|null);

    /** RankLength length */
    length?: (number|null);

    /** RankLength rank */
    rank?: (number|null);

    /** RankLength mini */
    mini?: (IGamerMini|null);
}

/** Represents a RankLength. */
export class RankLength implements IRankLength {

    /**
     * Constructs a new RankLength.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRankLength);

    /** RankLength id. */
    public id: number;

    /** RankLength length. */
    public length: number;

    /** RankLength rank. */
    public rank: number;

    /** RankLength mini. */
    public mini?: (IGamerMini|null);

    /**
     * Creates a new RankLength instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RankLength instance
     */
    public static create(properties?: IRankLength): RankLength;

    /**
     * Encodes the specified RankLength message. Does not implicitly {@link RankLength.verify|verify} messages.
     * @param message RankLength message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRankLength, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RankLength message, length delimited. Does not implicitly {@link RankLength.verify|verify} messages.
     * @param message RankLength message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRankLength, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RankLength message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RankLength
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RankLength;

    /**
     * Decodes a RankLength message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RankLength
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RankLength;

    /**
     * Verifies a RankLength message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RankLength message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RankLength
     */
    public static fromObject(object: { [k: string]: any }): RankLength;

    /**
     * Creates a plain object from a RankLength message. Also converts values to other types if specified.
     * @param message RankLength
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RankLength, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RankLength to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RoomInfo. */
export interface IRoomInfo {

    /** RoomInfo id */
    id?: (number|null);

    /** RoomInfo type */
    type?: (number|null);

    /** RoomInfo time */
    time?: (number|Long|null);

    /** RoomInfo members */
    members?: (IGamerMini[]|null);
}

/** Represents a RoomInfo. */
export class RoomInfo implements IRoomInfo {

    /**
     * Constructs a new RoomInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRoomInfo);

    /** RoomInfo id. */
    public id: number;

    /** RoomInfo type. */
    public type: number;

    /** RoomInfo time. */
    public time: (number|Long);

    /** RoomInfo members. */
    public members: IGamerMini[];

    /**
     * Creates a new RoomInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoomInfo instance
     */
    public static create(properties?: IRoomInfo): RoomInfo;

    /**
     * Encodes the specified RoomInfo message. Does not implicitly {@link RoomInfo.verify|verify} messages.
     * @param message RoomInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link RoomInfo.verify|verify} messages.
     * @param message RoomInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RoomInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RoomInfo;

    /**
     * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoomInfo;

    /**
     * Verifies a RoomInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RoomInfo
     */
    public static fromObject(object: { [k: string]: any }): RoomInfo;

    /**
     * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
     * @param message RoomInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RoomInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RoomInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PVPStateSync. */
export interface IPVPStateSync {

    /** PVPStateSync c2s */
    c2s?: (PVPStateSync.IC2S|null);

    /** PVPStateSync s2c */
    s2c?: (PVPStateSync.IS2C|null);
}

/** Represents a PVPStateSync. */
export class PVPStateSync implements IPVPStateSync {

    /**
     * Constructs a new PVPStateSync.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPVPStateSync);

    /** PVPStateSync c2s. */
    public c2s?: (PVPStateSync.IC2S|null);

    /** PVPStateSync s2c. */
    public s2c?: (PVPStateSync.IS2C|null);

    /**
     * Creates a new PVPStateSync instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PVPStateSync instance
     */
    public static create(properties?: IPVPStateSync): PVPStateSync;

    /**
     * Encodes the specified PVPStateSync message. Does not implicitly {@link PVPStateSync.verify|verify} messages.
     * @param message PVPStateSync message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPVPStateSync, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PVPStateSync message, length delimited. Does not implicitly {@link PVPStateSync.verify|verify} messages.
     * @param message PVPStateSync message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPVPStateSync, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PVPStateSync message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PVPStateSync
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PVPStateSync;

    /**
     * Decodes a PVPStateSync message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PVPStateSync
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PVPStateSync;

    /**
     * Verifies a PVPStateSync message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PVPStateSync message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PVPStateSync
     */
    public static fromObject(object: { [k: string]: any }): PVPStateSync;

    /**
     * Creates a plain object from a PVPStateSync message. Also converts values to other types if specified.
     * @param message PVPStateSync
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PVPStateSync, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PVPStateSync to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace PVPStateSync {

    /** Properties of a MatchInfo. */
    interface IMatchInfo {

        /** MatchInfo time */
        time?: (number|null);

        /** MatchInfo leftScore */
        leftScore?: (number|null);

        /** MatchInfo rightScore */
        rightScore?: (number|null);

        /** MatchInfo pillars */
        pillars?: (PVPStateSync.IPillar[]|null);

        /** MatchInfo items */
        items?: (PVPStateSync.IItem[]|null);
    }

    /** Represents a MatchInfo. */
    class MatchInfo implements IMatchInfo {

        /**
         * Constructs a new MatchInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: PVPStateSync.IMatchInfo);

        /** MatchInfo time. */
        public time: number;

        /** MatchInfo leftScore. */
        public leftScore: number;

        /** MatchInfo rightScore. */
        public rightScore: number;

        /** MatchInfo pillars. */
        public pillars: PVPStateSync.IPillar[];

        /** MatchInfo items. */
        public items: PVPStateSync.IItem[];

        /**
         * Creates a new MatchInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatchInfo instance
         */
        public static create(properties?: PVPStateSync.IMatchInfo): PVPStateSync.MatchInfo;

        /**
         * Encodes the specified MatchInfo message. Does not implicitly {@link PVPStateSync.MatchInfo.verify|verify} messages.
         * @param message MatchInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PVPStateSync.IMatchInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MatchInfo message, length delimited. Does not implicitly {@link PVPStateSync.MatchInfo.verify|verify} messages.
         * @param message MatchInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PVPStateSync.IMatchInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MatchInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MatchInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PVPStateSync.MatchInfo;

        /**
         * Decodes a MatchInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MatchInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PVPStateSync.MatchInfo;

        /**
         * Verifies a MatchInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MatchInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MatchInfo
         */
        public static fromObject(object: { [k: string]: any }): PVPStateSync.MatchInfo;

        /**
         * Creates a plain object from a MatchInfo message. Also converts values to other types if specified.
         * @param message MatchInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PVPStateSync.MatchInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MatchInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Pillar. */
    interface IPillar {

        /** Pillar x */
        x?: (number|null);

        /** Pillar h */
        h?: (number|null);

        /** Pillar w */
        w?: (number|null);
    }

    /** Represents a Pillar. */
    class Pillar implements IPillar {

        /**
         * Constructs a new Pillar.
         * @param [properties] Properties to set
         */
        constructor(properties?: PVPStateSync.IPillar);

        /** Pillar x. */
        public x: number;

        /** Pillar h. */
        public h: number;

        /** Pillar w. */
        public w: number;

        /**
         * Creates a new Pillar instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Pillar instance
         */
        public static create(properties?: PVPStateSync.IPillar): PVPStateSync.Pillar;

        /**
         * Encodes the specified Pillar message. Does not implicitly {@link PVPStateSync.Pillar.verify|verify} messages.
         * @param message Pillar message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PVPStateSync.IPillar, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Pillar message, length delimited. Does not implicitly {@link PVPStateSync.Pillar.verify|verify} messages.
         * @param message Pillar message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PVPStateSync.IPillar, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Pillar message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Pillar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PVPStateSync.Pillar;

        /**
         * Decodes a Pillar message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Pillar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PVPStateSync.Pillar;

        /**
         * Verifies a Pillar message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Pillar message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Pillar
         */
        public static fromObject(object: { [k: string]: any }): PVPStateSync.Pillar;

        /**
         * Creates a plain object from a Pillar message. Also converts values to other types if specified.
         * @param message Pillar
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PVPStateSync.Pillar, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Pillar to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Item. */
    interface IItem {

        /** Item type */
        type?: (number|null);

        /** Item x */
        x?: (number|null);

        /** Item h */
        h?: (number|null);

        /** Item index */
        index?: (number|null);
    }

    /** Represents an Item. */
    class Item implements IItem {

        /**
         * Constructs a new Item.
         * @param [properties] Properties to set
         */
        constructor(properties?: PVPStateSync.IItem);

        /** Item type. */
        public type: number;

        /** Item x. */
        public x: number;

        /** Item h. */
        public h: number;

        /** Item index. */
        public index: number;

        /**
         * Creates a new Item instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Item instance
         */
        public static create(properties?: PVPStateSync.IItem): PVPStateSync.Item;

        /**
         * Encodes the specified Item message. Does not implicitly {@link PVPStateSync.Item.verify|verify} messages.
         * @param message Item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PVPStateSync.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Item message, length delimited. Does not implicitly {@link PVPStateSync.Item.verify|verify} messages.
         * @param message Item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PVPStateSync.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Item message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PVPStateSync.Item;

        /**
         * Decodes an Item message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PVPStateSync.Item;

        /**
         * Verifies an Item message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Item message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Item
         */
        public static fromObject(object: { [k: string]: any }): PVPStateSync.Item;

        /**
         * Creates a plain object from an Item message. Also converts values to other types if specified.
         * @param message Item
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PVPStateSync.Item, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Item to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CheckPoint. */
    interface ICheckPoint {

        /** CheckPoint runTime */
        runTime?: (number|null);

        /** CheckPoint lastX */
        lastX?: (number|null);

        /** CheckPoint lastY */
        lastY?: (number|null);

        /** CheckPoint lastIndex */
        lastIndex?: (number|null);

        /** CheckPoint nextIndex */
        nextIndex?: (number|null);

        /** CheckPoint beginTime */
        beginTime?: (number|null);

        /** CheckPoint clientTime */
        clientTime?: (number|null);

        /** CheckPoint nextX */
        nextX?: (number|null);

        /** CheckPoint nextY */
        nextY?: (number|null);

        /** CheckPoint minY */
        minY?: (number|null);
    }

    /** Represents a CheckPoint. */
    class CheckPoint implements ICheckPoint {

        /**
         * Constructs a new CheckPoint.
         * @param [properties] Properties to set
         */
        constructor(properties?: PVPStateSync.ICheckPoint);

        /** CheckPoint runTime. */
        public runTime: number;

        /** CheckPoint lastX. */
        public lastX: number;

        /** CheckPoint lastY. */
        public lastY: number;

        /** CheckPoint lastIndex. */
        public lastIndex: number;

        /** CheckPoint nextIndex. */
        public nextIndex: number;

        /** CheckPoint beginTime. */
        public beginTime: number;

        /** CheckPoint clientTime. */
        public clientTime: number;

        /** CheckPoint nextX. */
        public nextX: number;

        /** CheckPoint nextY. */
        public nextY: number;

        /** CheckPoint minY. */
        public minY: number;

        /**
         * Creates a new CheckPoint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CheckPoint instance
         */
        public static create(properties?: PVPStateSync.ICheckPoint): PVPStateSync.CheckPoint;

        /**
         * Encodes the specified CheckPoint message. Does not implicitly {@link PVPStateSync.CheckPoint.verify|verify} messages.
         * @param message CheckPoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PVPStateSync.ICheckPoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CheckPoint message, length delimited. Does not implicitly {@link PVPStateSync.CheckPoint.verify|verify} messages.
         * @param message CheckPoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PVPStateSync.ICheckPoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CheckPoint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CheckPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PVPStateSync.CheckPoint;

        /**
         * Decodes a CheckPoint message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CheckPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PVPStateSync.CheckPoint;

        /**
         * Verifies a CheckPoint message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CheckPoint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CheckPoint
         */
        public static fromObject(object: { [k: string]: any }): PVPStateSync.CheckPoint;

        /**
         * Creates a plain object from a CheckPoint message. Also converts values to other types if specified.
         * @param message CheckPoint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PVPStateSync.CheckPoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CheckPoint to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GamerEnter. */
    interface IGamerEnter {

        /** GamerEnter pos */
        pos?: (number|null);
    }

    /** Represents a GamerEnter. */
    class GamerEnter implements IGamerEnter {

        /**
         * Constructs a new GamerEnter.
         * @param [properties] Properties to set
         */
        constructor(properties?: PVPStateSync.IGamerEnter);

        /** GamerEnter pos. */
        public pos: number;

        /**
         * Creates a new GamerEnter instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GamerEnter instance
         */
        public static create(properties?: PVPStateSync.IGamerEnter): PVPStateSync.GamerEnter;

        /**
         * Encodes the specified GamerEnter message. Does not implicitly {@link PVPStateSync.GamerEnter.verify|verify} messages.
         * @param message GamerEnter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PVPStateSync.IGamerEnter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GamerEnter message, length delimited. Does not implicitly {@link PVPStateSync.GamerEnter.verify|verify} messages.
         * @param message GamerEnter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PVPStateSync.IGamerEnter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GamerEnter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GamerEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PVPStateSync.GamerEnter;

        /**
         * Decodes a GamerEnter message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GamerEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PVPStateSync.GamerEnter;

        /**
         * Verifies a GamerEnter message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GamerEnter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GamerEnter
         */
        public static fromObject(object: { [k: string]: any }): PVPStateSync.GamerEnter;

        /**
         * Creates a plain object from a GamerEnter message. Also converts values to other types if specified.
         * @param message GamerEnter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PVPStateSync.GamerEnter, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GamerEnter to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GamerInfo. */
    interface IGamerInfo {

        /** GamerInfo pos */
        pos?: (number|null);

        /** GamerInfo score */
        score?: (number|null);

        /** GamerInfo cp */
        cp?: (PVPStateSync.ICheckPoint|null);
    }

    /** Represents a GamerInfo. */
    class GamerInfo implements IGamerInfo {

        /**
         * Constructs a new GamerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: PVPStateSync.IGamerInfo);

        /** GamerInfo pos. */
        public pos: number;

        /** GamerInfo score. */
        public score: number;

        /** GamerInfo cp. */
        public cp?: (PVPStateSync.ICheckPoint|null);

        /**
         * Creates a new GamerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GamerInfo instance
         */
        public static create(properties?: PVPStateSync.IGamerInfo): PVPStateSync.GamerInfo;

        /**
         * Encodes the specified GamerInfo message. Does not implicitly {@link PVPStateSync.GamerInfo.verify|verify} messages.
         * @param message GamerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PVPStateSync.IGamerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GamerInfo message, length delimited. Does not implicitly {@link PVPStateSync.GamerInfo.verify|verify} messages.
         * @param message GamerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PVPStateSync.IGamerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GamerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GamerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PVPStateSync.GamerInfo;

        /**
         * Decodes a GamerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GamerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PVPStateSync.GamerInfo;

        /**
         * Verifies a GamerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GamerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GamerInfo
         */
        public static fromObject(object: { [k: string]: any }): PVPStateSync.GamerInfo;

        /**
         * Creates a plain object from a GamerInfo message. Also converts values to other types if specified.
         * @param message GamerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PVPStateSync.GamerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GamerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Jump. */
    interface IJump {

        /** Jump pos */
        pos?: (number|null);

        /** Jump vx */
        vx?: (number|null);

        /** Jump vy */
        vy?: (number|null);
    }

    /** Represents a Jump. */
    class Jump implements IJump {

        /**
         * Constructs a new Jump.
         * @param [properties] Properties to set
         */
        constructor(properties?: PVPStateSync.IJump);

        /** Jump pos. */
        public pos: number;

        /** Jump vx. */
        public vx: number;

        /** Jump vy. */
        public vy: number;

        /**
         * Creates a new Jump instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Jump instance
         */
        public static create(properties?: PVPStateSync.IJump): PVPStateSync.Jump;

        /**
         * Encodes the specified Jump message. Does not implicitly {@link PVPStateSync.Jump.verify|verify} messages.
         * @param message Jump message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PVPStateSync.IJump, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Jump message, length delimited. Does not implicitly {@link PVPStateSync.Jump.verify|verify} messages.
         * @param message Jump message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PVPStateSync.IJump, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Jump message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Jump
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PVPStateSync.Jump;

        /**
         * Decodes a Jump message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Jump
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PVPStateSync.Jump;

        /**
         * Verifies a Jump message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Jump message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Jump
         */
        public static fromObject(object: { [k: string]: any }): PVPStateSync.Jump;

        /**
         * Creates a plain object from a Jump message. Also converts values to other types if specified.
         * @param message Jump
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PVPStateSync.Jump, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Jump to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Result. */
    interface IResult {

        /** Result mvp */
        mvp?: (number|null);

        /** Result timeout */
        timeout?: (boolean|null);

        /** Result scores */
        scores?: (number[]|null);

        /** Result icons */
        icons?: (number[]|null);
    }

    /** Represents a Result. */
    class Result implements IResult {

        /**
         * Constructs a new Result.
         * @param [properties] Properties to set
         */
        constructor(properties?: PVPStateSync.IResult);

        /** Result mvp. */
        public mvp: number;

        /** Result timeout. */
        public timeout: boolean;

        /** Result scores. */
        public scores: number[];

        /** Result icons. */
        public icons: number[];

        /**
         * Creates a new Result instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Result instance
         */
        public static create(properties?: PVPStateSync.IResult): PVPStateSync.Result;

        /**
         * Encodes the specified Result message. Does not implicitly {@link PVPStateSync.Result.verify|verify} messages.
         * @param message Result message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PVPStateSync.IResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Result message, length delimited. Does not implicitly {@link PVPStateSync.Result.verify|verify} messages.
         * @param message Result message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PVPStateSync.IResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Result message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PVPStateSync.Result;

        /**
         * Decodes a Result message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PVPStateSync.Result;

        /**
         * Verifies a Result message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Result message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Result
         */
        public static fromObject(object: { [k: string]: any }): PVPStateSync.Result;

        /**
         * Creates a plain object from a Result message. Also converts values to other types if specified.
         * @param message Result
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PVPStateSync.Result, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Result to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C2S. */
    interface IC2S {

        /** C2S jump */
        jump?: (PVPStateSync.IJump|null);

        /** C2S enter */
        enter?: (PVPStateSync.IGamerEnter|null);
    }

    /** Represents a C2S. */
    class C2S implements IC2S {

        /**
         * Constructs a new C2S.
         * @param [properties] Properties to set
         */
        constructor(properties?: PVPStateSync.IC2S);

        /** C2S jump. */
        public jump?: (PVPStateSync.IJump|null);

        /** C2S enter. */
        public enter?: (PVPStateSync.IGamerEnter|null);

        /**
         * Creates a new C2S instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2S instance
         */
        public static create(properties?: PVPStateSync.IC2S): PVPStateSync.C2S;

        /**
         * Encodes the specified C2S message. Does not implicitly {@link PVPStateSync.C2S.verify|verify} messages.
         * @param message C2S message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PVPStateSync.IC2S, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2S message, length delimited. Does not implicitly {@link PVPStateSync.C2S.verify|verify} messages.
         * @param message C2S message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PVPStateSync.IC2S, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2S message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2S
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PVPStateSync.C2S;

        /**
         * Decodes a C2S message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2S
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PVPStateSync.C2S;

        /**
         * Verifies a C2S message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2S message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2S
         */
        public static fromObject(object: { [k: string]: any }): PVPStateSync.C2S;

        /**
         * Creates a plain object from a C2S message. Also converts values to other types if specified.
         * @param message C2S
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PVPStateSync.C2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2S to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S2C. */
    interface IS2C {

        /** S2C matchInfo */
        matchInfo?: (PVPStateSync.IMatchInfo|null);

        /** S2C result */
        result?: (PVPStateSync.IResult|null);

        /** S2C gamerInfo */
        gamerInfo?: (PVPStateSync.IGamerInfo[]|null);

        /** S2C gamerEnter */
        gamerEnter?: (PVPStateSync.IGamerEnter[]|null);

        /** S2C jump */
        jump?: (PVPStateSync.IJump|null);
    }

    /** Represents a S2C. */
    class S2C implements IS2C {

        /**
         * Constructs a new S2C.
         * @param [properties] Properties to set
         */
        constructor(properties?: PVPStateSync.IS2C);

        /** S2C matchInfo. */
        public matchInfo?: (PVPStateSync.IMatchInfo|null);

        /** S2C result. */
        public result?: (PVPStateSync.IResult|null);

        /** S2C gamerInfo. */
        public gamerInfo: PVPStateSync.IGamerInfo[];

        /** S2C gamerEnter. */
        public gamerEnter: PVPStateSync.IGamerEnter[];

        /** S2C jump. */
        public jump?: (PVPStateSync.IJump|null);

        /**
         * Creates a new S2C instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2C instance
         */
        public static create(properties?: PVPStateSync.IS2C): PVPStateSync.S2C;

        /**
         * Encodes the specified S2C message. Does not implicitly {@link PVPStateSync.S2C.verify|verify} messages.
         * @param message S2C message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PVPStateSync.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S2C message, length delimited. Does not implicitly {@link PVPStateSync.S2C.verify|verify} messages.
         * @param message S2C message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PVPStateSync.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S2C message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2C
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PVPStateSync.S2C;

        /**
         * Decodes a S2C message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2C
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PVPStateSync.S2C;

        /**
         * Verifies a S2C message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S2C message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S2C
         */
        public static fromObject(object: { [k: string]: any }): PVPStateSync.S2C;

        /**
         * Creates a plain object from a S2C message. Also converts values to other types if specified.
         * @param message S2C
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PVPStateSync.S2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S2C to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a PVPResult. */
export interface IPVPResult {

    /** PVPResult kills */
    kills?: (number[]|null);

    /** PVPResult length */
    length?: (number[]|null);

    /** PVPResult time */
    time?: (number|Long|null);

    /** PVPResult gone */
    gone?: (number[]|null);

    /** PVPResult version */
    version?: (number|null);

    /** PVPResult sResult */
    sResult?: (PVPStateSync.IResult|null);

    /** PVPResult matchInfo */
    matchInfo?: (IMatchInfo|null);

    /** PVPResult frames */
    frames?: (IPVPFrame[]|null);

    /** PVPResult md5 */
    md5?: (string|null);
}

/** Represents a PVPResult. */
export class PVPResult implements IPVPResult {

    /**
     * Constructs a new PVPResult.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPVPResult);

    /** PVPResult kills. */
    public kills: number[];

    /** PVPResult length. */
    public length: number[];

    /** PVPResult time. */
    public time: (number|Long);

    /** PVPResult gone. */
    public gone: number[];

    /** PVPResult version. */
    public version: number;

    /** PVPResult sResult. */
    public sResult?: (PVPStateSync.IResult|null);

    /** PVPResult matchInfo. */
    public matchInfo?: (IMatchInfo|null);

    /** PVPResult frames. */
    public frames: IPVPFrame[];

    /** PVPResult md5. */
    public md5: string;

    /**
     * Creates a new PVPResult instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PVPResult instance
     */
    public static create(properties?: IPVPResult): PVPResult;

    /**
     * Encodes the specified PVPResult message. Does not implicitly {@link PVPResult.verify|verify} messages.
     * @param message PVPResult message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPVPResult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PVPResult message, length delimited. Does not implicitly {@link PVPResult.verify|verify} messages.
     * @param message PVPResult message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPVPResult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PVPResult message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PVPResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PVPResult;

    /**
     * Decodes a PVPResult message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PVPResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PVPResult;

    /**
     * Verifies a PVPResult message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PVPResult message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PVPResult
     */
    public static fromObject(object: { [k: string]: any }): PVPResult;

    /**
     * Creates a plain object from a PVPResult message. Also converts values to other types if specified.
     * @param message PVPResult
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PVPResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PVPResult to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a S2C. */
export interface IS2C {

    /** S2C error */
    error?: (number|null);

    /** S2C key */
    key?: (string|null);

    /** S2C gamerLoginS2C */
    gamerLoginS2C?: (IGamerLoginS2C|null);

    /** S2C gamerLoginGetDataS2C */
    gamerLoginGetDataS2C?: (IGamerLoginGetDataS2C|null);

    /** S2C serverTimeS2C */
    serverTimeS2C?: (IServerTimeS2C|null);

    /** S2C gamerNotifyLoginOtherS2C */
    gamerNotifyLoginOtherS2C?: (IGamerNotifyLoginOtherS2C|null);

    /** S2C gamerSubChatChannelS2C */
    gamerSubChatChannelS2C?: (IGamerSubChatChannelS2C|null);

    /** S2C gamerChangeNameS2C */
    gamerChangeNameS2C?: (IGamerChangeNameS2C|null);

    /** S2C gamerBuyItemS2C */
    gamerBuyItemS2C?: (IGamerBuyItemS2C|null);

    /** S2C gamerUseItemS2C */
    gamerUseItemS2C?: (IGamerUseItemS2C|null);

    /** S2C gamerSellItemS2C */
    gamerSellItemS2C?: (IGamerSellItemS2C|null);

    /** S2C gamerFriendChatS2C */
    gamerFriendChatS2C?: (IGamerFriendChatS2C|null);

    /** S2C gamerWorldChatS2C */
    gamerWorldChatS2C?: (IGamerWorldChatS2C|null);

    /** S2C gamerTestChatS2C */
    gamerTestChatS2C?: (IGamerTestChatS2C|null);

    /** S2C gamerClubRequestS2C */
    gamerClubRequestS2C?: (IGamerClubRequestS2C|null);

    /** S2C gamerNotifyNewChatS2C */
    gamerNotifyNewChatS2C?: (IGamerNotifyNewChatS2C|null);

    /** S2C gamerNewFriendReqS2C */
    gamerNewFriendReqS2C?: (IGamerNewFriendReqS2C|null);

    /** S2C gamerDelFriendS2C */
    gamerDelFriendS2C?: (IGamerDelFriendS2C|null);

    /** S2C gamerNotifyNewFriendReqS2C */
    gamerNotifyNewFriendReqS2C?: (IGamerNotifyNewFriendReqS2C|null);

    /** S2C gamerProcessFriendReqS2C */
    gamerProcessFriendReqS2C?: (IGamerProcessFriendReqS2C|null);

    /** S2C gamerNotifyNewFriendS2C */
    gamerNotifyNewFriendS2C?: (IGamerNotifyNewFriendS2C|null);

    /** S2C gamerNotifyDelFriendS2C */
    gamerNotifyDelFriendS2C?: (IGamerNotifyDelFriendS2C|null);

    /** S2C gamerNotifyNewMailS2C */
    gamerNotifyNewMailS2C?: (IGamerNotifyNewMailS2C|null);

    /** S2C gamerNewHeroS2C */
    gamerNewHeroS2C?: (IGamerNewHeroS2C|null);

    /** S2C gamerUpgradeHeroS2C */
    gamerUpgradeHeroS2C?: (IGamerUpgradeHeroS2C|null);

    /** S2C gamerChoseHeroS2C */
    gamerChoseHeroS2C?: (IGamerChoseHeroS2C|null);

    /** S2C gamerMatchS2C */
    gamerMatchS2C?: (IGamerMatchS2C|null);

    /** S2C gamerCancelMatchS2C */
    gamerCancelMatchS2C?: (IGamerCancelMatchS2C|null);

    /** S2C gamerNotifyMatchInfoS2C */
    gamerNotifyMatchInfoS2C?: (IGamerNotifyMatchInfoS2C|null);

    /** S2C gamerPVPSyncS2C */
    gamerPVPSyncS2C?: (IGamerPVPSyncS2C|null);

    /** S2C gamerNotifyGamerMiniS2C */
    gamerNotifyGamerMiniS2C?: (IGamerNotifyGamerMiniS2C|null);

    /** S2C gamerNotifyPVPSyncS2C */
    gamerNotifyPVPSyncS2C?: (IGamerNotifyPVPSyncS2C|null);

    /** S2C gamerNotifyNewPVPResultS2C */
    gamerNotifyNewPVPResultS2C?: (IGamerNotifyNewPVPResultS2C|null);

    /** S2C gamerPVPStateSyncS2C */
    gamerPVPStateSyncS2C?: (IGamerPVPStateSyncS2C|null);

    /** S2C gamerNotifyPVPStateSyncS2C */
    gamerNotifyPVPStateSyncS2C?: (IGamerNotifyPVPStateSyncS2C|null);

    /** S2C gamerNotifyIconChangeS2C */
    gamerNotifyIconChangeS2C?: (IGamerNotifyIconChangeS2C|null);

    /** S2C gamerNotifyDiamonChangeS2C */
    gamerNotifyDiamonChangeS2C?: (IGamerNotifyDiamonChangeS2C|null);

    /** S2C gamerNotifyEnergyChangeS2C */
    gamerNotifyEnergyChangeS2C?: (IGamerNotifyEnergyChangeS2C|null);

    /** S2C gamerNotifyExpChangeS2C */
    gamerNotifyExpChangeS2C?: (IGamerNotifyExpChangeS2C|null);

    /** S2C gamerGetRealTimeRankS2C */
    gamerGetRealTimeRankS2C?: (IGamerGetRealTimeRankS2C|null);

    /** S2C gamerCheckPVPBattleS2C */
    gamerCheckPVPBattleS2C?: (IGamerCheckPVPBattleS2C|null);

    /** S2C gamerUploadWXInfoS2C */
    gamerUploadWXInfoS2C?: (IGamerUploadWXInfoS2C|null);

    /** S2C gamerNewRoomS2C */
    gamerNewRoomS2C?: (IGamerNewRoomS2C|null);

    /** S2C gamerAddRoomS2C */
    gamerAddRoomS2C?: (IGamerAddRoomS2C|null);

    /** S2C gamerLeaveRoomS2C */
    gamerLeaveRoomS2C?: (IGamerLeaveRoomS2C|null);

    /** S2C gamerNotifyRoomInfoChangeS2C */
    gamerNotifyRoomInfoChangeS2C?: (IGamerNotifyRoomInfoChangeS2C|null);

    /** S2C gamerGetRewardS2C */
    gamerGetRewardS2C?: (IGamerGetRewardS2C|null);

    /** S2C gamerUseIconS2C */
    gamerUseIconS2C?: (IGamerUseIconS2C|null);
}

/** Represents a S2C. */
export class S2C implements IS2C {

    /**
     * Constructs a new S2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2C);

    /** S2C error. */
    public error: number;

    /** S2C key. */
    public key: string;

    /** S2C gamerLoginS2C. */
    public gamerLoginS2C?: (IGamerLoginS2C|null);

    /** S2C gamerLoginGetDataS2C. */
    public gamerLoginGetDataS2C?: (IGamerLoginGetDataS2C|null);

    /** S2C serverTimeS2C. */
    public serverTimeS2C?: (IServerTimeS2C|null);

    /** S2C gamerNotifyLoginOtherS2C. */
    public gamerNotifyLoginOtherS2C?: (IGamerNotifyLoginOtherS2C|null);

    /** S2C gamerSubChatChannelS2C. */
    public gamerSubChatChannelS2C?: (IGamerSubChatChannelS2C|null);

    /** S2C gamerChangeNameS2C. */
    public gamerChangeNameS2C?: (IGamerChangeNameS2C|null);

    /** S2C gamerBuyItemS2C. */
    public gamerBuyItemS2C?: (IGamerBuyItemS2C|null);

    /** S2C gamerUseItemS2C. */
    public gamerUseItemS2C?: (IGamerUseItemS2C|null);

    /** S2C gamerSellItemS2C. */
    public gamerSellItemS2C?: (IGamerSellItemS2C|null);

    /** S2C gamerFriendChatS2C. */
    public gamerFriendChatS2C?: (IGamerFriendChatS2C|null);

    /** S2C gamerWorldChatS2C. */
    public gamerWorldChatS2C?: (IGamerWorldChatS2C|null);

    /** S2C gamerTestChatS2C. */
    public gamerTestChatS2C?: (IGamerTestChatS2C|null);

    /** S2C gamerClubRequestS2C. */
    public gamerClubRequestS2C?: (IGamerClubRequestS2C|null);

    /** S2C gamerNotifyNewChatS2C. */
    public gamerNotifyNewChatS2C?: (IGamerNotifyNewChatS2C|null);

    /** S2C gamerNewFriendReqS2C. */
    public gamerNewFriendReqS2C?: (IGamerNewFriendReqS2C|null);

    /** S2C gamerDelFriendS2C. */
    public gamerDelFriendS2C?: (IGamerDelFriendS2C|null);

    /** S2C gamerNotifyNewFriendReqS2C. */
    public gamerNotifyNewFriendReqS2C?: (IGamerNotifyNewFriendReqS2C|null);

    /** S2C gamerProcessFriendReqS2C. */
    public gamerProcessFriendReqS2C?: (IGamerProcessFriendReqS2C|null);

    /** S2C gamerNotifyNewFriendS2C. */
    public gamerNotifyNewFriendS2C?: (IGamerNotifyNewFriendS2C|null);

    /** S2C gamerNotifyDelFriendS2C. */
    public gamerNotifyDelFriendS2C?: (IGamerNotifyDelFriendS2C|null);

    /** S2C gamerNotifyNewMailS2C. */
    public gamerNotifyNewMailS2C?: (IGamerNotifyNewMailS2C|null);

    /** S2C gamerNewHeroS2C. */
    public gamerNewHeroS2C?: (IGamerNewHeroS2C|null);

    /** S2C gamerUpgradeHeroS2C. */
    public gamerUpgradeHeroS2C?: (IGamerUpgradeHeroS2C|null);

    /** S2C gamerChoseHeroS2C. */
    public gamerChoseHeroS2C?: (IGamerChoseHeroS2C|null);

    /** S2C gamerMatchS2C. */
    public gamerMatchS2C?: (IGamerMatchS2C|null);

    /** S2C gamerCancelMatchS2C. */
    public gamerCancelMatchS2C?: (IGamerCancelMatchS2C|null);

    /** S2C gamerNotifyMatchInfoS2C. */
    public gamerNotifyMatchInfoS2C?: (IGamerNotifyMatchInfoS2C|null);

    /** S2C gamerPVPSyncS2C. */
    public gamerPVPSyncS2C?: (IGamerPVPSyncS2C|null);

    /** S2C gamerNotifyGamerMiniS2C. */
    public gamerNotifyGamerMiniS2C?: (IGamerNotifyGamerMiniS2C|null);

    /** S2C gamerNotifyPVPSyncS2C. */
    public gamerNotifyPVPSyncS2C?: (IGamerNotifyPVPSyncS2C|null);

    /** S2C gamerNotifyNewPVPResultS2C. */
    public gamerNotifyNewPVPResultS2C?: (IGamerNotifyNewPVPResultS2C|null);

    /** S2C gamerPVPStateSyncS2C. */
    public gamerPVPStateSyncS2C?: (IGamerPVPStateSyncS2C|null);

    /** S2C gamerNotifyPVPStateSyncS2C. */
    public gamerNotifyPVPStateSyncS2C?: (IGamerNotifyPVPStateSyncS2C|null);

    /** S2C gamerNotifyIconChangeS2C. */
    public gamerNotifyIconChangeS2C?: (IGamerNotifyIconChangeS2C|null);

    /** S2C gamerNotifyDiamonChangeS2C. */
    public gamerNotifyDiamonChangeS2C?: (IGamerNotifyDiamonChangeS2C|null);

    /** S2C gamerNotifyEnergyChangeS2C. */
    public gamerNotifyEnergyChangeS2C?: (IGamerNotifyEnergyChangeS2C|null);

    /** S2C gamerNotifyExpChangeS2C. */
    public gamerNotifyExpChangeS2C?: (IGamerNotifyExpChangeS2C|null);

    /** S2C gamerGetRealTimeRankS2C. */
    public gamerGetRealTimeRankS2C?: (IGamerGetRealTimeRankS2C|null);

    /** S2C gamerCheckPVPBattleS2C. */
    public gamerCheckPVPBattleS2C?: (IGamerCheckPVPBattleS2C|null);

    /** S2C gamerUploadWXInfoS2C. */
    public gamerUploadWXInfoS2C?: (IGamerUploadWXInfoS2C|null);

    /** S2C gamerNewRoomS2C. */
    public gamerNewRoomS2C?: (IGamerNewRoomS2C|null);

    /** S2C gamerAddRoomS2C. */
    public gamerAddRoomS2C?: (IGamerAddRoomS2C|null);

    /** S2C gamerLeaveRoomS2C. */
    public gamerLeaveRoomS2C?: (IGamerLeaveRoomS2C|null);

    /** S2C gamerNotifyRoomInfoChangeS2C. */
    public gamerNotifyRoomInfoChangeS2C?: (IGamerNotifyRoomInfoChangeS2C|null);

    /** S2C gamerGetRewardS2C. */
    public gamerGetRewardS2C?: (IGamerGetRewardS2C|null);

    /** S2C gamerUseIconS2C. */
    public gamerUseIconS2C?: (IGamerUseIconS2C|null);

    /**
     * Creates a new S2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2C instance
     */
    public static create(properties?: IS2C): S2C;

    /**
     * Encodes the specified S2C message. Does not implicitly {@link S2C.verify|verify} messages.
     * @param message S2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2C message, length delimited. Does not implicitly {@link S2C.verify|verify} messages.
     * @param message S2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C;

    /**
     * Decodes a S2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C;

    /**
     * Verifies a S2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2C
     */
    public static fromObject(object: { [k: string]: any }): S2C;

    /**
     * Creates a plain object from a S2C message. Also converts values to other types if specified.
     * @param message S2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
