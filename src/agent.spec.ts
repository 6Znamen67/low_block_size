import {
    createBlockEvent,
    HandleBlock
  } from "forta-agent"
  import agent from "./agent"
  
  describe("diffchanged agent", () => {
    let handleBlock: HandleBlock
  
    const createTxEventWithSize= () => createBlockEvent({
      type:{} as any,
      block:{
          difficulty: "",
          gasLimit :"0x64",
          extraData:{} as any,
          gasUsed:"0xA",
          hash:"",
          miner:"",
          logsBloom:"",
          mixHash:"",
          nonce:"",
          number:1,
          parentHash:"",
          receiptsRoot:"",
          sha3Uncles:"",
          size:"0x1",
          stateRoot:"",
          timestamp:1,
          totalDifficulty:"",
          transactions: {} as any,
          transactionsRoot:'',
          uncles:[]
      }
    })
  
    beforeAll(() => {
      handleBlock = agent.handleBlock
    })
  
    describe("handle block", () => {
      it("block size", async () => {
        const txEvent = createTxEventWithSize()
  
        const findings = await handleBlock(txEvent)
  
        expect(findings.length).toBe(1)
      })
  
      
    })
  })