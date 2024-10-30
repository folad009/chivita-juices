import RecipeOverview from "@/components/recipes/RecipeOverview";
import BreadcrumbRoundedElevatedTextIconPreview from '@/components/common/BreadCrumb'

const RecipePage = () => {

  return (
    <>
    <BreadcrumbRoundedElevatedTextIconPreview currentPage="Recipes" />
    <RecipeOverview />
    </>
    
  );
};

export default RecipePage;
