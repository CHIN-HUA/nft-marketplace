

export default function musicplay(){


    return(
        <>
            <div>
                
                <div>
                    <midi-player src="https://cdn.jsdelivr.net/gh/cifkao/html-midi-player@2b12128/twinkle_twinkle.mid" sound-font visualizer="#myPianoRollVisualizer">
                    
                    </midi-player>
                </div>
                <div>
                    <script src="https://cdn.jsdelivr.net/combine/npm/tone@14.7.58,npm/@magenta/music@1.22.1/es6/core.js,npm/focus-visible@5,npm/html-midi-player@1.4.0"></script>
                </div>

                {/* <div>
                    <midi-visualizer type="piano-roll" id="myPianoRollVisualizer" 
                        src="https://cdn.jsdelivr.net/gh/cifkao/html-midi-player@2b12128/twinkle_twinkle.mid">
                    </midi-visualizer>
                </div> */}

                {/* <midi-player    
                    src="https://cdn.jsdelivr.net/gh/cifkao/html-midi-player@2b12128/twinkle_twinkle.mid"
                    sound-font visualizer="#myStaffVisualizer">
                </midi-player> */}

                {/* <midi-visualizer type="staff" id="myStaffVisualizer" 
                    src="https://cdn.jsdelivr.net/gh/cifkao/html-midi-player@2b12128/twinkle_twinkle.mid">
                </midi-visualizer> */}
                
            </div>
        </>
    
    )
}