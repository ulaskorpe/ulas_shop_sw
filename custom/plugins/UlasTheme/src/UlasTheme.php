<?php declare(strict_types=1);

namespace UlasTheme;

use Shopware\Core\Framework\Plugin;
use Shopware\Storefront\Framework\ThemeInterface;

class UlasTheme extends Plugin implements ThemeInterface
{

    public function getThemeConfigPath():string 
    {
        return "theme.json";
    }
}