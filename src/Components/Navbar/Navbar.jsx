import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Badge,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import logo from "../../assets/logo - Copy.png";

const navListMenuItems = [
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
  },
  {
    title: "About Us",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
  },
  {
    title: "Blog",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
  },
  {
    title: "Services",
    description: "Learn how we can help you achieve your goals.",
    icon: SunIcon,
  },
  {
    title: "Support",
    description: "Reach out to us for assistance or inquiries",
    icon: GlobeAmericasIcon,
  },
  {
    title: "Contact",
    description: "Find the perfect solution for your needs.",
    icon: PhoneIcon,
  },
  {
    title: "News",
    description: "Read insightful articles, tips, and expert opinions.",
    icon: NewspaperIcon,
  },
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: RectangleGroupIcon,
  },
  {
    title: "Special Offers",
    description: "Explore limited-time deals and bundles",
    icon: TagIcon,
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to="/products">
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            Women
          </ListItem>
        </Link>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Men</ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Kids</ListItem>
      </Typography>
    </List>
  );
}

export function CustomNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const cartItems = localStorage.getItem("cart");
  const items = JSON.parse(cartItems);

  const handleDeleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id); // Filter out the item
    setProducts(updatedItems); // Update state
    localStorage.setItem("cart", JSON.stringify(updatedItems)); // Update localStorage
  };

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 text-black mt-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          <Link to="/">
            <img
              style={{
                width: "65px",
                borderRadius: "5px",
              }}
              src={logo}
              alt=""
            />
          </Link>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <div className="flex items-center">
            <Menu>
              <MenuHandler>
                <button>
                  <Badge content={items?.length || 0}>
                    <img
                      style={{ width: "24px", cursor: "pointer" }}
                      src="https://i.ibb.co.com/xhhVnQ3/download.png"
                      alt=""
                    />
                  </Badge>
                </button>
              </MenuHandler>
              <MenuList>
                {items.map((item) => (
                  <>
                    <MenuItem>
                      <div className="flex items-center">
                        <div>
                          <img
                            className="rounded"
                            style={{ width: "50px" }}
                            src={item?.image}
                            alt=""
                          />
                        </div>
                        <div className="ml-2 font-bold">
                          <h1 className="mr-5 my-2">
                            {item?.name.slice(0, 20)}.....
                          </h1>
                          <div className="flex justify-between mt-3">
                            <small>Quantity: {item?.quantity}</small>
                            <p>Tk {Number(item?.price) * item?.quantity}</p>
                          </div>
                          <div className="flex justify-end mt-2">
                            <button
                              onClick={() => handleDeleteItem(item.id)}
                              className=""
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </MenuItem>
                  </>
                ))}
                {items.length > 0 ? (
                  <>
                    <MenuItem>
                      <div className="flex justify-between font-bold mb-4 mt-5">
                        <p className="ml-3">Total Price:</p>
                        <p>
                          Tk{" "}
                          {Math.round(
                            items?.reduce(
                              (total, item) =>
                                total +
                                Number(item?.price || 0) *
                                  (item?.quantity || 0),
                              0
                            )
                          )}
                        </p>
                      </div>
                      <div className="flex justify-end mt-5">
                        <Link to="/cart">
                          <Button size="sm" className="flex items-center">
                            Check out
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="ml-2 size-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
                              />
                            </svg>
                          </Button>
                        </Link>
                      </div>
                    </MenuItem>
                  </>
                ) : (
                  <>
                    <p className="p-5">Your cart is empty</p>
                  </>
                )}
              </MenuList>
            </Menu>
          </div>
          <Link to="/login">
            <Button variant="text" size="sm" color="blue-gray">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button variant="gradient" size="sm">
              Sign In
            </Button>
          </Link>
        </div>

        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>

      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Link to="login">
            <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
              Log In
            </Button>
          </Link>
          <Link to="signup">
            <Button variant="gradient" size="sm" fullWidth>
              Sign In
            </Button>
          </Link>
        </div>
      </Collapse>
    </Navbar>
  );
}
