const path = window.location.host === "tanukichampion.ru" ? "/assets/game3/" : "";
let game = {
    statusGame: undefined,
    width: 1920,
    height: 1080,
    canvas: null,
    info: {
        activePlayer: 'tanuki',
        pause: true,
        speed: 4,
        miumiu: null,
        pauseTime: false,
        timerStart: null,
        score: 0,
        combo: 1,
        xCombo: 0,
        time: null,
        userName: '',
        modalMode: 'selectPlayer',
        round: 0,
        roundMap: {},
        scoreInfo: {
            min: 49,
            middle: 199,
        }
    },
    options: {
        fontName: "KulminoituvaRegular",
        sushiLine: 800,
        sushiDie: 950,
        full: false,
    },
    ctx: null,
    sprites: {
        infoBlock: {
            index: 0,
            key: 'idle',
            show: false,
            images: {
                idle: [
                    path + 'images/Bubble_1.png',
                    path + 'images/Bubble_2.png',
                    path + 'images/personag/character1_1.png',
                    path + 'images/personag/character1_2.png',
                    path + 'images/personag/character2_1.png',
                    path + 'images/personag/character2_2.png',
                    path + 'images/personag/character3_1.png',
                    path + 'images/personag/character3_2.png',
                ]
            } 
        },
        ligth: {
            index: 0,
            alpha: {
                value: 0,
                max: 1,
                min: 0.2,
            },
            key: 'idle',
            images: {
                idle: [ path + 'images/light_1.png' ]
            }  
        },
        btnEvent: {
            index: 0,
            key: 'idle',
            images: {
                idle: [ path + 'images/btm/button_0.png' ]
            } 
        },
        triangle: {
            index: 0,
            key: 'idle',
            images: {
                idle: [ path + 'images/block/Triangle_1.png' ]
            }
        },
        background: {
            index: 0,
            key: 'idle',
            images: {
                idle: [ path + 'images/background.png' ]
            }
        },
        buttonJump: {
            index: 0,
            key: 'idle',
            images: {
                idle: [ path + 'images/block/start_jump_button.png', path + 'images/block/button.png', path + 'images/btn.svg' ]
            }
        },
        sushi: {
            index: 0,
            key: 'idle',
            images: {
                1: [
                    path + 'images/sushi/1/Sushi_1.png',
                    path + 'images/sushi/1/Sushi_1_green.png',
                    path + 'images/sushi/1/Sushi_1_red.png',
                ],
                2: [
                    path + 'images/sushi/2/Sushi_2.png',
                    path + 'images/sushi/2/Sushi_2_green.png',
                    path + 'images/sushi/2/Sushi_2_red.png',
                ],
                3: [
                    path + 'images/sushi/3/Sushi_3.png',
                    path + 'images/sushi/3/Sushi_3_green.png',
                    path + 'images/sushi/3/Sushi_3_red.png',
                ],
                4: [
                    path + 'images/sushi/4/Sushi_4.png',
                    path + 'images/sushi/4/Sushi_4_green.png',
                    path + 'images/sushi/4/Sushi_4_red.png',
                ],
                5: [
                    path + 'images/sushi/5/Sushi_5.png',
                    path + 'images/sushi/5/Sushi_5_green.png',
                    path + 'images/sushi/5/Sushi_5_red.png',
                ],
                6: [
                    path + 'images/sushi/6/Sushi_6.png',
                    path + 'images/sushi/6/Sushi_6_green.png',
                    path + 'images/sushi/6/Sushi_6_red.png',
                ],
                7: [
                    path + 'images/sushi/7/Sushi_7.png',
                    path + 'images/sushi/7/Sushi_7_green.png',
                    path + 'images/sushi/7/Sushi_7_red.png',
                ],
            }
        },
        bgPlayer: {
            index: 0,
            active: 2,
            key: 'animate',
            images: {
                idle1: [ path + 'images/bg_animation/Background_animation_1/Background_animation_1_1.png' ],
                animate1: [
                    path + 'images/bg_animation/Background_animation_1/Background_animation_1_1.png',
                    path + 'images/bg_animation/Background_animation_1/Background_animation_1_2.png',
                    path + 'images/bg_animation/Background_animation_1/Background_animation_1_3.png',
                    path + 'images/bg_animation/Background_animation_1/Background_animation_1_4.png',
                ],
                idle2: [ path + 'images/bg_animation/Background_animation_2/Background_animation_1_1.png' ],
                animate2: [
                    path + 'images/bg_animation/Background_animation_2/Background_animation_1_1.png',
                    path + 'images/bg_animation/Background_animation_2/Background_animation_1_2.png',
                    path + 'images/bg_animation/Background_animation_2/Background_animation_1_3.png',
                    path + 'images/bg_animation/Background_animation_2/Background_animation_1_4.png',
                ],
                idle3: [ path + 'images/bg_animation/Background_animation_3/Background_animation_3_1.png' ],
                animate3: [
                    path + 'images/bg_animation/Background_animation_3/Background_animation_3_1.png',
                    path + 'images/bg_animation/Background_animation_3/Background_animation_3_2.png',
                    path + 'images/bg_animation/Background_animation_3/Background_animation_3_3.png',
                    path + 'images/bg_animation/Background_animation_3/Background_animation_3_4.png',
                ],
            }
        },
        player1: {
            index: 0,
            key: 'idle',
            images: {
                clap: [
                    path + 'images/personag/1_player/1_player_1/1_player_1_1.png',
                    path + 'images/personag/1_player/1_player_1/1_player_1_2.png',
                    path + 'images/personag/1_player/1_player_1/1_player_1_3.png',
                    path + 'images/personag/1_player/1_player_1/1_player_1_4.png',
                    path + 'images/personag/1_player/1_player_1/1_player_1_5.png',
                    path + 'images/personag/1_player/1_player_1/1_player_1_6.png',
                ],
                greatJoy: [
                    path + 'images/personag/1_player/1_player_2/1_player_2_1.png',
                    path + 'images/personag/1_player/1_player_2/1_player_2_2.png',
                    path + 'images/personag/1_player/1_player_2/1_player_2_3.png',
                    path + 'images/personag/1_player/1_player_2/1_player_2_4.png',
                    path + 'images/personag/1_player/1_player_2/1_player_2_5.png',
                    path + 'images/personag/1_player/1_player_2/1_player_2_6.png',
                ],
                miss: [
                    path + 'images/personag/1_player/1_player_3/1_player_3_1.png',
                    path + 'images/personag/1_player/1_player_3/1_player_3_2.png',
                    path + 'images/personag/1_player/1_player_3/1_player_3_3.png',
                    path + 'images/personag/1_player/1_player_3/1_player_3_4.png',
                    path + 'images/personag/1_player/1_player_3/1_player_3_5.png',
                    path + 'images/personag/1_player/1_player_3/1_player_3_6.png',
                ],
                fear: [
                    path + 'images/personag/1_player/1_player_4/1_player_4_1.png',
                    path + 'images/personag/1_player/1_player_4/1_player_4_2.png',
                    path + 'images/personag/1_player/1_player_4/1_player_4_3.png',
                    path + 'images/personag/1_player/1_player_4/1_player_4_4.png',
                    path + 'images/personag/1_player/1_player_4/1_player_4_5.png',
                    path + 'images/personag/1_player/1_player_4/1_player_4_6.png',
                ],
                victory: [
                    path + 'images/personag/1_player/1_player_5/1_player_5_1.png',
                    path + 'images/personag/1_player/1_player_5/1_player_5_2.png',
                    path + 'images/personag/1_player/1_player_5/1_player_5_3.png',
                    path + 'images/personag/1_player/1_player_5/1_player_5_4.png',
                    path + 'images/personag/1_player/1_player_5/1_player_5_5.png',
                    path + 'images/personag/1_player/1_player_5/1_player_5_6.png',
                ],
                upset: [
                    path + 'images/personag/1_player/1_player_6/1_player_6_1.png',
                    path + 'images/personag/1_player/1_player_6/1_player_6_2.png',
                    path + 'images/personag/1_player/1_player_6/1_player_6_3.png',
                    path + 'images/personag/1_player/1_player_6/1_player_6_4.png',
                    path + 'images/personag/1_player/1_player_6/1_player_6_5.png',
                    path + 'images/personag/1_player/1_player_6/1_player_6_6.png',
                ],
                idle: [
                    path + 'images/personag/1_player/1_player_clap/1_player_clap_1.png',
                    path + 'images/personag/1_player/1_player_clap/1_player_clap_2.png',
                    path + 'images/personag/1_player/1_player_clap/1_player_clap_3.png',
                    path + 'images/personag/1_player/1_player_clap/1_player_clap_4.png',
                    path + 'images/personag/1_player/1_player_clap/1_player_clap_5.png',
                    path + 'images/personag/1_player/1_player_clap/1_player_clap_6.png',
                ],
            }
        },
        player2: {
            index: 0,
            key: 'idle',
            images: {
                clap: [
                    path + 'images/personag/2_player/2_player_1/2_player_1_1.png',
                    path + 'images/personag/2_player/2_player_1/2_player_1_2.png',
                    path + 'images/personag/2_player/2_player_1/2_player_1_3.png',
                    path + 'images/personag/2_player/2_player_1/2_player_1_4.png',
                    path + 'images/personag/2_player/2_player_1/2_player_1_5.png',
                    path + 'images/personag/2_player/2_player_1/2_player_1_6.png',
                ],
                greatJoy: [
                    path + 'images/personag/2_player/2_player_2/2_player_2_1.png',
                    path + 'images/personag/2_player/2_player_2/2_player_2_2.png',
                    path + 'images/personag/2_player/2_player_2/2_player_2_3.png',
                    path + 'images/personag/2_player/2_player_2/2_player_2_4.png',
                    path + 'images/personag/2_player/2_player_2/2_player_2_5.png',
                    path + 'images/personag/2_player/2_player_2/2_player_2_6.png',
                ],
                miss: [
                    path + 'images/personag/2_player/2_player_3/2_player_3_1.png',
                    path + 'images/personag/2_player/2_player_3/2_player_3_2.png',
                    path + 'images/personag/2_player/2_player_3/2_player_3_3.png',
                    path + 'images/personag/2_player/2_player_3/2_player_3_4.png',
                    path + 'images/personag/2_player/2_player_3/2_player_3_5.png',
                    path + 'images/personag/2_player/2_player_3/2_player_3_6.png',
                ],
                fear: [
                    path + 'images/personag/2_player/2_player_4/2_player_4_1.png',
                    path + 'images/personag/2_player/2_player_4/2_player_4_2.png',
                    path + 'images/personag/2_player/2_player_4/2_player_4_3.png',
                    path + 'images/personag/2_player/2_player_4/2_player_4_4.png',
                    path + 'images/personag/2_player/2_player_4/2_player_4_5.png',
                    path + 'images/personag/2_player/2_player_4/2_player_4_6.png',
                ],
                victory: [
                    path + 'images/personag/2_player/2_player_5/2_player_5_1.png',
                    path + 'images/personag/2_player/2_player_5/2_player_5_2.png',
                    path + 'images/personag/2_player/2_player_5/2_player_5_3.png',
                    path + 'images/personag/2_player/2_player_5/2_player_5_4.png',
                    path + 'images/personag/2_player/2_player_5/2_player_5_5.png',
                    path + 'images/personag/2_player/2_player_5/2_player_5_6.png',
                ],
                upset: [
                    path + 'images/personag/2_player/2_player_6/2_player_6_1.png',
                    path + 'images/personag/2_player/2_player_6/2_player_6_2.png',
                    path + 'images/personag/2_player/2_player_6/2_player_6_3.png',
                    path + 'images/personag/2_player/2_player_6/2_player_6_4.png',
                    path + 'images/personag/2_player/2_player_6/2_player_6_5.png',
                    path + 'images/personag/2_player/2_player_6/2_player_6_6.png',
                ],
                idle: [
                    path + 'images/personag/2_player/2_player_clap/2_player_clap_1.png',
                    path + 'images/personag/2_player/2_player_clap/2_player_clap_2.png',
                    path + 'images/personag/2_player/2_player_clap/2_player_clap_3.png',
                    path + 'images/personag/2_player/2_player_clap/2_player_clap_4.png',
                    path + 'images/personag/2_player/2_player_clap/2_player_clap_5.png',
                    path + 'images/personag/2_player/2_player_clap/2_player_clap_6.png',
                ],
            }
        },
        player3: {
            index: 0,
            key: 'idle',
            images: {
                clap: [
                    path + 'images/personag/3_player/3_player_1/3_player_1_1.png',
                    path + 'images/personag/3_player/3_player_1/3_player_1_2.png',
                    path + 'images/personag/3_player/3_player_1/3_player_1_3.png',
                    path + 'images/personag/3_player/3_player_1/3_player_1_4.png',
                    path + 'images/personag/3_player/3_player_1/3_player_1_5.png',
                    path + 'images/personag/3_player/3_player_1/3_player_1_6.png',
                ],
                greatJoy: [
                    path + 'images/personag/3_player/3_player_2/3_player_2_1.png',
                    path + 'images/personag/3_player/3_player_2/3_player_2_2.png',
                    path + 'images/personag/3_player/3_player_2/3_player_2_3.png',
                    path + 'images/personag/3_player/3_player_2/3_player_2_4.png',
                    path + 'images/personag/3_player/3_player_2/3_player_2_5.png',
                    path + 'images/personag/3_player/3_player_2/3_player_2_6.png',
                ],
                miss: [
                    path + 'images/personag/3_player/3_player_3/3_player_3_1.png',
                    path + 'images/personag/3_player/3_player_3/3_player_3_2.png',
                    path + 'images/personag/3_player/3_player_3/3_player_3_3.png',
                    path + 'images/personag/3_player/3_player_3/3_player_3_4.png',
                    path + 'images/personag/3_player/3_player_3/3_player_3_5.png',
                    path + 'images/personag/3_player/3_player_3/3_player_3_6.png',
                ],
                fear: [
                    path + 'images/personag/3_player/3_player_4/3_player_4_1.png',
                    path + 'images/personag/3_player/3_player_4/3_player_4_2.png',
                    path + 'images/personag/3_player/3_player_4/3_player_4_3.png',
                    path + 'images/personag/3_player/3_player_4/3_player_4_4.png',
                    path + 'images/personag/3_player/3_player_4/3_player_4_5.png',
                    path + 'images/personag/3_player/3_player_4/3_player_4_6.png',
                ],
                victory: [
                    path + 'images/personag/3_player/3_player_5/3_player_5_1.png',
                    path + 'images/personag/3_player/3_player_5/3_player_5_2.png',
                    path + 'images/personag/3_player/3_player_5/3_player_5_3.png',
                    path + 'images/personag/3_player/3_player_5/3_player_5_4.png',
                    path + 'images/personag/3_player/3_player_5/3_player_5_5.png',
                    path + 'images/personag/3_player/3_player_5/3_player_5_6.png',
                ],
                upset: [
                    path + 'images/personag/3_player/3_player_6/3_player_6_1.png',
                    path + 'images/personag/3_player/3_player_6/3_player_6_2.png',
                    path + 'images/personag/3_player/3_player_6/3_player_6_3.png',
                    path + 'images/personag/3_player/3_player_6/3_player_6_4.png',
                    path + 'images/personag/3_player/3_player_6/3_player_6_5.png',
                    path + 'images/personag/3_player/3_player_6/3_player_6_6.png',
                ],
                idle: [
                    path + 'images/personag/3_player/3_player_clap/3_player_clap_1.png',
                    path + 'images/personag/3_player/3_player_clap/3_player_clap_2.png',
                    path + 'images/personag/3_player/3_player_clap/3_player_clap_3.png',
                    path + 'images/personag/3_player/3_player_clap/3_player_clap_4.png',
                    path + 'images/personag/3_player/3_player_clap/3_player_clap_5.png',
                    path + 'images/personag/3_player/3_player_clap/3_player_clap_6.png',
                ],
            }
        },
        bgTanuki: {
            index: 0,
            key: 'animate',
            images: {
                idle: [ 
                    path + 'images/bg_animation/Background_animation_tanuki/Background_animation_tanuki_1.png'
                ],
                animate: [
                    path + 'images/bg_animation/Background_animation_tanuki/Background_animation_tanuki_1.png',
                    path + 'images/bg_animation/Background_animation_tanuki/Background_animation_tanuki_2.png',
                    path + 'images/bg_animation/Background_animation_tanuki/Background_animation_tanuki_3.png',
                    path + 'images/bg_animation/Background_animation_tanuki/Background_animation_tanuki_4.png',
                ],
            }
        },
        tanuki: {
            index: 0,
            key: 'idle',
            images: {
                clap: [
                    path + 'images/personag/Tanuki/Tanuki_1/tanuki_1_1.png', 
                    path + 'images/personag/Tanuki/Tanuki_1/tanuki_1_2.png', 
                    path + 'images/personag/Tanuki/Tanuki_1/tanuki_1_3.png', 
                    path + 'images/personag/Tanuki/Tanuki_1/tanuki_1_4.png', 
                    path + 'images/personag/Tanuki/Tanuki_1/tanuki_1_5.png', 
                    path + 'images/personag/Tanuki/Tanuki_1/tanuki_1_6.png', 
                ],

                greatJoy: [
                    path + 'images/personag/Tanuki/Tanuki_2/tanuki_2_1.png',
                    path + 'images/personag/Tanuki/Tanuki_2/tanuki_2_2.png',
                    path + 'images/personag/Tanuki/Tanuki_2/tanuki_2_3.png',
                    path + 'images/personag/Tanuki/Tanuki_2/tanuki_2_4.png',
                    path + 'images/personag/Tanuki/Tanuki_2/tanuki_2_5.png',
                    path + 'images/personag/Tanuki/Tanuki_2/tanuki_2_6.png',
                ],
                miss: [
                    path + 'images/personag/Tanuki/Tanuki_3/tanuki_3_1.png',
                    path + 'images/personag/Tanuki/Tanuki_3/tanuki_3_2.png',
                    path + 'images/personag/Tanuki/Tanuki_3/tanuki_3_3.png',
                    path + 'images/personag/Tanuki/Tanuki_3/tanuki_3_4.png',
                    path + 'images/personag/Tanuki/Tanuki_3/tanuki_3_5.png',
                    path + 'images/personag/Tanuki/Tanuki_3/tanuki_3_6.png',
                ],
                fear: [
                    path + 'images/personag/Tanuki/Tanuki_4/tanuki_4_1.png',
                    path + 'images/personag/Tanuki/Tanuki_4/tanuki_4_2.png',
                    path + 'images/personag/Tanuki/Tanuki_4/tanuki_4_3.png',
                    path + 'images/personag/Tanuki/Tanuki_4/tanuki_4_4.png',
                    path + 'images/personag/Tanuki/Tanuki_4/tanuki_4_5.png',
                    path + 'images/personag/Tanuki/Tanuki_4/tanuki_4_6.png',
                ],
                victory: [
                    path + 'images/personag/Tanuki/Tanuki_5/tanuki_5_1.png',
                    path + 'images/personag/Tanuki/Tanuki_5/tanuki_5_2.png',
                    path + 'images/personag/Tanuki/Tanuki_5/tanuki_5_3.png',
                    path + 'images/personag/Tanuki/Tanuki_5/tanuki_5_4.png',
                    path + 'images/personag/Tanuki/Tanuki_5/tanuki_5_5.png',
                    path + 'images/personag/Tanuki/Tanuki_5/tanuki_5_6.png',
                ],
                upset: [
                    path + 'images/personag/Tanuki/Tanuki_6/tanuki_6_1.png',
                    path + 'images/personag/Tanuki/Tanuki_6/tanuki_6_2.png',
                    path + 'images/personag/Tanuki/Tanuki_6/tanuki_6_3.png',
                    path + 'images/personag/Tanuki/Tanuki_6/tanuki_6_4.png',
                    path + 'images/personag/Tanuki/Tanuki_6/tanuki_6_5.png',
                    path + 'images/personag/Tanuki/Tanuki_6/tanuki_6_6.png',
                ],

                idle: [
                    path + 'images/personag/Tanuki/Tanuki_clap/tanuki_clap_1.png',
                    path + 'images/personag/Tanuki/Tanuki_clap/tanuki_clap_2.png',
                    path + 'images/personag/Tanuki/Tanuki_clap/tanuki_clap_3.png',
                    path + 'images/personag/Tanuki/Tanuki_clap/tanuki_clap_4.png',
                    path + 'images/personag/Tanuki/Tanuki_clap/tanuki_clap_5.png',
                    path + 'images/personag/Tanuki/Tanuki_clap/tanuki_clap_6.png',
                ],
            },
        },
        modal: {
            index: 0,
            key: 'idle',
            images: {
                idle: [
                    path + 'images/bg.png',
                    path + 'images/block/ui/Tanuki_2.png',
                    path + 'images/block/ui/yes.png',
                    path + 'images/block/ui/Tanuki_score_2.png',
                    path + 'images/block/ui/Tanuki_score_1.png',
                    path + 'images/block/ui/Tanuki_score_3.png',
                    path + 'images/block/ui/Tanuki_1.png',
                    path + 'images/block/button.png',
                    path + 'images/back.png',
                    path + 'images/Frame_201.svg',
                    path + 'images/Frame_202.svg',
                ]
            }
        },
        timer: {
            index: 0,
            key: 'idle',
            images: {
                idle: [
                    path + 'images/block/ui/timer_3.png',
                    path + 'images/block/ui/timer_2.png',
                    path + 'images/block/ui/timer_1.png',
                ]
            }
        },
    },
    animationOn: {
        tanuki: true,
        bgTanuki: true,
        bgPlayer: true,
        player1: true,
        player2: true,
        player3: true,
    },
    create() {
        const userName = document.querySelector('[data-user-name]');
        if(userName) {
            this.userName = userName.dataset.userName;
        }
        //this.startGame();
    },
    start() {
        for(const i in this.helper) {
            this[i] = this.helper[i];
        }
        delete this.helper;
        this.init();
        this.load();
        this.create();
        this.animation();
        this.initEvent();
        this.run();
    },
    init() {
        this.canvas = document.getElementById('game');
        this.ctx = this.canvas.getContext('2d');
    },
    load() {
        const sprites = this.sprites;
        for(const key in sprites) {
            const sprite = sprites[key];
            if(sprite.index !== undefined) {
                sprite.loadImg = {};
                for(const typeKey in sprite.images) {
                    sprite.loadImg[typeKey] = [];
                    for(const imgKey in sprite.images[typeKey]) {
                        const imgNew = new Image();
                        imgNew.src = sprite.images[typeKey][imgKey];
                        sprite.loadImg[typeKey].push(imgNew);
                    }
                }
            }

        }
    },
    render: function() {
        //this.ctx.textAlign = 'left';
        this.ctx.textAlign = 'center';
        const sprites = this.sprites;
        this.ctx.clearRect(0, 0, this.width, this.hight);

        const background = sprites.background.loadImg[sprites.background.key][sprites.background.index];
        const tanukiBg = sprites.bgTanuki.loadImg[sprites.bgTanuki.key][sprites.bgTanuki.index];
        const triangle = sprites.triangle.loadImg[sprites.triangle.key][sprites.triangle.index];
        const btnEvent = sprites.btnEvent.loadImg[sprites.btnEvent.key][sprites.btnEvent.index];
        const tanuki = sprites.tanuki.loadImg[sprites.tanuki.key][sprites.tanuki.index];
        const ligth = sprites.ligth.loadImg[sprites.ligth.key][sprites.ligth.index];
        const infoBlock = sprites.infoBlock.loadImg[sprites.infoBlock.key][sprites.infoBlock.index];
        const bgPlayer = sprites.bgPlayer.loadImg["".concat(sprites.bgPlayer.key, sprites.bgPlayer.active)][sprites.bgPlayer.index];
        
        const playerKey = "player".concat(sprites.bgPlayer.active);
        const player = sprites[playerKey].loadImg[sprites[playerKey].key][sprites[playerKey].index];

        

        this.ctx.drawImage(background, 0, 0, 1920, 1080);
        this.ctx.drawImage(tanukiBg, -72, 440, 800, 650);

        this.ctx.globalAlpha = sprites.ligth.alpha.value;
        this.ctx.drawImage(ligth, 735, 700, 430, 400);
        this.ctx.globalAlpha = 1;



        this.drawText(this.gameTime(), [320, 185], 124, "#E63222");

        this.drawText('ОЧКИ', [230, 260], 35, "#C2C4F9");
        this.drawText(this.formateScore(this.info.score), [230, 335], 60, "#C2C4F9");

        this.drawText('КОМБО', [450, 260], 35, "#C2C4F9");
        this.drawText(`×${this.info.combo}`, [450, 335], 60, "#C2C4F9");

        this.ctx.drawImage(btnEvent, 1280, 700, 640, 290);
        this.ctx.drawImage(tanuki, 70, 525, 500, 500);

        this.ctx.drawImage(bgPlayer, 1200, 0, 800, 650);
        this.ctx.drawImage(player, 1350, 83, 500, 500);

        
        const round = this.info.round;

        if(this.info.roundMap[round]) {
            for(const line of this.info.roundMap[round]) {
                let sushi = sprites.sushi.loadImg[line.key][0];
                if(this.info.activePlayer === 'tanuki') {
                    if(line.changeTanuki && line.touch) {
                        sushi = sprites.sushi.loadImg[line.key][1];
                    }
                    this.ctx.drawImage(sushi, line.x, line.yTanuki, 200, 150);
                } else {
                    if(line.change && line.touch) {
                        sushi = sprites.sushi.loadImg[line.key][1];
                    } else if(line.change && !line.touch) {
                        sushi = sprites.sushi.loadImg[line.key][2];
                    }
                    this.ctx.drawImage(sushi, line.x, line.y, 200, 150);
                }
            }
        }
        this.ctx.drawImage(triangle, 745, 680, 400, 400);

        if(sprites.infoBlock.show) {
            this.ctx.drawImage(infoBlock, 550, 80, 800, 800);
        }

        if(this.info.modalMode) {

            

            this.ctx.globalAlpha = 0.8;
            this.ctx.fillStyle = "#181836";
            this.ctx.fillRect(0, 0, 1920, 1080);
            this.ctx.fillStyle = "#000";
            this.ctx.globalAlpha = 1;
            this.ctx.fillStyle = "#fff";
            
            this.ctx.drawImage(sprites.modal.loadImg['idle'][8], 10, 10, 110, 110);

            switch(this.info.modalMode) {
                case "selectPlayer":
                    this.ctx.drawImage(sprites.infoBlock.loadImg['idle'][sprites.bgPlayer.active === 2 ? 3 : 2], 50,   250, 520, 500);
                    this.ctx.drawImage(sprites.infoBlock.loadImg['idle'][sprites.bgPlayer.active === 3 ? 5 : 4], 700,  250, 520, 500);
                    this.ctx.drawImage(sprites.infoBlock.loadImg['idle'][sprites.bgPlayer.active === 1 ? 7 : 6], 1350, 250, 520, 500);
                    this.ctx.drawImage(sprites.modal.loadImg['idle'][7], 780, 840, 370, 160);
                    this.ctx.font = "60px " + this.options.fontName;
                    this.ctx.fillText("ВЫБРАТЬ", 965, 940);
                break;
                case "start":
                    this.ctx.font = "30px " + this.options.fontName;
                    this.ctx.drawImage(sprites.modal.loadImg['idle'][1], 450, 100);
                    this.ctx.fillText("Тануки", 900, 515);
                    const paddingBottom = 40;
                    this.ctx.textAlign = 'center';

                    const text = [
                        `Привет, ${this.userName}!`, 
                        `Давайте поддержим наших спортсменов`,
                        'аплодисментами. Просто повторяйте за мной', 
                        'и хлопай в ритм, чтобы заработать по больше',
                        'баллов! Готов? Тогда жми «СТАРТ!»',
                    ];
                    
                    for(const index in text) {
                        this.ctx.fillText(text[index], 1000, 623 + (paddingBottom * index));
                    }
                    this.ctx.textAlign = 'left';
                    const buttonJump = this.sprites.buttonJump.loadImg['idle'];
                    this.ctx.drawImage(buttonJump[2], 1575, 435, 350, 210);
                    this.ctx.font = "55px " + this.options.fontName;
                    this.ctx.fillText("СТАРТ!", 1645, 558);
                break;
                case "countdown":
                    this.ctx.drawImage(sprites.timer.loadImg['idle'][sprites.timer.index], 750, 320);
                break;
                case "score":
                    let face = 5;
                    
                    if(this.info.score <= this.info.scoreInfo.min) {
                        face = 6;
                    } else if (this.info.score <= this.info.scoreInfo.middle) {
                        face = 4;
                    }

                    this.ctx.drawImage(sprites.modal.loadImg['idle'][face], 450, 100);
                    if(face === 6) {
                        this.ctx.textAlign = 'center';
                            this.ctx.font = "40px " + this.options.fontName;
                            this.ctx.fillText("Ты набрал мало очков!", 1000, 680);
                            this.ctx.fillText("Хочешь попробовать еще раз?", 1000, 725);

                            this.ctx.drawImage(sprites.modal.loadImg['idle'][2], 1600, 530, 230, 105);
                            this.ctx.font = "40px " + this.options.fontName;
                            this.ctx.fillText("ДА!", 1715, 595);

                            this.ctx.drawImage(sprites.modal.loadImg['idle'][7], 1600, 720, 230, 105);
                            this.ctx.font = "40px " + this.options.fontName;
                            this.ctx.fillText("НЕТ!", 1715, 782);

                        this.ctx.textAlign = 'left';
                    } else {
                        this.ctx.font = "25px " + this.options.fontName;
                        this.ctx.fillText("Тануки", 900, 517);
                        this.ctx.textAlign = 'center';
                            this.ctx.font = "75px " + this.options.fontName;
                            this.ctx.fillText(this.info.xCombo, 785, 670);
                            this.ctx.font = "40px " + this.options.fontName;
                            this.ctx.fillText("КОМБО", 785, 740);
        
                            this.ctx.font = "75px " + this.options.fontName;
                            this.ctx.fillText(this.formateScore(this.info.score), 1195, 670);
                            this.ctx.font = "40px " + this.options.fontName;
                            this.ctx.fillText("БАЛЛЫ", 1200, 740);
                        this.ctx.textAlign = 'left';
                    }

                break;
            }
            this.ctx.fillStyle = "#000";
            //return false;
        }

        if(this.options.full) {
            this.ctx.drawImage(sprites.modal.loadImg['idle'][9], 1800, 10, 110, 110);
        } else {
            this.ctx.drawImage(sprites.modal.loadImg['idle'][10], 1800, 10, 110, 110);
        }
        
    },
    update: function() {

    },
    restart: function() {

    },
    run: function() {
        this.update();
        this.render(); 
        window.requestAnimationFrame(() => {
            this.run();
        });
    }
};
game.initEvent = function () {
    this.eventButton({
        event: {
            hover() { if(this.info.modalMode) this.canvas.style.cursor = "pointer"; },
            afterHover() { this.canvas.style.cursor = "" },
            click() { window.location.href = "/playgames.html" },
        }
    }, 10, 10, 110, 110);
    this.eventButton({
        event: {
            hover() { this.canvas.style.cursor = "pointer"; },
            afterHover() { this.canvas.style.cursor = "" },
            click() {
                this.fullScreen();
            },
        }
    }, 1800, 10, 110, 110);
    this.eventButton({
        event: {
            hover() { if(this.info.modalMode === 'start') this.canvas.style.cursor = "pointer"; },
            afterHover() { this.canvas.style.cursor = "" },
            click() { if(this.info.modalMode === 'start') { this.startTimer(function () { this.startGame(); }); } },
        }
    }, 1575, 435, 350, 210);
    this.eventButton({
        event: {
            hover() { if(this.info.modalMode === 'score') this.canvas.style.cursor = "pointer"; },
            afterHover() { this.canvas.style.cursor = "" },
            click() { if(this.info.modalMode === 'score') this.startGame() }
        }
    }, 1600, 530, 230, 105);
    this.eventButton({
        event: {
            hover() { if(this.info.modalMode === 'score') this.canvas.style.cursor = "pointer"; },
            afterHover() { this.canvas.style.cursor = ""; },
            click() { window.location.href = "/playgames.html"; }
        }
    }, 1600, 720, 230, 105);
    const userList = [
        { key: 2, position: [50,   250, 520, 500] },
        { key: 3, position: [700,  250, 520, 500] },
        { key: 1, position: [1350, 250, 520, 500] },
    ];
    for(const line of userList) {
        this.eventButton({
            event: {
                click() {
                    if(this.info.modalMode === 'selectPlayer') {
                        this.sprites.bgPlayer.active = line.key;
                    }
                },
                hover() {
                    if(this.info.modalMode === 'selectPlayer') {
                        this.canvas.style.cursor = 'pointer';
                    }
                },
                afterHover() {
                    this.canvas.style.cursor = '';
                },
            }
        }, ...line.position);
    }
    this.eventButton({
        event: {
            hover() {
                if(this.info.modalMode === 'selectPlayer') {
                    this.canvas.style.cursor = 'pointer';
                }
            },
            click() {
                if(this.info.modalMode === 'selectPlayer') {
                    this.info.modalMode = 'start';
                    //this.startGame();
                }
            },
            afterHover() {
                this.canvas.style.cursor = '';
            },
        }
    }, 780, 840, 370, 160)
    this.eventButton({
        event: {
            hover() {
                //if(this.info.activePlayer !== 'tanuki') {
                    this.canvas.style.cursor = 'pointer';
                //}
            },
            afterHover() {
                this.canvas.style.cursor = '';
            },
            click() {
                if(this.info.activePlayer === 'tanuki') {
                    return false;
                }
                const round = this.info.round;
                const list = this.info.roundMap[round].filter( item => item.die === false && item.change === false );
                
                if(list.length) {
                    const line = list[0];
                    // console.log(line.y, ' > ', this.options.sushiLine, " && ", line.y, " < ", this.options.sushiDie, " = ", line.y > this.options.sushiLine && line.y < this.options.sushiDie);
                    if(line.y > this.options.sushiLine - 50 && line.y < this.options.sushiDie) {
                        line.change = true;
                        this.addScore(1);
                        this.emotion(this.actualPlayer(), 'clap', {
                            action: () => this.flash(),
                            end: () => this.emotion(this.actualPlayer(), 'greatJoy', null, 600)
                        });
                    }
                }
            }
        }

    }, 1280, 700, 640, 290);
    document.body.onkeydown = (e) => {
        if(e.keyCode == 32) {
            //change(e);
        }
    }
    setInterval(() => {
        if(this.info.pause || this.info.pauseTime) return false;
        this.info.time--;
        if(this.info.time === 0) {
            this.gameOver();
        }
    }, 1000);
};
game.animation = function () {
    const animationMass = [
        { key: 'tanuki',    time: 100 },
        { key: 'bgTanuki',  time: 30 },
        { key: 'bgPlayer',  time: 30 },
        { key: 'player1',   time: 100 },
        { key: 'player2',   time: 100 },
        { key: 'player3',   time: 100 },
    ];
    for (const animation of animationMass) {
        setInterval(() => {
            if(this.info.pause) return false;
            const field = this.sprites[animation.key];
            let key = field.key;
            if(animation.key == 'bgPlayer') {
                key += this.sprites.bgPlayer.active; 
            }
            if(this.animationOn[animation.key] && field.images[key]) {
                field.index++;
                if(field.index >= field.images[key].length) {
                    field.index = 0;
                }
            } else field.index = 0;
        }, animation.time ? animation.time : 100);
    }
};
game.helper = {
    fullScreen() {
        this.options.full = !this.options.full;
        const mw = document.querySelector('#game-block');
        if(mw) {
            console.log('mw', mw);
            if(this.options.full) {
                console.log('fill');
                mw.classList.add('master-wrap_fixed');
                document.body.style.overflow = 'hidden';
            } else {
                mw.classList.remove('master-wrap_fixed');
                document.body.style.overflow = '';
            }
        }
    },
    actualPlayer() {
        return "player".concat(this.sprites.bgPlayer.active);
    },
    flash() {
        if(this.info.miumiu) clearInterval(this.info.miumiu);
        this.info.miumiu = null;
        this.sprites.ligth.alpha.value = this.sprites.ligth.alpha.min;
        let countMiumiu = 0;
        this.info.miumiu = setInterval(() => {
            this.sprites.ligth.alpha.value += 0.3;
            if(this.sprites.ligth.alpha.value >= this.sprites.ligth.alpha.max) {
                this.sprites.ligth.alpha.value = this.sprites.ligth.alpha.min;
                countMiumiu++;
            }
            if(countMiumiu == 5 && this.info.miumiu) {
                clearInterval(this.info.miumiu);
                this.sprites.ligth.alpha.value = 0;
            }
        }, 100);
    },
    getUniques(min, max, n){
        n = n || 1;
        if(n > max-min+1 || n < 0) return [];
        var t = [];
        for(var i = 0; i < n; ++i){
            var a = Math.round(Math.random() * (max-min)) + min;
            if(t[a]) --i;
            t[a] = 1;
        }
        var ret = [];
        for(i in t) ret[ret.length] = ~~i;
        return ret;
    },
    generateLevel() {
        this.info.pauseTime = true;
        const round = this.info.round;
        
        let countSushi = this.info.time < (120 / 2) ? 10 : 5;
        const touchMass = this.getUniques(0, countSushi - 1, countSushi === 5 ? 2 : 5);
        if(!this.info.roundMap[round]) {
            this.info.roundMap[round] = [];
            let y = -30;
            while (countSushi) {
                const key = Math.floor(Math.random() * (Math.floor(Object.values(this.sprites.sushi.images).length) - Math.ceil(1)) + Math.ceil(1));
                const roundMapItem = { 
                    x: 850,
                    y,
                    yTanuki: y,
                    changeTanuki: false,
                    touch: false,
                    change: false,
                    die: false,
                    dieTanuki: false,
                    key,
                    default: {
                        y,
                        touch: false,
                        changeTanuki: false,
                        dieTanuki: false,
                        change: false,
                        die: false,
                    }
                };
                if(touchMass.includes(this.info.roundMap[round].length)) {
                    roundMapItem.touch = true;
                    roundMapItem.default.touch = true;
                }
                this.info.roundMap[round].push(roundMapItem);
                y -= 150;
                y -= (30 * key);
                countSushi--;
            }
        }
        this.tanukiStart();
    },
    tanukiStart() {
        const round = this.info.round;
        this.info.activePlayer = 'tanuki';
        this.sprites.infoBlock.index = 0;
        this.sprites.infoBlock.show = true;
        setTimeout(() => {
            this.sprites.infoBlock.show = false;
            this.info.tanukiTime = setInterval(() => {
                for(const line of this.info.roundMap[round]) {
                    line.yTanuki += this.info.speed;
                    if(line.yTanuki > this.options.sushiLine && !line.changeTanuki && line.touch) {
                        line.changeTanuki = true;
                        this.emotion('tanuki', 'clap', {
                            action: () => this.flash(),
                        }, 600);
                    } else if (line.yTanuki > this.options.sushiDie && !line.dieTanuki && !line.changeTanuki) {
                        line.dieTanuki = true;
                    }
                }
                if(this.info.roundMap[round].every(item => item.changeTanuki || item.dieTanuki)) {
                    clearInterval(this.info.tanukiTime);
                    this.palayerStart();
                }
            }, 10);
        }, 2000);
    },
    palayerStart() {
        this.info.activePlayer = 'player';
        this.sprites.infoBlock.index = 1;
        this.sprites.infoBlock.show = true;
        // this.sprites.bgPlayer.key = 'animate';
        const round = this.info.round;
        setTimeout(() => {
            this.sprites.infoBlock.show = false;
            this.info.pauseTime = false;
            this.info.tanukiTime = setInterval(() => {
                for(const line of this.info.roundMap[round]) {
                    line.y += this.info.speed;
                    if(line.y > this.options.sushiDie && !line.die && !line.change) {
                        if(!line.touch) {
                            this.emotion(this.actualPlayer(), 'miss', null, 600);
                        }
                        line.die = true;
                    }
                }
                if(this.info.roundMap[round].every(item => item.change || item.die)) {
                    if(this.info.roundMap[round].filter(item => item.touch).every(item => item.change)) {
                        this.addScore(this.info.roundMap[round].length);
                        this.addScore(10 * (this.info.combo - 1));
                        this.addCombo();
                        this.emotion(this.actualPlayer(), 'greatJoy', null, 1000);
                    } else {
                        this.emotion(this.actualPlayer(), 'fear', null, 1000);
                        this.setCombo(1);
                    }
                    
                    this.info.speed += 0.1;

                    //setCombo

                    clearInterval(this.info.tanukiTime);
                    this.info.round++;
                    // this.sprites.bgPlayer.index = 0;
                    // this.sprites.bgPlayer.key = 'idle';
                    this.generateLevel();
                }
            }, 10);
        }, 2000);

    },
    emotion(personag = 'tanuki', animation = 'clap', event = null, time = 200) {
        this.sprites[personag].index = 0;
        this.sprites[personag].key = animation;
        if(event && event.action) event.action.apply(this);
        if(this.sprites[personag].animat) {
            clearTimeout(this.sprites[personag].animat);
        }
        this.sprites[personag].animat = setTimeout(() => {
            this.sprites[personag].index = 0;
            this.sprites[personag].key = 'idle';
            console.log(personag, 'idle');
            if(event && event.end) event.end.apply(this);
        }, time);
    },
    drawText(text, postion = [0, 0], size = 24, color = "#000") {
        this.ctx.fillStyle = color;
        this.ctx.font = "".concat(size, "px ", this.options.fontName);
        this.ctx.fillText(text, ...postion);
        this.ctx.fillStyle = "#000";
    },
    gameOver() {
        this.info.modalMode = 'score';
        this.info.pause = true;
        if(this.info.score > this.info.scoreInfo.min) {
            const formData = new FormData();
            
            formData.append('score', this.info.score);
            formData.append('gameType', 'game3');

            try {
                fetch('/ajax/jump.php', { method: 'POST', body: formData });
            } catch (error) {
                console.error('Ошибка:', error);
            }
        }
    },
    formateScore: (score) => score > 9999 ? score : ('0'.repeat(4 - `${score}`.length)).concat(score),
    startGame() {
        this.info.pause = false;
        this.info.speed = 4;
        this.info.miumiu = null;
        this.info.pauseTime = false;
        this.info.score = 0;
        this.info.xCombo = 0;
        this.info.round = 0;
        this.info.roundMap = {};
        this.info.time = 2;
        this.info.score = 200;
        this.info.combo = 1;
        this.info.modalMode = '';
        if(this.info.miumiu) clearInterval(this.info.miumiu);
        this.info.miumiu = null;
        this.sprites.ligth.alpha.value = 0;

        if(this.info.tanukiTime) clearInterval(this.info.tanukiTime);
        this.info.tanukiTime = null;

        this.generateLevel();
    },
    startTimer(callback = null) {
        this.sprites.timer.index = 0;
        this.info.modalMode = 'countdown';
        this.info.pause = true;
        setInterval(() => this.sprites.timer.index++ , 1000);
        this.info.timerStart = setInterval(() => {
            clearInterval(this.info.timerStart);
            this.info.timerStart = null;
            this.info.modalMode = '';
            if(callback) callback.apply(this);
        }, 3000);
    },
    eventButton(options = {}, x = 0, y = 0, width = 0, height = 0) {
        let hover = false;
        const getCursorPosition = (e) => {
            const canvas = this.canvas;
            const rect = canvas.getBoundingClientRect();
            let xV = e.clientX;
            let yV = e.clientY;
            if('touches' in e) {
                xV = e.touches[0].pageX;
                yV = e.touches[0].pageY;
            }
            return {
                x: (xV - rect.left) / (rect.right - rect.left) * canvas.width,
                y: (yV - rect.top) / (rect.bottom - rect.top) * canvas.height
            };
        }
        this.canvas.addEventListener("mousemove", (e) => {
            const position = getCursorPosition(e);
            const check = (position.x >= x && position.x < x + width && position.y >= y && position.y < y + height);
            if(check && !hover) {
                hover = true;
                if(options.event.hover) options.event.hover.apply(this);
            } else if (!check && hover) {
                hover = false;
                if(options.event.afterHover) options.event.afterHover.apply(this);
            }
        });
        const clickFunction = (e) => {
            const position = getCursorPosition(e);
            const check = (position.x >= x && position.x < x + width && position.y >= y && position.y < y + height);
            if(check) {
                options.event.click.apply(this);
            }
        };

        if(options.event.click) {
            this.canvas.addEventListener("mousedown", clickFunction);
            this.canvas.addEventListener("touch", clickFunction);
        }
    },
    gameTime() {
        const toInt = (num) => (("" + num).length < 2 ? "0".concat(num) : num);
        const m = Math.floor(this.info.time / 60);
        const s = this.info.time % 60;
        return ("" + m).concat(":", toInt(s));
    },
    summXFactorAndAddBonus(number) {
        return number;
    },
    addScore(number = 1) {
        this.info.score += this.summXFactorAndAddBonus(number);
    },
    addCombo() {
        if(this.info.combo < 5) {
            this.info.combo += 1;
        }
        this.info.xCombo += 1;
    },
    setCombo(number = 1) {
        this.info.combo = number;
    },
    formateScore: (score) => score > 9999 ? score : ('0'.repeat(4 - `${score}`.length)).concat(score),
};

game.start();

// const startGame = (fullScreen = false) => {
//     if(fullScreen) {
//         game.helper.enterFullscreen('game-block');
//     }
//     document.getElementsByTagName('main')[0].removeAttribute('style');
    
// };

// window.addEventListener("load", () => {
//     document.getElementById('full').addEventListener('click', () => startGame());
//     document.getElementById('notfull').addEventListener('click', () => startGame());
// });
