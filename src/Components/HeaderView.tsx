import styled from 'styled-components';
import { motion, Variants, useViewportScroll } from 'framer-motion';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Header = styled.header`
	position: fixed;
	top: 0;
	width: 100%;
	backdrop-filter: blur(3px);
	background-color: rgba(0, 0, 0, 0.4);
	z-index: 5;
`;
const Nav = styled(motion.nav)`
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 100%;
	font-size: 14px;
	padding: 0 40px;
	color: ${(props) => props.theme.white.lighter};
	z-index: 10;
`;

const ColGroup = styled.div`
	display: flex;
	align-items: center;
`;

const Logo = styled(motion.svg)`
	margin-right: 50px;
	width: 120px;
	height: 32px;
	fill: ${(props) => props.theme.red};
	path {
		stroke-width: 6px;
		stroke: ${(props) => props.theme.white.veryDark};
	}
	a {
		display: block;
		position: relative;
		z-index: 5;
	}
`;

const ListItems = styled.ul`
	display: flex;
	align-items: center;
`;

const Item = styled.li<{ active: boolean }>`
	position: relative;
	width: 140px;
	text-align: center;
	font-size: 20px;
	padding-bottom: 3px;

	color: ${(props) =>
    props.active ? props.theme.red : props.theme.white.darker};
	transition: color 0.3s ease-in-out;
	a {
		font-size: 20px;
		font-weight: bold;
		height: 70px;
		display: flex;
		justify-content: center;
		flex-direction: column;
        color: inherit;
	}
	a:hover {
		color: ${(props) => props.theme.white.veryDark};
		transition: color 0.2s;
	}
`;
const ItemActive = styled(motion.span)`
	position: absolute;
	width: 100%;
	height: 3px;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: ${(props) => props.theme.red};
`;

const SearchForm = styled.form`
	display: flex;
	align-items: center;
	position: relative;
	height: 42px;
	color: ${(props) => props.theme.white.lighter};
	svg {
		height: 25px;
		cursor: pointer;
	}
	z-index: 5;
`;

const SearchWrap = styled.div`
	position: relative;
	height: 100%;
	width: 300px;
	svg {
		position: absolute;
		top: 8px;
		left: 12px;
		z-index: 1;
	}
`;

const Input = styled(motion.input)`
	transform-origin: right center;
	position: absolute;
	right: 0;
	padding: 5px 10px;
	padding-left: 50px;
	color: ${(props) => props.theme.white.lighter};
	font-size: 16px;
	background-color: rgba(0, 0, 0, 0.5);
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	border: 1px solid ${(props) => props.theme.white.lighter};
	border-radius: 4px;
	outline: none;
	::placeholder {
		color: ${(props) => props.theme.white.veryDark};
	}
`;

const BtnReset = styled.button`
	background: transparent;
	height: 100%;
	border: 0;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	padding: 0 12px;
	cursor: pointer;
`;

const Mask = styled.article`
	background-color: transparent;
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	overflow: hidden;
	text-indent: 100%;
	white-space: nowrap;
	z-index: 1;
`;

const logoVariants = {
    normal: {
        fillOpacity: 1,
    },
    active: {
        fillOpacity: [0, 1],
        transition: {},
    },
};

const pathVariants: Variants = {
    start: {
        fill: 'rgba(255,255,255,0.1)',
        pathLength: 0,
    },
    end: {
        fill: '#e51013',
        pathLength: 1,
        transition: {
            fill: { duration: 1.1, delay: 1.1 },
            pathLength: { duration: 1.6 },
        },
    },
};

// 검색
interface IForm {
    keyword: string;
}

function HeaderView() {
    // 페이지 이동
    const homeMatch = useMatch('/');
    const movieMatch = useMatch('/movie/:category');
    const movieDetailsMatch = useMatch('/movie/:category/:id');
    const tvShowMatch = useMatch('/tv/:category');
    const tvShowDetailsMatch = useMatch('/tv/:category/:id');

    // 검색 입력창 노출, 비노출
    const [searchOpen, setSearchOpen] = useState(false);
    const toggleSearch = () => {
        setSearchOpen((prev) => !prev);
        setFocus('keyword');
    };
    // const toggleSearch = () => setSearchOpen((prev) => !prev);
    const { scrollY } = useViewportScroll();
    const [scrollVal, setScrollYVal] = useState(0);

    scrollY.onChange(() => {
        setScrollYVal(scrollY.get());
    });

    const navigate = useNavigate();
    const { register, handleSubmit, setFocus, resetField } = useForm<IForm>();
    const onValid = (data: IForm) => {
        navigate(`/search?keyword=${data.keyword}`);
        setSearchOpen((prev) => !prev);
        resetField('keyword');
    };
    const handleReset = () => resetField('keyword');

    return (
        <>
            <Header>
                <Nav
                    initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                    animate={{
                        backgroundColor:
                            scrollVal > 80 ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0)',
                    }}
                >
                    <ColGroup>
                        <>
                            <Link to='/'>
                                <Logo
                                    // variants={logoVariants}
                                    // whileHover='active'
                                    // animate='normal'
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='1024'
                                    height='276.742'
                                    viewBox='0 0 1024 276.742'
                                >
                                    <motion.path
                                        variants={pathVariants}
                                        initial='start'
                                        animate='end'
                                        strokeWidth='1'
                                        d='M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z'
                                    />
                                </Logo>
                            </Link>
                        </>
                        <ListItems>
                            <Item active={homeMatch ? true : false}>
                                <Link to='/'>홈 {homeMatch && <ItemActive />}</Link>
                            </Item>
                            <Item active={movieMatch ? true : false}>
                                <Link to='/movie/popular'>
                                    영화 {(movieMatch || movieDetailsMatch) && <ItemActive />}
                                </Link>
                            </Item>
                            <Item active={tvShowMatch ? true : false}>
                                <Link to='/tv/popular'>
                                    Tv {(tvShowMatch || tvShowDetailsMatch) && <ItemActive />}
                                </Link>
                            </Item>
                        </ListItems>
                    </ColGroup>
                    <ColGroup>
                        <SearchForm onSubmit={handleSubmit(onValid)}>
                            {/* 클릭하지 않았을 때 */}
                            {!searchOpen && (
                                <motion.svg
                                    onClick={toggleSearch}
                                    animate={{ x: 0 }}
                                    transition={{ type: 'linear' }}
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                                        clipRule='evenodd'
                                    />
                                </motion.svg>
                            )}
                            {/* 클릭했을 때 */}
                            {searchOpen && (
                                <SearchWrap>
                                    <motion.svg
                                        onClick={toggleSearch}
                                        initial={{ x: 222 }}
                                        transition={{ type: 'linear' }}
                                        animate={{ x: 0 }}
                                        fill='currentColor'
                                        viewBox='0 0 20 20'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                                            clipRule='evenodd'
                                        />
                                    </motion.svg>
                                    <Input
                                        {...register('keyword', { required: true })}
                                        initial={{ scaleX: 0 }}
                                        transition={{ type: 'linear' }}
                                        animate={{ scaleX: 1 }}
                                        placeholder='제목, 사람, 장르...'
                                    />
                                    <BtnReset type='button' onClick={handleReset}>
                                        ❌
                                    </BtnReset>
                                </SearchWrap>
                            )}
                        </SearchForm>
                    </ColGroup>
                </Nav>
            </Header>
            {searchOpen && <Mask onClick={toggleSearch}>Search 암막</Mask>}
        </>
    );
}

export default HeaderView;