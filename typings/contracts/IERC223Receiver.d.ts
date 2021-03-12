/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IERC223ReceiverInterface extends ethers.utils.Interface {
  functions: {
    "tokenFallback(address,uint256,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "tokenFallback",
    values: [string, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "tokenFallback",
    data: BytesLike
  ): Result;

  events: {};
}

export class IERC223Receiver extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IERC223ReceiverInterface;

  functions: {
    tokenFallback(
      arg0: string,
      arg1: BigNumberish,
      arg2: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "tokenFallback(address,uint256,bytes)"(
      arg0: string,
      arg1: BigNumberish,
      arg2: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  tokenFallback(
    arg0: string,
    arg1: BigNumberish,
    arg2: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "tokenFallback(address,uint256,bytes)"(
    arg0: string,
    arg1: BigNumberish,
    arg2: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    tokenFallback(
      arg0: string,
      arg1: BigNumberish,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "tokenFallback(address,uint256,bytes)"(
      arg0: string,
      arg1: BigNumberish,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    tokenFallback(
      arg0: string,
      arg1: BigNumberish,
      arg2: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "tokenFallback(address,uint256,bytes)"(
      arg0: string,
      arg1: BigNumberish,
      arg2: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    tokenFallback(
      arg0: string,
      arg1: BigNumberish,
      arg2: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "tokenFallback(address,uint256,bytes)"(
      arg0: string,
      arg1: BigNumberish,
      arg2: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
