var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":155,"id":31331,"methods":[{"el":51,"sc":2,"sl":46},{"el":75,"sc":2,"sl":69},{"el":90,"sc":2,"sl":87},{"el":118,"sc":2,"sl":105},{"el":154,"sc":2,"sl":128}],"name":"AnnuityMappingFactory","sl":18}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_166":{"methods":[{"sl":105},{"sl":128}],"name":"testCalibration","pass":true,"statements":[{"sl":108},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":130},{"sl":131},{"sl":132},{"sl":142},{"sl":143},{"sl":144},{"sl":145},{"sl":153}]},"test_196":{"methods":[{"sl":105},{"sl":128}],"name":"testStaticCubeCalibration","pass":true,"statements":[{"sl":108},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":130},{"sl":131},{"sl":132},{"sl":142},{"sl":143},{"sl":144},{"sl":145},{"sl":153}]},"test_383":{"methods":[{"sl":87},{"sl":105},{"sl":128}],"name":"testBasic","pass":true,"statements":[{"sl":89},{"sl":108},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":130},{"sl":131},{"sl":132},{"sl":133},{"sl":137},{"sl":139},{"sl":142},{"sl":143},{"sl":146},{"sl":147},{"sl":153}]},"test_399":{"methods":[{"sl":105},{"sl":128}],"name":"testSABRCubeCalibration","pass":true,"statements":[{"sl":108},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":130},{"sl":131},{"sl":132},{"sl":142},{"sl":143},{"sl":144},{"sl":145},{"sl":153}]},"test_561":{"methods":[{"sl":105},{"sl":128}],"name":"c_testMultiPiterbarg","pass":true,"statements":[{"sl":108},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":130},{"sl":131},{"sl":132},{"sl":142},{"sl":143},{"sl":144},{"sl":145},{"sl":153}]},"test_562":{"methods":[{"sl":87},{"sl":105},{"sl":128}],"name":"testSimplified","pass":true,"statements":[{"sl":89},{"sl":108},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":130},{"sl":131},{"sl":132},{"sl":133},{"sl":137},{"sl":139},{"sl":142},{"sl":143},{"sl":148},{"sl":153}]},"test_565":{"methods":[{"sl":105},{"sl":128}],"name":"b_testBasicPiterbarg","pass":true,"statements":[{"sl":108},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":130},{"sl":131},{"sl":132},{"sl":142},{"sl":143},{"sl":146},{"sl":147},{"sl":153}]},"test_635":{"methods":[{"sl":87},{"sl":105},{"sl":128}],"name":"testMulti","pass":true,"statements":[{"sl":89},{"sl":108},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":130},{"sl":131},{"sl":132},{"sl":133},{"sl":137},{"sl":139},{"sl":142},{"sl":143},{"sl":144},{"sl":145},{"sl":153}]},"test_669":{"methods":[{"sl":105},{"sl":128}],"name":"a_testSimplifiedLinear","pass":true,"statements":[{"sl":108},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":130},{"sl":131},{"sl":132},{"sl":142},{"sl":143},{"sl":148},{"sl":153}]},"test_709":{"methods":[{"sl":87},{"sl":105},{"sl":128}],"name":"testMultiPiterbarg","pass":true,"statements":[{"sl":89},{"sl":108},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":130},{"sl":131},{"sl":132},{"sl":133},{"sl":137},{"sl":139},{"sl":142},{"sl":143},{"sl":144},{"sl":145},{"sl":153}]},"test_724":{"methods":[{"sl":87},{"sl":105},{"sl":128}],"name":"testSimplifiedLinear","pass":true,"statements":[{"sl":89},{"sl":108},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":130},{"sl":131},{"sl":132},{"sl":133},{"sl":137},{"sl":139},{"sl":142},{"sl":143},{"sl":148},{"sl":153}]},"test_799":{"methods":[{"sl":87},{"sl":105},{"sl":128}],"name":"testBasicPiterbarg","pass":true,"statements":[{"sl":89},{"sl":108},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":130},{"sl":131},{"sl":132},{"sl":133},{"sl":137},{"sl":139},{"sl":142},{"sl":143},{"sl":146},{"sl":147},{"sl":153}]},"test_877":{"methods":[{"sl":105},{"sl":128}],"name":"testCalibration","pass":true,"statements":[{"sl":108},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":130},{"sl":131},{"sl":132},{"sl":142},{"sl":143},{"sl":144},{"sl":145},{"sl":153}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [383, 709, 799, 724, 635, 562], [], [383, 709, 799, 724, 635, 562], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [561, 383, 196, 709, 399, 166, 799, 724, 635, 669, 565, 562, 877], [], [], [561, 383, 196, 709, 399, 166, 799, 724, 635, 669, 565, 562, 877], [561, 383, 196, 709, 399, 166, 799, 724, 635, 669, 565, 562, 877], [561, 383, 196, 709, 399, 166, 799, 724, 635, 669, 565, 562, 877], [561, 383, 196, 709, 399, 166, 799, 724, 635, 669, 565, 562, 877], [561, 383, 196, 709, 399, 166, 799, 724, 635, 669, 565, 562, 877], [561, 383, 196, 709, 399, 166, 799, 724, 635, 669, 565, 562, 877], [561, 383, 196, 709, 399, 166, 799, 724, 635, 669, 565, 562, 877], [561, 383, 196, 709, 399, 166, 799, 724, 635, 669, 565, 562, 877], [561, 383, 196, 709, 399, 166, 799, 724, 635, 669, 565, 562, 877], [561, 383, 196, 709, 399, 166, 799, 724, 635, 669, 565, 562, 877], [], [], [], [], [], [], [], [], [], [], [561, 383, 196, 709, 399, 166, 799, 724, 635, 669, 565, 562, 877], [], [561, 383, 196, 709, 399, 166, 799, 724, 635, 669, 565, 562, 877], [561, 383, 196, 709, 399, 166, 799, 724, 635, 669, 565, 562, 877], [561, 383, 196, 709, 399, 166, 799, 724, 635, 669, 565, 562, 877], [383, 709, 799, 724, 635, 562], [], [], [], [383, 709, 799, 724, 635, 562], [], [383, 709, 799, 724, 635, 562], [], [], [561, 383, 196, 709, 399, 166, 799, 724, 635, 669, 565, 562, 877], [561, 383, 196, 709, 399, 166, 799, 724, 635, 669, 565, 562, 877], [561, 196, 709, 399, 166, 635, 877], [561, 196, 709, 399, 166, 635, 877], [383, 799, 565], [383, 799, 565], [724, 669, 562], [], [], [], [], [561, 383, 196, 709, 399, 166, 799, 724, 635, 669, 565, 562, 877], [], []]