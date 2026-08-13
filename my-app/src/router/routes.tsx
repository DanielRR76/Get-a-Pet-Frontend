import {
  Home,
  Login,
  AddPet,
  EditPet,
  MyAdoptions,
  MyPets,
  PetDetails,
  Profile,
  Register,
} from "../pages";

export const PATH = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  PROFILE: "/user/profile",
  MY_PETS: "/pet/mypets",
  MY_ADOPTIONS: "/pet/myadoptions",
  ADD_PET: "/pet/add",
  PET_DETAILS: "/pet/:id",
  EDIT_PET: "/pet/edit/:id",
} as const;

export const ROUTES = {
  HOME: {
    path: PATH.HOME,
    element: <Home />,
  },
  LOGIN: {
    path: PATH.LOGIN,
    element: <Login />,
  },
  REGISTER: {
    path: PATH.REGISTER,
    element: <Register />,
  },
  PROFILE: {
    path: PATH.PROFILE,
    element: <Profile />,
  },
  MY_PETS: {
    path: PATH.MY_PETS,
    element: <MyPets />,
  },
  MY_ADOPTIONS: {
    path: PATH.MY_ADOPTIONS,
    element: <MyAdoptions />,
  },
  ADD_PET: {
    path: PATH.ADD_PET,
    element: <AddPet />,
  },
  PET_DETAILS: {
    path: PATH.PET_DETAILS,
    element: <PetDetails />,
  },
  EDIT_PET: {
    path: PATH.EDIT_PET,
    element: <EditPet />,
  },
} as const;
