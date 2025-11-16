import { css } from 'react-strict-dom';

const DARK = '@media (prefers-color-scheme: dark)';

export const amber = css.defineVars({
  1: { default: '#fefdfb' as const, [DARK]: '#16120c' as const },
  2: { default: '#fefbe9' as const, [DARK]: '#1d180f' as const },
  3: { default: '#fff7c2' as const, [DARK]: '#302008' as const },
  4: { default: '#ffee9c' as const, [DARK]: '#3f2700' as const },
  5: { default: '#fbe577' as const, [DARK]: '#4d3000' as const },
  6: { default: '#f3d673' as const, [DARK]: '#5c3d05' as const },
  7: { default: '#e9c162' as const, [DARK]: '#714f19' as const },
  8: { default: '#e2a336' as const, [DARK]: '#8f6424' as const },
  9: { default: '#ffc53d' as const, [DARK]: '#ffc53d' as const },
  10: { default: '#ffba18' as const, [DARK]: '#ffd60a' as const },
  11: { default: '#ab6400' as const, [DARK]: '#ffca16' as const },
  12: { default: '#4f3422' as const, [DARK]: '#ffe7b3' as const },
});

export const blue = css.defineVars({
  1: { default: '#fbfdff' as const, [DARK]: '#0d1520' as const },
  2: { default: '#f4faff' as const, [DARK]: '#111927' as const },
  3: { default: '#e6f4fe' as const, [DARK]: '#0d2847' as const },
  4: { default: '#d5efff' as const, [DARK]: '#003362' as const },
  5: { default: '#c2e5ff' as const, [DARK]: '#004074' as const },
  6: { default: '#acd8fc' as const, [DARK]: '#104d87' as const },
  7: { default: '#8ec8f6' as const, [DARK]: '#205d9e' as const },
  8: { default: '#5eb1ef' as const, [DARK]: '#2870bd' as const },
  9: { default: '#0090ff' as const, [DARK]: '#0090ff' as const },
  10: { default: '#0588f0' as const, [DARK]: '#3b9eff' as const },
  11: { default: '#0d74ce' as const, [DARK]: '#70b8ff' as const },
  12: { default: '#113264' as const, [DARK]: '#c2e6ff' as const },
});

export const bronze = css.defineVars({
  1: { default: '#fdfcfc' as const, [DARK]: '#141110' as const },
  2: { default: '#fdf7f5' as const, [DARK]: '#1c1917' as const },
  3: { default: '#f6edea' as const, [DARK]: '#262220' as const },
  4: { default: '#efe4df' as const, [DARK]: '#302a27' as const },
  5: { default: '#e7d9d3' as const, [DARK]: '#3b3330' as const },
  6: { default: '#dfcdc5' as const, [DARK]: '#493e3a' as const },
  7: { default: '#d3bcb3' as const, [DARK]: '#5a4c47' as const },
  8: { default: '#c2a499' as const, [DARK]: '#6f5f58' as const },
  9: { default: '#a18072' as const, [DARK]: '#a18072' as const },
  10: { default: '#957468' as const, [DARK]: '#ae8c7e' as const },
  11: { default: '#7d5e54' as const, [DARK]: '#d4b3a5' as const },
  12: { default: '#43302b' as const, [DARK]: '#ede0d9' as const },
});

export const brown = css.defineVars({
  1: { default: '#fefdfc' as const, [DARK]: '#12110f' as const },
  2: { default: '#fcf9f6' as const, [DARK]: '#1c1816' as const },
  3: { default: '#f6eee7' as const, [DARK]: '#28211d' as const },
  4: { default: '#f0e4d9' as const, [DARK]: '#322922' as const },
  5: { default: '#ebdaca' as const, [DARK]: '#3e3128' as const },
  6: { default: '#e4cdb7' as const, [DARK]: '#4d3c2f' as const },
  7: { default: '#dcbc9f' as const, [DARK]: '#614a39' as const },
  8: { default: '#cea37e' as const, [DARK]: '#7c5f46' as const },
  9: { default: '#ad7f58' as const, [DARK]: '#ad7f58' as const },
  10: { default: '#a07553' as const, [DARK]: '#b88c67' as const },
  11: { default: '#815e46' as const, [DARK]: '#dbb594' as const },
  12: { default: '#3e332e' as const, [DARK]: '#f2e1ca' as const },
});

export const crimson = css.defineVars({
  1: { default: '#fffcfd' as const, [DARK]: '#191114' as const },
  2: { default: '#fef7f9' as const, [DARK]: '#201318' as const },
  3: { default: '#ffe9f0' as const, [DARK]: '#381525' as const },
  4: { default: '#fedce7' as const, [DARK]: '#4d122f' as const },
  5: { default: '#facedd' as const, [DARK]: '#5c1839' as const },
  6: { default: '#f3bed1' as const, [DARK]: '#6d2545' as const },
  7: { default: '#eaacc3' as const, [DARK]: '#873356' as const },
  8: { default: '#e093b2' as const, [DARK]: '#b0436e' as const },
  9: { default: '#e93d82' as const, [DARK]: '#e93d82' as const },
  10: { default: '#df3478' as const, [DARK]: '#ee518a' as const },
  11: { default: '#cb1d63' as const, [DARK]: '#ff92ad' as const },
  12: { default: '#621639' as const, [DARK]: '#fdd3e8' as const },
});

export const cyan = css.defineVars({
  1: { default: '#fafdfe' as const, [DARK]: '#0b161a' as const },
  2: { default: '#f2fafb' as const, [DARK]: '#101b20' as const },
  3: { default: '#def7f9' as const, [DARK]: '#082c36' as const },
  4: { default: '#caf1f6' as const, [DARK]: '#003848' as const },
  5: { default: '#b5e9f0' as const, [DARK]: '#004558' as const },
  6: { default: '#9ddde7' as const, [DARK]: '#045468' as const },
  7: { default: '#7dcedc' as const, [DARK]: '#12677e' as const },
  8: { default: '#3db9cf' as const, [DARK]: '#11809c' as const },
  9: { default: '#00a2c7' as const, [DARK]: '#00a2c7' as const },
  10: { default: '#0797b9' as const, [DARK]: '#23afd0' as const },
  11: { default: '#107d98' as const, [DARK]: '#4ccce6' as const },
  12: { default: '#0d3c48' as const, [DARK]: '#b6ecf7' as const },
});

export const gold = css.defineVars({
  1: { default: '#fdfdfc' as const, [DARK]: '#121211' as const },
  2: { default: '#faf9f2' as const, [DARK]: '#1b1a17' as const },
  3: { default: '#f2f0e7' as const, [DARK]: '#24231f' as const },
  4: { default: '#eae6db' as const, [DARK]: '#2d2b26' as const },
  5: { default: '#e1dccf' as const, [DARK]: '#38352e' as const },
  6: { default: '#d8d0bf' as const, [DARK]: '#444039' as const },
  7: { default: '#cbc0aa' as const, [DARK]: '#544f46' as const },
  8: { default: '#b9a88d' as const, [DARK]: '#696256' as const },
  9: { default: '#978365' as const, [DARK]: '#978365' as const },
  10: { default: '#8c7a5e' as const, [DARK]: '#a39073' as const },
  11: { default: '#71624b' as const, [DARK]: '#cbb99f' as const },
  12: { default: '#3b352b' as const, [DARK]: '#e8e2d9' as const },
});

export const grass = css.defineVars({
  1: { default: '#fbfefb' as const, [DARK]: '#0e1511' as const },
  2: { default: '#f5fbf5' as const, [DARK]: '#141a15' as const },
  3: { default: '#e9f6e9' as const, [DARK]: '#1b2a1e' as const },
  4: { default: '#daf1db' as const, [DARK]: '#1d3a24' as const },
  5: { default: '#c9e8ca' as const, [DARK]: '#25482d' as const },
  6: { default: '#b2ddb5' as const, [DARK]: '#2d5736' as const },
  7: { default: '#94ce9a' as const, [DARK]: '#366740' as const },
  8: { default: '#65ba74' as const, [DARK]: '#3e7949' as const },
  9: { default: '#46a758' as const, [DARK]: '#46a758' as const },
  10: { default: '#3e9b4f' as const, [DARK]: '#53b365' as const },
  11: { default: '#2a7e3b' as const, [DARK]: '#71d083' as const },
  12: { default: '#203c25' as const, [DARK]: '#c2f0c2' as const },
});

export const gray = css.defineVars({
  1: { default: '#fcfcfc' as const, [DARK]: '#111111' as const },
  2: { default: '#f9f9f9' as const, [DARK]: '#191919' as const },
  3: { default: '#f0f0f0' as const, [DARK]: '#222222' as const },
  4: { default: '#e8e8e8' as const, [DARK]: '#2a2a2a' as const },
  5: { default: '#e0e0e0' as const, [DARK]: '#313131' as const },
  6: { default: '#d9d9d9' as const, [DARK]: '#3a3a3a' as const },
  7: { default: '#cecece' as const, [DARK]: '#484848' as const },
  8: { default: '#bbbbbb' as const, [DARK]: '#606060' as const },
  9: { default: '#8d8d8d' as const, [DARK]: '#6e6e6e' as const },
  10: { default: '#838383' as const, [DARK]: '#7b7b7b' as const },
  11: { default: '#646464' as const, [DARK]: '#b4b4b4' as const },
  12: { default: '#202020' as const, [DARK]: '#eeeeee' as const },
});

export const green = css.defineVars({
  1: { default: '#fbfefc' as const, [DARK]: '#0e1512' as const },
  2: { default: '#f4fbf6' as const, [DARK]: '#121b17' as const },
  3: { default: '#e6f6eb' as const, [DARK]: '#132d21' as const },
  4: { default: '#d6f1df' as const, [DARK]: '#113b29' as const },
  5: { default: '#c4e8d1' as const, [DARK]: '#174933' as const },
  6: { default: '#adddc0' as const, [DARK]: '#20573e' as const },
  7: { default: '#8eceaa' as const, [DARK]: '#28684a' as const },
  8: { default: '#5bb98b' as const, [DARK]: '#2f7c57' as const },
  9: { default: '#30a46c' as const, [DARK]: '#30a46c' as const },
  10: { default: '#2b9a66' as const, [DARK]: '#33b074' as const },
  11: { default: '#218358' as const, [DARK]: '#3dd68c' as const },
  12: { default: '#193b2d' as const, [DARK]: '#b1f1cb' as const },
});

export const indigo = css.defineVars({
  1: { default: '#fdfdfe' as const, [DARK]: '#11131f' as const },
  2: { default: '#f7f9ff' as const, [DARK]: '#141726' as const },
  3: { default: '#edf2fe' as const, [DARK]: '#182449' as const },
  4: { default: '#e1e9ff' as const, [DARK]: '#1d2e62' as const },
  5: { default: '#d2deff' as const, [DARK]: '#253974' as const },
  6: { default: '#c1d0ff' as const, [DARK]: '#304384' as const },
  7: { default: '#abbdf9' as const, [DARK]: '#3a4f97' as const },
  8: { default: '#8da4ef' as const, [DARK]: '#435db1' as const },
  9: { default: '#3e63dd' as const, [DARK]: '#3e63dd' as const },
  10: { default: '#3358d4' as const, [DARK]: '#5472e4' as const },
  11: { default: '#3a5bc7' as const, [DARK]: '#9eb1ff' as const },
  12: { default: '#1f2d5c' as const, [DARK]: '#d6e1ff' as const },
});

export const iris = css.defineVars({
  1: { default: '#fdfdff' as const, [DARK]: '#13131e' as const },
  2: { default: '#f8f8ff' as const, [DARK]: '#171625' as const },
  3: { default: '#f0f1fe' as const, [DARK]: '#202248' as const },
  4: { default: '#e6e7ff' as const, [DARK]: '#262a65' as const },
  5: { default: '#dadcff' as const, [DARK]: '#303374' as const },
  6: { default: '#cbcdff' as const, [DARK]: '#3d3e82' as const },
  7: { default: '#b8baf8' as const, [DARK]: '#4a4a95' as const },
  8: { default: '#9b9ef0' as const, [DARK]: '#5958b1' as const },
  9: { default: '#5b5bd6' as const, [DARK]: '#5b5bd6' as const },
  10: { default: '#5151cd' as const, [DARK]: '#6e6ade' as const },
  11: { default: '#5753c6' as const, [DARK]: '#b1a9ff' as const },
  12: { default: '#272962' as const, [DARK]: '#e0dffe' as const },
});

export const jade = css.defineVars({
  1: { default: '#fbfefd' as const, [DARK]: '#0d1512' as const },
  2: { default: '#f4fbf7' as const, [DARK]: '#121c18' as const },
  3: { default: '#e6f7ed' as const, [DARK]: '#0f2e22' as const },
  4: { default: '#d6f1e3' as const, [DARK]: '#0b3b2c' as const },
  5: { default: '#c3e9d7' as const, [DARK]: '#114837' as const },
  6: { default: '#acdec8' as const, [DARK]: '#1b5745' as const },
  7: { default: '#8bceb6' as const, [DARK]: '#246854' as const },
  8: { default: '#56ba9f' as const, [DARK]: '#2a7e68' as const },
  9: { default: '#29a383' as const, [DARK]: '#29a383' as const },
  10: { default: '#26997b' as const, [DARK]: '#27b08b' as const },
  11: { default: '#208368' as const, [DARK]: '#1fd8a4' as const },
  12: { default: '#1d3b31' as const, [DARK]: '#adf0d4' as const },
});

export const lime = css.defineVars({
  1: { default: '#fcfdfa' as const, [DARK]: '#11130c' as const },
  2: { default: '#f8faf3' as const, [DARK]: '#151a10' as const },
  3: { default: '#eef6d6' as const, [DARK]: '#1f2917' as const },
  4: { default: '#e2f0bd' as const, [DARK]: '#29371d' as const },
  5: { default: '#d3e7a6' as const, [DARK]: '#334423' as const },
  6: { default: '#c2da91' as const, [DARK]: '#3d522a' as const },
  7: { default: '#abc978' as const, [DARK]: '#496231' as const },
  8: { default: '#8db654' as const, [DARK]: '#577538' as const },
  9: { default: '#bdee63' as const, [DARK]: '#bdee63' as const },
  10: { default: '#b0e64c' as const, [DARK]: '#d4ff70' as const },
  11: { default: '#5c7c2f' as const, [DARK]: '#bde56c' as const },
  12: { default: '#37401c' as const, [DARK]: '#e3f7ba' as const },
});

export const mauve = css.defineVars({
  1: { default: '#fdfcfd' as const, [DARK]: '#121113' as const },
  2: { default: '#faf9fb' as const, [DARK]: '#1a191b' as const },
  3: { default: '#f2eff3' as const, [DARK]: '#232225' as const },
  4: { default: '#eae7ec' as const, [DARK]: '#2b292d' as const },
  5: { default: '#e3dfe6' as const, [DARK]: '#323035' as const },
  6: { default: '#dbd8e0' as const, [DARK]: '#3c393f' as const },
  7: { default: '#d0cdd7' as const, [DARK]: '#49474e' as const },
  8: { default: '#bcbac7' as const, [DARK]: '#625f69' as const },
  9: { default: '#8e8c99' as const, [DARK]: '#6f6d78' as const },
  10: { default: '#84828e' as const, [DARK]: '#7c7a85' as const },
  11: { default: '#65636d' as const, [DARK]: '#b5b2bc' as const },
  12: { default: '#211f26' as const, [DARK]: '#eeeef0' as const },
});

export const mint = css.defineVars({
  1: { default: '#f9fefd' as const, [DARK]: '#0e1515' as const },
  2: { default: '#f2fbf9' as const, [DARK]: '#0f1b1b' as const },
  3: { default: '#ddf9f2' as const, [DARK]: '#092c2b' as const },
  4: { default: '#c8f4e9' as const, [DARK]: '#003a38' as const },
  5: { default: '#b3ecde' as const, [DARK]: '#004744' as const },
  6: { default: '#9ce0d0' as const, [DARK]: '#105650' as const },
  7: { default: '#7ecfbd' as const, [DARK]: '#1e685f' as const },
  8: { default: '#4cbba5' as const, [DARK]: '#277f70' as const },
  9: { default: '#86ead4' as const, [DARK]: '#86ead4' as const },
  10: { default: '#7de0cb' as const, [DARK]: '#a8f5e5' as const },
  11: { default: '#027864' as const, [DARK]: '#58d5ba' as const },
  12: { default: '#16433c' as const, [DARK]: '#c4f5e1' as const },
});

export const olive = css.defineVars({
  1: { default: '#fcfdfc' as const, [DARK]: '#111210' as const },
  2: { default: '#f8faf8' as const, [DARK]: '#181917' as const },
  3: { default: '#eff1ef' as const, [DARK]: '#212220' as const },
  4: { default: '#e7e9e7' as const, [DARK]: '#282a27' as const },
  5: { default: '#dfe2df' as const, [DARK]: '#2f312e' as const },
  6: { default: '#d7dad7' as const, [DARK]: '#383a36' as const },
  7: { default: '#cccfcc' as const, [DARK]: '#454843' as const },
  8: { default: '#b9bcb8' as const, [DARK]: '#5c625b' as const },
  9: { default: '#898e87' as const, [DARK]: '#687066' as const },
  10: { default: '#7f847d' as const, [DARK]: '#767d74' as const },
  11: { default: '#60655f' as const, [DARK]: '#afb5ad' as const },
  12: { default: '#1d211c' as const, [DARK]: '#eceeec' as const },
});

export const orange = css.defineVars({
  1: { default: '#fefcfb' as const, [DARK]: '#17120e' as const },
  2: { default: '#fff7ed' as const, [DARK]: '#1e160f' as const },
  3: { default: '#ffefd6' as const, [DARK]: '#331e0b' as const },
  4: { default: '#ffdfb5' as const, [DARK]: '#462100' as const },
  5: { default: '#ffd19a' as const, [DARK]: '#562800' as const },
  6: { default: '#ffc182' as const, [DARK]: '#66350c' as const },
  7: { default: '#f5ae73' as const, [DARK]: '#7e451d' as const },
  8: { default: '#ec9455' as const, [DARK]: '#a35829' as const },
  9: { default: '#f76b15' as const, [DARK]: '#f76b15' as const },
  10: { default: '#ef5f00' as const, [DARK]: '#ff801f' as const },
  11: { default: '#cc4e00' as const, [DARK]: '#ffa057' as const },
  12: { default: '#582d1d' as const, [DARK]: '#ffe0c2' as const },
});

export const pink = css.defineVars({
  1: { default: '#fffcfe' as const, [DARK]: '#191117' as const },
  2: { default: '#fef7fb' as const, [DARK]: '#21121d' as const },
  3: { default: '#fee9f5' as const, [DARK]: '#37172f' as const },
  4: { default: '#fbdcef' as const, [DARK]: '#4b143d' as const },
  5: { default: '#f6cee7' as const, [DARK]: '#591c47' as const },
  6: { default: '#efbfdd' as const, [DARK]: '#692955' as const },
  7: { default: '#e7acd0' as const, [DARK]: '#833869' as const },
  8: { default: '#dd93c2' as const, [DARK]: '#a84885' as const },
  9: { default: '#d6409f' as const, [DARK]: '#d6409f' as const },
  10: { default: '#cf3897' as const, [DARK]: '#de51a8' as const },
  11: { default: '#c2298a' as const, [DARK]: '#ff8dcc' as const },
  12: { default: '#651249' as const, [DARK]: '#fdd1ea' as const },
});

export const plum = css.defineVars({
  1: { default: '#fefcff' as const, [DARK]: '#181118' as const },
  2: { default: '#fdf7fd' as const, [DARK]: '#201320' as const },
  3: { default: '#fbebfb' as const, [DARK]: '#351a35' as const },
  4: { default: '#f7def8' as const, [DARK]: '#451d47' as const },
  5: { default: '#f2d1f3' as const, [DARK]: '#512454' as const },
  6: { default: '#e9c2ec' as const, [DARK]: '#5e3061' as const },
  7: { default: '#deade3' as const, [DARK]: '#734079' as const },
  8: { default: '#cf91d8' as const, [DARK]: '#92549c' as const },
  9: { default: '#ab4aba' as const, [DARK]: '#ab4aba' as const },
  10: { default: '#a144af' as const, [DARK]: '#b658c4' as const },
  11: { default: '#953ea3' as const, [DARK]: '#e796f3' as const },
  12: { default: '#53195d' as const, [DARK]: '#f4d4f4' as const },
});

export const purple = css.defineVars({
  1: { default: '#fefcfe' as const, [DARK]: '#18111b' as const },
  2: { default: '#fbf7fe' as const, [DARK]: '#1e1523' as const },
  3: { default: '#f7edfe' as const, [DARK]: '#301c3b' as const },
  4: { default: '#f2e2fc' as const, [DARK]: '#3d224e' as const },
  5: { default: '#ead5f9' as const, [DARK]: '#48295c' as const },
  6: { default: '#e0c4f4' as const, [DARK]: '#54346b' as const },
  7: { default: '#d1afec' as const, [DARK]: '#664282' as const },
  8: { default: '#be93e4' as const, [DARK]: '#8457aa' as const },
  9: { default: '#8e4ec6' as const, [DARK]: '#8e4ec6' as const },
  10: { default: '#8347b9' as const, [DARK]: '#9a5cd0' as const },
  11: { default: '#8145b5' as const, [DARK]: '#d19dff' as const },
  12: { default: '#402060' as const, [DARK]: '#ecd9fa' as const },
});

export const red = css.defineVars({
  1: { default: '#fffcfc' as const, [DARK]: '#191111' as const },
  2: { default: '#fff7f7' as const, [DARK]: '#201314' as const },
  3: { default: '#feebec' as const, [DARK]: '#3b1219' as const },
  4: { default: '#ffdbdc' as const, [DARK]: '#500f1c' as const },
  5: { default: '#ffcdce' as const, [DARK]: '#611623' as const },
  6: { default: '#fdbdbe' as const, [DARK]: '#72232d' as const },
  7: { default: '#f4a9aa' as const, [DARK]: '#8c333a' as const },
  8: { default: '#eb8e90' as const, [DARK]: '#b54548' as const },
  9: { default: '#e5484d' as const, [DARK]: '#e5484d' as const },
  10: { default: '#dc3e42' as const, [DARK]: '#ec5d5e' as const },
  11: { default: '#ce2c31' as const, [DARK]: '#ff9592' as const },
  12: { default: '#641723' as const, [DARK]: '#ffd1d9' as const },
});

export const ruby = css.defineVars({
  1: { default: '#fffcfd' as const, [DARK]: '#191113' as const },
  2: { default: '#fff7f8' as const, [DARK]: '#1e1517' as const },
  3: { default: '#feeaed' as const, [DARK]: '#3a141e' as const },
  4: { default: '#ffdce1' as const, [DARK]: '#4e1325' as const },
  5: { default: '#ffced6' as const, [DARK]: '#5e1a2e' as const },
  6: { default: '#f8bfc8' as const, [DARK]: '#6f2539' as const },
  7: { default: '#efacb8' as const, [DARK]: '#883447' as const },
  8: { default: '#e592a3' as const, [DARK]: '#b3445a' as const },
  9: { default: '#e54666' as const, [DARK]: '#e54666' as const },
  10: { default: '#dc3b5d' as const, [DARK]: '#ec5a72' as const },
  11: { default: '#ca244d' as const, [DARK]: '#ff949d' as const },
  12: { default: '#64172b' as const, [DARK]: '#fed2e1' as const },
});

export const sage = css.defineVars({
  1: { default: '#fbfdfc' as const, [DARK]: '#101211' as const },
  2: { default: '#f7f9f8' as const, [DARK]: '#171918' as const },
  3: { default: '#eef1f0' as const, [DARK]: '#202221' as const },
  4: { default: '#e6e9e8' as const, [DARK]: '#272a29' as const },
  5: { default: '#dfe2e0' as const, [DARK]: '#2e3130' as const },
  6: { default: '#d7dad9' as const, [DARK]: '#373b39' as const },
  7: { default: '#cbcfcd' as const, [DARK]: '#444947' as const },
  8: { default: '#b8bcba' as const, [DARK]: '#5b625f' as const },
  9: { default: '#868e8b' as const, [DARK]: '#63706b' as const },
  10: { default: '#7c8481' as const, [DARK]: '#717d79' as const },
  11: { default: '#5f6563' as const, [DARK]: '#adb5b2' as const },
  12: { default: '#1a211e' as const, [DARK]: '#eceeed' as const },
});

export const sand = css.defineVars({
  1: { default: '#fdfdfc' as const, [DARK]: '#111110' as const },
  2: { default: '#f9f9f8' as const, [DARK]: '#191918' as const },
  3: { default: '#f1f0ef' as const, [DARK]: '#222221' as const },
  4: { default: '#e9e8e6' as const, [DARK]: '#2a2a28' as const },
  5: { default: '#e2e1de' as const, [DARK]: '#31312e' as const },
  6: { default: '#dad9d6' as const, [DARK]: '#3b3a37' as const },
  7: { default: '#cfceca' as const, [DARK]: '#494844' as const },
  8: { default: '#bcbbb5' as const, [DARK]: '#62605b' as const },
  9: { default: '#8d8d86' as const, [DARK]: '#6f6d66' as const },
  10: { default: '#82827c' as const, [DARK]: '#7c7b74' as const },
  11: { default: '#63635e' as const, [DARK]: '#b5b3ad' as const },
  12: { default: '#21201c' as const, [DARK]: '#eeeeec' as const },
});

export const sky = css.defineVars({
  1: { default: '#f9feff' as const, [DARK]: '#0d141f' as const },
  2: { default: '#f1fafd' as const, [DARK]: '#111a27' as const },
  3: { default: '#e1f6fd' as const, [DARK]: '#112840' as const },
  4: { default: '#d1f0fa' as const, [DARK]: '#113555' as const },
  5: { default: '#bee7f5' as const, [DARK]: '#154467' as const },
  6: { default: '#a9daed' as const, [DARK]: '#1b537b' as const },
  7: { default: '#8dcae3' as const, [DARK]: '#1f6692' as const },
  8: { default: '#60b3d7' as const, [DARK]: '#197cae' as const },
  9: { default: '#7ce2fe' as const, [DARK]: '#7ce2fe' as const },
  10: { default: '#74daf8' as const, [DARK]: '#a8eeff' as const },
  11: { default: '#00749e' as const, [DARK]: '#75c7f0' as const },
  12: { default: '#1d3e56' as const, [DARK]: '#c2f3ff' as const },
});

export const slate = css.defineVars({
  1: { default: '#fcfcfd' as const, [DARK]: '#111113' as const },
  2: { default: '#f9f9fb' as const, [DARK]: '#18191b' as const },
  3: { default: '#f0f0f3' as const, [DARK]: '#212225' as const },
  4: { default: '#e8e8ec' as const, [DARK]: '#272a2d' as const },
  5: { default: '#e0e1e6' as const, [DARK]: '#2e3135' as const },
  6: { default: '#d9d9e0' as const, [DARK]: '#363a3f' as const },
  7: { default: '#cdced6' as const, [DARK]: '#43484e' as const },
  8: { default: '#b9bbc6' as const, [DARK]: '#5a6169' as const },
  9: { default: '#8b8d98' as const, [DARK]: '#696e77' as const },
  10: { default: '#80838d' as const, [DARK]: '#777b84' as const },
  11: { default: '#60646c' as const, [DARK]: '#b0b4ba' as const },
  12: { default: '#1c2024' as const, [DARK]: '#edeef0' as const },
});

export const teal = css.defineVars({
  1: { default: '#fafefd' as const, [DARK]: '#0d1514' as const },
  2: { default: '#f3fbf9' as const, [DARK]: '#111c1b' as const },
  3: { default: '#e0f8f3' as const, [DARK]: '#0d2d2a' as const },
  4: { default: '#ccf3ea' as const, [DARK]: '#023b37' as const },
  5: { default: '#b8eae0' as const, [DARK]: '#084843' as const },
  6: { default: '#a1ded2' as const, [DARK]: '#145750' as const },
  7: { default: '#83cdc1' as const, [DARK]: '#1c6961' as const },
  8: { default: '#53b9ab' as const, [DARK]: '#207e73' as const },
  9: { default: '#12a594' as const, [DARK]: '#12a594' as const },
  10: { default: '#0d9b8a' as const, [DARK]: '#0eb39e' as const },
  11: { default: '#008573' as const, [DARK]: '#0bd8b6' as const },
  12: { default: '#0d3d38' as const, [DARK]: '#adf0dd' as const },
});

export const tomato = css.defineVars({
  1: { default: '#fffcfc' as const, [DARK]: '#181111' as const },
  2: { default: '#fff8f7' as const, [DARK]: '#1f1513' as const },
  3: { default: '#feebe7' as const, [DARK]: '#391714' as const },
  4: { default: '#ffdcd3' as const, [DARK]: '#4e1511' as const },
  5: { default: '#ffcdc2' as const, [DARK]: '#5e1c16' as const },
  6: { default: '#fdbdaf' as const, [DARK]: '#6e2920' as const },
  7: { default: '#f5a898' as const, [DARK]: '#853a2d' as const },
  8: { default: '#ec8e7b' as const, [DARK]: '#ac4d39' as const },
  9: { default: '#e54d2e' as const, [DARK]: '#e54d2e' as const },
  10: { default: '#dd4425' as const, [DARK]: '#ec6142' as const },
  11: { default: '#d13415' as const, [DARK]: '#ff977d' as const },
  12: { default: '#5c271f' as const, [DARK]: '#fbd3cb' as const },
});

export const violet = css.defineVars({
  1: { default: '#fdfcfe' as const, [DARK]: '#14121f' as const },
  2: { default: '#faf8ff' as const, [DARK]: '#1b1525' as const },
  3: { default: '#f4f0fe' as const, [DARK]: '#291f43' as const },
  4: { default: '#ebe4ff' as const, [DARK]: '#33255b' as const },
  5: { default: '#e1d9ff' as const, [DARK]: '#3c2e69' as const },
  6: { default: '#d4cafe' as const, [DARK]: '#473876' as const },
  7: { default: '#c2b5f5' as const, [DARK]: '#56468b' as const },
  8: { default: '#aa99ec' as const, [DARK]: '#6958ad' as const },
  9: { default: '#6e56cf' as const, [DARK]: '#6e56cf' as const },
  10: { default: '#654dc4' as const, [DARK]: '#7d66d9' as const },
  11: { default: '#6550b9' as const, [DARK]: '#baa7ff' as const },
  12: { default: '#2f265f' as const, [DARK]: '#e2ddfe' as const },
});

export const yellow = css.defineVars({
  1: { default: '#fdfdf9' as const, [DARK]: '#14120b' as const },
  2: { default: '#fefce9' as const, [DARK]: '#1b180f' as const },
  3: { default: '#fffab8' as const, [DARK]: '#2d2305' as const },
  4: { default: '#fff394' as const, [DARK]: '#362b00' as const },
  5: { default: '#ffe770' as const, [DARK]: '#433500' as const },
  6: { default: '#f3d768' as const, [DARK]: '#524202' as const },
  7: { default: '#e4c767' as const, [DARK]: '#665417' as const },
  8: { default: '#d5ae39' as const, [DARK]: '#836a21' as const },
  9: { default: '#ffe629' as const, [DARK]: '#ffe629' as const },
  10: { default: '#ffdc00' as const, [DARK]: '#ffff57' as const },
  11: { default: '#9e6c00' as const, [DARK]: '#f5e147' as const },
  12: { default: '#473b1f' as const, [DARK]: '#f6eeb4' as const },
});

export const white = css.defineConsts({ default: '#FFFFFF' as const });

export const black = css.defineConsts({ default: '#000000' as const });
