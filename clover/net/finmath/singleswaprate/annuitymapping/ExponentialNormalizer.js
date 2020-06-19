var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":76,"id":31547,"methods":[{"el":44,"sc":2,"sl":36},{"el":56,"sc":2,"sl":52},{"el":62,"sc":2,"sl":58},{"el":68,"sc":2,"sl":64},{"el":74,"sc":2,"sl":70}],"name":"ExponentialNormalizer","sl":21}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_11":{"methods":[{"sl":58}],"name":"a_testMappings","pass":true,"statements":[{"sl":60},{"sl":61}]},"test_166":{"methods":[{"sl":52},{"sl":58},{"sl":64},{"sl":70}],"name":"testCalibration","pass":true,"statements":[{"sl":53},{"sl":54},{"sl":55},{"sl":60},{"sl":61},{"sl":66},{"sl":67},{"sl":72},{"sl":73}]},"test_196":{"methods":[{"sl":52},{"sl":58},{"sl":64},{"sl":70}],"name":"testStaticCubeCalibration","pass":true,"statements":[{"sl":53},{"sl":54},{"sl":55},{"sl":60},{"sl":61},{"sl":66},{"sl":67},{"sl":72},{"sl":73}]},"test_243":{"methods":[{"sl":36},{"sl":52},{"sl":58},{"sl":70}],"name":"testExpectation","pass":true,"statements":[{"sl":37},{"sl":38},{"sl":40},{"sl":41},{"sl":43},{"sl":53},{"sl":54},{"sl":55},{"sl":60},{"sl":61},{"sl":72},{"sl":73}]},"test_383":{"methods":[{"sl":52},{"sl":58},{"sl":70}],"name":"testBasic","pass":true,"statements":[{"sl":53},{"sl":54},{"sl":55},{"sl":60},{"sl":61},{"sl":72},{"sl":73}]},"test_399":{"methods":[{"sl":52},{"sl":58},{"sl":64},{"sl":70}],"name":"testSABRCubeCalibration","pass":true,"statements":[{"sl":53},{"sl":54},{"sl":55},{"sl":60},{"sl":61},{"sl":66},{"sl":67},{"sl":72},{"sl":73}]},"test_412":{"methods":[{"sl":58},{"sl":64}],"name":"c_testFirstDerivative","pass":true,"statements":[{"sl":60},{"sl":61},{"sl":66},{"sl":67}]},"test_561":{"methods":[{"sl":52},{"sl":58},{"sl":64},{"sl":70}],"name":"c_testMultiPiterbarg","pass":true,"statements":[{"sl":53},{"sl":54},{"sl":55},{"sl":60},{"sl":61},{"sl":66},{"sl":67},{"sl":72},{"sl":73}]},"test_565":{"methods":[{"sl":52},{"sl":58},{"sl":64},{"sl":70}],"name":"b_testBasicPiterbarg","pass":true,"statements":[{"sl":53},{"sl":54},{"sl":55},{"sl":60},{"sl":61},{"sl":66},{"sl":67},{"sl":72},{"sl":73}]},"test_635":{"methods":[{"sl":52},{"sl":58},{"sl":70}],"name":"testMulti","pass":true,"statements":[{"sl":53},{"sl":54},{"sl":55},{"sl":60},{"sl":61},{"sl":72},{"sl":73}]},"test_709":{"methods":[{"sl":52},{"sl":58},{"sl":64},{"sl":70}],"name":"testMultiPiterbarg","pass":true,"statements":[{"sl":53},{"sl":54},{"sl":55},{"sl":60},{"sl":61},{"sl":66},{"sl":67},{"sl":72},{"sl":73}]},"test_799":{"methods":[{"sl":52},{"sl":58},{"sl":64},{"sl":70}],"name":"testBasicPiterbarg","pass":true,"statements":[{"sl":53},{"sl":54},{"sl":55},{"sl":60},{"sl":61},{"sl":66},{"sl":67},{"sl":72},{"sl":73}]},"test_876":{"methods":[{"sl":58}],"name":"b_testSeq","pass":true,"statements":[{"sl":60},{"sl":61}]},"test_877":{"methods":[{"sl":52},{"sl":58},{"sl":64},{"sl":70}],"name":"testCalibration","pass":true,"statements":[{"sl":53},{"sl":54},{"sl":55},{"sl":60},{"sl":61},{"sl":66},{"sl":67},{"sl":72},{"sl":73}]},"test_932":{"methods":[{"sl":58},{"sl":70}],"name":"d_testSecondDerivative","pass":true,"statements":[{"sl":60},{"sl":61},{"sl":72},{"sl":73}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [243], [243], [243], [], [243], [243], [], [243], [], [], [], [], [], [], [], [], [561, 383, 196, 243, 709, 399, 166, 799, 635, 565, 877], [561, 383, 196, 243, 709, 399, 166, 799, 635, 565, 877], [561, 383, 196, 243, 709, 399, 166, 799, 635, 565, 877], [561, 383, 196, 243, 709, 399, 166, 799, 635, 565, 877], [], [], [561, 383, 196, 243, 709, 399, 166, 799, 932, 11, 876, 635, 565, 877, 412], [], [561, 383, 196, 243, 709, 399, 166, 799, 932, 11, 876, 635, 565, 877, 412], [561, 383, 196, 243, 709, 399, 166, 799, 932, 11, 876, 635, 565, 877, 412], [], [], [561, 196, 709, 399, 166, 799, 565, 877, 412], [], [561, 196, 709, 399, 166, 799, 565, 877, 412], [561, 196, 709, 399, 166, 799, 565, 877, 412], [], [], [561, 383, 196, 243, 709, 399, 166, 799, 932, 635, 565, 877], [], [561, 383, 196, 243, 709, 399, 166, 799, 932, 635, 565, 877], [561, 383, 196, 243, 709, 399, 166, 799, 932, 635, 565, 877], [], [], []]