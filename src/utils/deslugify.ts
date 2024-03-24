const deslugify = (slug: string): string => {
    return slug
      .replace(/-and-/g, ' & ')
      .replace(/-/g, ' ')
      .replace(/\b\w/g, char => char.toUpperCase());
  }
  
  export default deslugify;