const NotepadBody = () => {
    return (
        <div id="np-body" style={divStyle}>
            <p style={textStyling}>                                  _ _ _</p>
            <p style={textStyling}>                               ^(- )- \---^-</p>
            <p style={textStyling}>                        ^--^-/              \-^-]-\--</p>
            <p style={textStyling}>                     -/          //                 - --\/</p>
            <p style={textStyling}>                  -/-           //         _//_          ---/</p>
            <p style={textStyling}>                 -            _//_  _       \\    //         )[</p>
            <p style={textStyling}>            _  -(     \\    -------- \      //_ _//_ _       -.-</p>
            <p style={textStyling}>             (-        \()           \\    / ---------        /-</p>
            <p style={textStyling}>             )\\--     (\\                //_    \\        )  -)--</p>
            <p style={textStyling}>              -\\                )     \\//              (/     ./</p>
            <p style={textStyling} className="staticTreeLine">            -.        _ _ _(     _ _ _ / \       o{"<"}  </p>
            <p style={textStyling} id="animateBird"></p>
            <p style={textStyling}>             \        ----      -----// . \_ _ _/\_             \-</p>
            <p style={textStyling}>             ).        (              [      ------         //-\</p>
            <p style={textStyling}>               (-     (         __    /   /               \-/.</p>
            <p style={textStyling}>              --          _ _  //\\  /   -\  //              --/</p>
            <p style={textStyling}>               -          - -\/    \/        /            \--.-</p>
            <p style={textStyling}>              )\             \/     | -     |/              -/</p>
            <p style={textStyling}>                --                  \             _      _\  \</p>
            <p style={textStyling}>                /  _    _   _      \/_      /_- /  _\ ./-</p>
            <p style={textStyling}>                --   -.    /    \ /      .  |</p>
            <p style={textStyling}>                                 /         \\</p>
            <p style={textStyling}>                               /   -         |\</p>
            <p style={textStyling}>                                       -      /</p>
            {/* <p style={textStyling}>                               ]   /         /</p> */}
            <p style={textStyling}>                               \     \      \</p>
            <p style={textStyling}>                               /           /_ _</p>
            <p style={textStyling}>                                | -       \    \</p>
            <p style={textStyling}>                                 {"//"}            /_</p>
            <p style={textStyling}>                                |_   /         \/</p>
            <p style={textStyling} className='staticTreeLine'>                              /| \    .    -     ]            </p>
            <p style={textStyling} id="animateDialog"></p>
            <p style={textStyling}>                               /           _     \\</p>
            <p style={textStyling} id="animateHead">                              \\         /       //</p>
            <p style={textStyling} id="animateBody">                              /  .                |O</p>
            <p style={textStyling} id="animateLegs">                             |-  -                \{"<"}\{">"}_//\</p>
            <p style={textStyling}>^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^   ^^ ^^    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^</p>
        </div>
    )
}

export default NotepadBody;

const divStyle = {
    height: 'auto',
    overflowY: 'hidden',
    overflowX: 'hidden',
    paddingTop: 'auto',
    position: 'absolute',
    bottom: '0',
}

const textStyling = {    
    margin: '0',
    fontSize: '14px',
    fontFamily: 'monospace, Consolas, Monaco, Andale Mono',
    fontWeight: 'bold',
    whiteSpace: 'pre',
    overflowY: 'hidden',
    overflowX: 'hidden',
    width: '1024px',
    height: '20px',
    lineHeight: '20px',
    position: 'relative',
}